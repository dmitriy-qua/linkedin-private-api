import { GetJobSearchResponse } from '../responses/jobs-search.reponse.get';
import { JobSearchFilters } from '../types/job-search-filters';
import { LinkedInRequest } from '../core/linkedin-request';
import { GetBlendedSearchResponse } from '../responses/blended-search.reponse.get';
import { BlendedSearchFilters } from '../types/blended-search-filters';
export declare class SearchRequest {
    private request;
    constructor({ request }: {
        request: LinkedInRequest;
    });
    searchBlended({ skip, limit, filters, keywords, }: {
        skip?: number;
        limit?: number;
        filters?: BlendedSearchFilters;
        keywords?: string;
    }): Promise<GetBlendedSearchResponse>;
    searchJobs({ skip, limit, filters, keywords, }: {
        skip?: number;
        limit?: number;
        filters?: JobSearchFilters;
        keywords?: string;
    }): Promise<GetJobSearchResponse>;
}
