import { PeopleSearchHit } from '../entities/people-search-hit.entity';
import { PeopleSearchFilters } from '../types/people-search-filters';
import { SkipLimitScroller } from './skip-limit-scroller';
declare type FetchPeople = ({ skip, limit, filters, keywords, }: {
    skip?: number;
    limit?: number;
    filters?: PeopleSearchFilters;
    keywords?: string;
}) => Promise<PeopleSearchHit[]>;
export declare class PeopleSearchScroller extends SkipLimitScroller<PeopleSearchHit> {
    private filters?;
    private keywords?;
    private fetchPeople;
    constructor({ fetchPeople, skip, limit, filters, keywords, }: {
        fetchPeople: FetchPeople;
        skip?: number;
        limit?: number;
        filters?: PeopleSearchFilters;
        keywords?: string;
    });
    fetch(): Promise<PeopleSearchHit[]>;
}
export {};
