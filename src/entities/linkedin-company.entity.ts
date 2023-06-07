import { LinkedInVectorImage } from './linkedin-vector-image.entity';

export const POSITION_TYPE = 'com.linkedin.voyager.dash.identity.profile.Position';
export const COMPANY_TYPE = 'com.linkedin.voyager.dash.organization.Company';
export const INDUSTRY_TYPE = 'com.linkedin.voyager.dash.common.Industry';

export interface LinkedInPosition {
  $type: typeof POSITION_TYPE;
  $anti_abuse_annotations: {
    attributeId: number;
    entityId: number;
  }[];
  $recipeTypes: string[];
  companyUrn: string;
  industry: Record<string, string>;
  industryUrns: string[];
  name: string;
  universalName: string;
  url: string;
  dateRange: {
    start: string;
    end: string;
  };
}

export interface LinkedInCompany {
  $type: typeof COMPANY_TYPE;
  $anti_abuse_annotations: {
    attributeId: number;
    entityId: number;
  }[];
  $recipeTypes: string[];
  entityUrn: string;
  industry: Record<string, string>;
  industryUrns: string[];
  logo: {
    vectorImage: LinkedInVectorImage;
  };
  name: string;
  universalName: string;
  url: string;
}

export interface LinkedInIndustry {
  $type: typeof INDUSTRY_TYPE;
  name: string;
}
