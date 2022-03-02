import { LinkedInCompany, LinkedInIndustry } from './linkedin-company.entity';
import { LinkedInProfile } from './linkedin-profile.entity';
export interface Profile extends LinkedInProfile {
    company: LinkedInCompany;
    industries: LinkedInIndustry[];
    pictureUrls: string[];
}
