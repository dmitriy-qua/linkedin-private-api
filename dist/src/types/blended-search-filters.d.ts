import { PeopleSearchFilters } from './people-search-filters';
import { LinkedInSearchType } from './search-type.enum';
export declare type BlendedSearchFilters = PeopleSearchFilters | {
    resultType?: LinkedInSearchType;
};
