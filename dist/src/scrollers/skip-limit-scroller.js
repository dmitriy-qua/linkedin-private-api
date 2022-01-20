"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkipLimitScroller = void 0;
const lodash_1 = require("lodash");
class SkipLimitScroller {
    constructor({ skip, limit }) {
        this.scrollNextCounter = 0;
        this.hitEndOfResults = false;
        this.skip = skip;
        this.limit = limit;
    }
    async scrollNext() {
        if (this.hitEndOfResults) {
            return [];
        }
        const results = await this.fetch();
        if (lodash_1.isEmpty(results)) {
            this.hitEndOfResults = true;
        }
        this.skip += this.limit;
        this.scrollNextCounter += 1;
        return results;
    }
    async scrollBack() {
        this.hitEndOfResults = false;
        if (this.scrollNextCounter === 1) {
            this.skip = 0;
            this.scrollNextCounter = 0;
            return [];
        }
        this.skip = Math.max(this.skip - this.limit * 2, 0);
        if (this.skip === 0) {
            this.scrollNextCounter = 0;
        }
        return this.fetch();
    }
    restart() {
        this.skip = 0;
        this.limit = 10;
    }
}
exports.SkipLimitScroller = SkipLimitScroller;
//# sourceMappingURL=skip-limit-scroller.js.map