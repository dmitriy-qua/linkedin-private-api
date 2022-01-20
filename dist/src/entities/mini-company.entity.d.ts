import { LinkedInMiniCompany } from './linkedin-mini-company.entity';
export declare type CompanyId = string;
export interface MiniCompany extends LinkedInMiniCompany {
    companyId: CompanyId;
}
