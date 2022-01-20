"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationRequest = void 0;
const lodash_1 = require("lodash");
class ConversationRequest {
    constructor({ request }) {
        this.request = request;
    }
    getConversation({ conversationId }) {
        const queryParams = {
            keyVersion: 'LEGACY_INBOX',
        };
        return this.request.get(`messaging/conversations/${conversationId}`, {
            params: queryParams,
        });
    }
    getConversations({ recipients, createdBefore, }) {
        const queryParams = {
            keyVersion: 'LEGACY_INBOX',
            ...(recipients && { q: 'participants', recipients: lodash_1.castArray(recipients) }),
            ...(createdBefore && { createdBefore: createdBefore.getTime() }),
        };
        return this.request.get('messaging/conversations', {
            params: queryParams,
        });
    }
}
exports.ConversationRequest = ConversationRequest;
//# sourceMappingURL=conversation.request.js.map