import { LinkedInCompany, LinkedInIndustry, LinkedInPosition } from './linkedin-company.entity';
import { LinkedInProfile } from './linkedin-profile.entity';
export interface Profile extends LinkedInProfile {
    company: LinkedInCompany;
    position: LinkedInPosition;
    industries: LinkedInIndustry[];
    pictureUrls: string[];
}
