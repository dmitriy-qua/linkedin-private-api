import { JobSearchHit } from 'src/entities/job-search-hit.entity';
import { JobSearchFilters } from '../types/job-search-filters';
import { SkipLimitScroller } from './skip-limit-scroller';
declare type FetchJobs = ({ skip, limit, filters, keywords, }: {
    skip?: number;
    limit?: number;
    filters?: JobSearchFilters;
    keywords?: string;
}) => Promise<JobSearchHit[]>;
export declare class JobSearchScroller extends SkipLimitScroller<JobSearchHit> {
    private filters?;
    private keywords?;
    private fetchJobs;
    constructor({ fetchJobs, skip, limit, filters, keywords, }: {
        fetchJobs: FetchJobs;
        skip?: number;
        limit?: number;
        filters?: JobSearchFilters;
        keywords?: string;
    });
    fetch(): Promise<JobSearchHit[]>;
}
export {};
