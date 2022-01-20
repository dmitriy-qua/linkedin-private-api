"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeopleSearchScroller = void 0;
const skip_limit_scroller_1 = require("./skip-limit-scroller");
class PeopleSearchScroller extends skip_limit_scroller_1.SkipLimitScroller {
    constructor({ fetchPeople, skip = 0, limit = 10, filters, keywords, }) {
        super({ skip, limit });
        this.fetchPeople = fetchPeople;
        this.filters = filters;
        this.keywords = keywords;
    }
    async fetch() {
        return this.fetchPeople({ skip: this.skip, limit: this.limit, filters: this.filters, keywords: this.keywords });
    }
}
exports.PeopleSearchScroller = PeopleSearchScroller;
//# sourceMappingURL=people-search.scroller.js.map