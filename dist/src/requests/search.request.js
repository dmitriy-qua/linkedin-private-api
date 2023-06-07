"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchRequest = void 0;
class SearchRequest {
    constructor({ request }) {
        this.request = request;
    }
    searchBlended({ skip = 0, limit = 10, filters = {}, keywords, }) {
        const queryParams = {
            filters,
            count: limit,
            ...(keywords ? { keywords: encodeURIComponent(keywords) } : {}),
            origin: 'GLOBAL_SEARCH_HEADER',
            q: 'all',
            queryContext: {
                spellCorrectionEnabled: true,
                relatedSearchesEnabled: true,
            },
            start: skip,
        };
        return this.request.get('graphql', {
            params: queryParams,
        });
    }
    searchOwnConnections({ skip = 0, limit = 10, keywords, }) {
        const queryParams = {
            start: skip,
            count: limit,
            q: 'search',
            ...(keywords ? { keyword: encodeURIComponent(keywords) } : {}),
            decorationId: 'com.linkedin.voyager.dash.deco.web.mynetwork.ConnectionList-16',
        };
        return this.request.get('relationships/dash/connections', {
            params: queryParams,
        });
    }
    searchJobs({ skip = 0, limit = 10, filters = {}, keywords, }) {
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
        return this.request.get('search/hits', {
            params: queryParams,
        });
    }
}
exports.SearchRequest = SearchRequest;
//# sourceMappingURL=search.request.js.map