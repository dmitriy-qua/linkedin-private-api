import {filter, get, keyBy, map} from 'lodash';

import {Client} from '../core/client';
import {
  COMPANY_TYPE,
  INDUSTRY_TYPE,
  LinkedInCompany,
  LinkedInIndustry,
  LinkedInPosition,
  POSITION_TYPE
} from '../entities/linkedin-company.entity';
import {LinkedInMiniProfile, MINI_PROFILE_TYPE} from '../entities/linkedin-mini-profile.entity';
import {LinkedInProfile, PROFILE_TYPE} from '../entities/linkedin-profile.entity';
import {LinkedInVectorImage} from '../entities/linkedin-vector-image.entity';
import {MiniProfile, ProfileId} from '../entities/mini-profile.entity';
import {Profile} from '../entities/profile.entity';

const checkHeadline = (headline = ".", name = ","): boolean => {
  return headline.toLowerCase().includes(name.toLowerCase())
}

const getProfilePictureUrls = (picture?: LinkedInVectorImage): string[] =>
  map(picture?.artifacts, artifact => `${picture?.rootUrl}${artifact.fileIdentifyingUrlPathSegment}`);

const transformMiniProfile = (miniProfile: LinkedInMiniProfile): MiniProfile => ({
  ...miniProfile,
  pictureUrls: getProfilePictureUrls(miniProfile.picture),
  profileId: (miniProfile.entityUrn || '').replace('urn:li:fs_miniProfile:', ''),
});

export const getProfilesFromResponse = <T extends { included: (LinkedInMiniProfile | { $type: string })[] }>(
  response: T,
): Record<ProfileId, MiniProfile> => {
  const miniProfiles = filter(response.included, p => p.$type === MINI_PROFILE_TYPE) as LinkedInMiniProfile[];

  const transformedMiniProfiles = miniProfiles.map((miniProfile: LinkedInMiniProfile) => transformMiniProfile(miniProfile));

  return keyBy(transformedMiniProfiles, 'profileId');
};

export class ProfileRepository {
  private client: Client;

  constructor({ client }: { client: Client }) {
    this.client = client;
  }

  async getProfile({ publicIdentifier }: { publicIdentifier: string }): Promise<Profile> {
    const response = await this.client.request.profile.getProfile({ publicIdentifier });
    console.log(response)
    const results = response.included || [];
    const industries = results.filter(r => r.$type === INDUSTRY_TYPE) as LinkedInIndustry[];
    const profile = results.find(r => r.$type === PROFILE_TYPE && r.publicIdentifier === publicIdentifier) as LinkedInProfile;
    const position = results.find(r => r.$type === POSITION_TYPE && (checkHeadline(profile.headline, r.name) || (!!r.dateRange && !r.dateRange.end))) as LinkedInPosition;

    let company
    if (position) company = results.find(r => r.$type === COMPANY_TYPE && (r.entityUrn === position.companyUrn)) as LinkedInCompany;
    else company = results.find(r => r.$type === COMPANY_TYPE && checkHeadline(profile.headline, r.name)) as LinkedInCompany;

    const pictureUrls = getProfilePictureUrls(get(profile, 'profilePicture.displayImageReference.vectorImage', {}));

    return {
      ...profile,
      company,
      industries,
      pictureUrls,
    };
  }

  async getOwnProfile(): Promise<Profile | null> {
    const response = await this.client.request.profile.getOwnProfile();

    const miniProfile = response?.included?.find(r => r.$type === MINI_PROFILE_TYPE);

    if (!miniProfile) {
      return null;
    }

    return this.getProfile(miniProfile);
  }
}
