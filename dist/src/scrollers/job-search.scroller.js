"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobSearchScroller = void 0;
const skip_limit_scroller_1 = require("./skip-limit-scroller");
class JobSearchScroller extends skip_limit_scroller_1.SkipLimitScroller {
    constructor({ fetchJobs, skip = 0, limit = 10, filters, keywords, }) {
        super({ skip, limit });
        this.fetchJobs = fetchJobs;
        this.filters = filters;
        this.keywords = keywords;
    }
    async fetch() {
        return this.fetchJobs({ skip: this.skip, limit: this.limit, filters: this.filters, keywords: this.keywords });
    }
}
exports.JobSearchScroller = JobSearchScroller;
//# sourceMappingURL=job-search.scroller.js.map