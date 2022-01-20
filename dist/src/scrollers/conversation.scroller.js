"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationScroller = void 0;
const lodash_1 = require("lodash");
const created_before_scroller_1 = require("./created-before-scroller");
class ConversationScroller extends created_before_scroller_1.CreatedBeforeScroller {
    constructor({ fetchConversations, recipients, createdBefore, }) {
        super({ createdBefore });
        this.fieldName = 'lastActivityAt';
        this.recipients = recipients;
        this.fetchConversations = fetchConversations;
    }
    async fetch() {
        return this.fetchConversations({
            ...(lodash_1.isUndefined(this.createdBefore) ? {} : { createdBefore: new Date(this.createdBefore) }),
            ...(this.recipients && { recipients: this.recipients }),
        });
    }
}
exports.ConversationScroller = ConversationScroller;
//# sourceMappingURL=conversation.scroller.js.map