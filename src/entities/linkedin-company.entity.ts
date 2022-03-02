import { LinkedInVectorImage } from './linkedin-vector-image.entity';

export const COMPANY_TYPE = 'com.linkedin.voyager.dash.identity.profile.Position';
export const INDUSTRY_TYPE = 'com.linkedin.voyager.dash.common.Industry';

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
    vetorImage: LinkedInVectorImage;
  };
  name: string;
  universalName: string;
  url: string;
  dateRange: {
    start: string;
    end: string;
  }
}

export interface LinkedInIndustry {
  $type: typeof INDUSTRY_TYPE;
  name: string;
}

