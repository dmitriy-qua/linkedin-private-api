"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileRepository = exports.getProfilesFromResponse = void 0;
const lodash_1 = require("lodash");
const linkedin_company_entity_1 = require("../entities/linkedin-company.entity");
const linkedin_mini_profile_entity_1 = require("../entities/linkedin-mini-profile.entity");
const linkedin_profile_entity_1 = require("../entities/linkedin-profile.entity");
const checkHeadline = (headline = "", name = "") => {
    return headline.toLowerCase().includes(name.toLowerCase());
};
const getProfilePictureUrls = (picture) => lodash_1.map(picture === null || picture === void 0 ? void 0 : picture.artifacts, artifact => `${picture === null || picture === void 0 ? void 0 : picture.rootUrl}${artifact.fileIdentifyingUrlPathSegment}`);
const transformMiniProfile = (miniProfile) => ({
    ...miniProfile,
    pictureUrls: getProfilePictureUrls(miniProfile.picture),
    profileId: (miniProfile.entityUrn || '').replace('urn:li:fs_miniProfile:', ''),
});
const getProfilesFromResponse = (response) => {
    const miniProfiles = lodash_1.filter(response.included, p => p.$type === linkedin_mini_profile_entity_1.MINI_PROFILE_TYPE);
    const transformedMiniProfiles = miniProfiles.map((miniProfile) => transformMiniProfile(miniProfile));
    return lodash_1.keyBy(transformedMiniProfiles, 'profileId');
};
exports.getProfilesFromResponse = getProfilesFromResponse;
class ProfileRepository {
    constructor({ client }) {
        this.client = client;
    }
    async getProfile({ publicIdentifier }) {
        const response = await this.client.request.profile.getProfile({ publicIdentifier });
        const results = response.included || [];
        const industries = results.filter(r => r.$type === linkedin_company_entity_1.INDUSTRY_TYPE);
        const profile = results.find(r => r.$type === linkedin_profile_entity_1.PROFILE_TYPE && r.publicIdentifier === publicIdentifier);
        const position = results.find(r => r.$type === linkedin_company_entity_1.POSITION_TYPE && (checkHeadline(profile.headline, r.name) || (!!r.dateRange && !r.dateRange.end)));
        let company;
        if (position)
            company = results.find(r => r.$type === linkedin_company_entity_1.COMPANY_TYPE && (r.entityUrn === position.companyUrn));
        else
            company = results.find(r => r.$type === linkedin_company_entity_1.COMPANY_TYPE && checkHeadline(profile.headline, r.name));
        const pictureUrls = getProfilePictureUrls(lodash_1.get(profile, 'profilePicture.displayImageReference.vectorImage', {}));
        return {
            ...profile,
            company,
            industries,
            pictureUrls,
        };
    }
    async getOwnProfile() {
        var _a;
        const response = await this.client.request.profile.getOwnProfile();
        const miniProfile = (_a = response === null || response === void 0 ? void 0 : response.included) === null || _a === void 0 ? void 0 : _a.find(r => r.$type === linkedin_mini_profile_entity_1.MINI_PROFILE_TYPE);
        if (!miniProfile) {
            return null;
        }
        return this.getProfile(miniProfile);
    }
}
exports.ProfileRepository = ProfileRepository;
//# sourceMappingURL=profile.repository.js.map