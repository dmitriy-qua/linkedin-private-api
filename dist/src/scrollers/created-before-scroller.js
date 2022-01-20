"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatedBeforeScroller = void 0;
const lodash_1 = require("lodash");
class CreatedBeforeScroller {
    constructor({ createdBefore }) {
        this.pageIndexes = [];
        this.createdBefore = createdBefore === null || createdBefore === void 0 ? void 0 : createdBefore.getTime();
    }
    async scrollNext() {
        const results = await this.fetch();
        if (this.prevCreatedBefore) {
            this.pageIndexes.push(this.prevCreatedBefore);
        }
        if (!lodash_1.isEmpty(results)) {
            this.prevCreatedBefore = this.createdBefore || results[0][this.fieldName] + 1000;
            this.createdBefore = results[results.length - 1][this.fieldName];
        }
        return results;
    }
    async scrollBack() {
        if (lodash_1.isEmpty(this.pageIndexes)) {
            return [];
        }
        this.createdBefore = this.pageIndexes.pop();
        return this.fetch();
    }
    restart() {
        this.createdBefore = undefined;
        this.pageIndexes = [];
    }
}
exports.CreatedBeforeScroller = CreatedBeforeScroller;
//# sourceMappingURL=created-before-scroller.js.map