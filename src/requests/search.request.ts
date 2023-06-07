import { GetJobSearchResponse } from '../responses/jobs-search.reponse.get';
import { JobSearchFilters } from '../types/job-search-filters';
import { LinkedInRequest } from '../core/linkedin-request';
import { GetBlendedSearchResponse } from '../responses/blended-search.reponse.get';
import { BlendedSearchFilters } from '../types/blended-search-filters';
import { graphqlParamsSerializer } from "../utils";

export class SearchRequest {
  private request: LinkedInRequest;

  constructor({ request }: { request: LinkedInRequest }) {
    this.request = request;
    // this.request.request.defaults.paramsSerializer = graphqlParamsSerializer;
  }

  searchBlended({
    skip = 0,
    limit = 10,
    filters = {},
    keywords,
  }: {
    skip?: number;
    limit?: number;
    filters?: BlendedSearchFilters;
    keywords?: string;
  }): Promise<GetBlendedSearchResponse> {
    const queryParams = {
      filters,
      count: limit,
      ...(keywords ? { keywords: encodeURIComponent(keywords) } : {}),
      origin: 'GLOBAL_SEARCH_HEADER', //'TYPEAHEAD_ESCAPE_HATCH',
      q: 'all',
      queryContext: {
        spellCorrectionEnabled: true,
        relatedSearchesEnabled: true,
      },
      start: skip,
    };

    // const queryParams = {
    //   variables: {
    //     start: skip,
    //     count: limit,
    //     origin: 'SWITCH_SEARCH_VERTICAL',
    //     query: {
    //       flagshipSearchIntent: "SEARCH_SRP",
    //       ...(keywords ? { keywords: encodeURIComponent(keywords) } : {}),
    //       queryParameters: "List((key:resultType,value:List(ALL)))",
    //       includeFiltersInResponse: false,
    //     }
    //   },
    //   queryId: "voyagerSearchDashClusters.8456d8ebf04d20b152309b0c7cfabee2"
    // }

    return this.request.get<GetBlendedSearchResponse>('graphql', {
      params: queryParams,
    });
  }

  searchOwnConnections({
                          skip = 0,
                          limit = 10,
                          keywords,
  }: {
    skip?: number;
    limit?: number;
    keywords?: string
  }): Promise<GetBlendedSearchResponse> {
    const queryParams = {
      start: skip,
      count: limit,
      q: 'search',
      ...(keywords ? { keyword: encodeURIComponent(keywords) } : {}),
      decorationId: 'com.linkedin.voyager.dash.deco.web.mynetwork.ConnectionList-16',
    };

    return this.request.get<GetBlendedSearchResponse>('relationships/dash/connections', {
      params: queryParams,
    });
  }

  searchJobs({
    skip = 0,
    limit = 10,
    filters = {},
    keywords,
  }: {
    skip?: number;
    limit?: number;
    filters?: JobSearchFilters;
    keywords?: string;
  }): Promise<GetJobSearchResponse> {
    const queryParams = {
      filters,
      count: limit,
      ...(keywords ? { keywords: encodeURIComponent(keywords) } : {}),
      origin: 'JOB_SEARCH_RESULTS_PAGE',
      decorationId: 'com.linkedin.voyager.deco.jserp.WebJobSearchHitLite-14',
      q: 'jserpFilters',
      queryContext: {
        primaryHitType: 'JOBS',
        spellCorrectionEnabled: true,
      },
      start: skip,
    };

    return this.request.get<GetJobSearchResponse>('search/hits', {
      params: queryParams,
    });
  }
}
