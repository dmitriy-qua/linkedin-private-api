"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageScroller = void 0;
const lodash_1 = require("lodash");
const created_before_scroller_1 = require("./created-before-scroller");
class MessageScroller extends created_before_scroller_1.CreatedBeforeScroller {
    constructor({ fetchMessages, conversationId, createdBefore, }) {
        super({ createdBefore });
        this.fieldName = 'createdAt';
        this.fetchMessages = fetchMessages;
        this.conversationId = conversationId;
    }
    async fetch() {
        return this.fetchMessages({
            conversationId: this.conversationId,
            ...(lodash_1.isUndefined(this.createdBefore) ? {} : { createdBefore: new Date(this.createdBefore) }),
        });
    }
}
exports.MessageScroller = MessageScroller;
//# sourceMappingURL=message.scroller.js.map