"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanySearchScroller = void 0;
const skip_limit_scroller_1 = require("./skip-limit-scroller");
class CompanySearchScroller extends skip_limit_scroller_1.SkipLimitScroller {
    constructor({ fetchCompanies, skip = 0, limit = 10, keywords, }) {
        super({ skip, limit });
        this.fetchCompanies = fetchCompanies;
        this.keywords = keywords;
    }
    async fetch() {
        return this.fetchCompanies({ skip: this.skip, limit: this.limit, keywords: this.keywords });
    }
}
exports.CompanySearchScroller = CompanySearchScroller;
//# sourceMappingURL=company-search.scroller.js.map