import { LinkedInCollectionResponse } from '../entities/linkedin-collection-response.entity';
import { LinkedInCompany, LinkedInIndustry, LinkedInPosition } from '../entities/linkedin-company.entity';
import { LinkedInProfile, ProfileUrn } from '../entities/linkedin-profile.entity';
export declare type GetProfileResponse = LinkedInCollectionResponse<ProfileUrn, LinkedInProfile | LinkedInCompany | LinkedInIndustry | LinkedInPosition>;
