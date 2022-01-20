import { CompanySearchHit } from '../entities/company-search-hit.entity';
import { SkipLimitScroller } from './skip-limit-scroller';
declare type FetchCompanies = ({ skip, limit, keywords, }: {
    skip?: number;
    limit?: number;
    keywords?: string;
}) => Promise<CompanySearchHit[]>;
export declare class CompanySearchScroller extends SkipLimitScroller<CompanySearchHit> {
    private keywords?;
    private fetchCompanies;
    constructor({ fetchCompanies, skip, limit, keywords, }: {
        fetchCompanies: FetchCompanies;
        skip?: number;
        limit?: number;
        keywords?: string;
    });
    fetch(): Promise<CompanySearchHit[]>;
}
export {};
