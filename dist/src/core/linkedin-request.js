"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedInRequest = void 0;
const auth_request_1 = require("../requests/auth.request");
const conversation_request_1 = require("../requests/conversation.request");
const invitation_request_1 = require("../requests/invitation.request");
const message_request_1 = require("../requests/message.request");
const profile_request_1 = require("../requests/profile.request");
const search_request_1 = require("../requests/search.request");
const request_1 = require("./request");
class LinkedInRequest extends request_1.Request {
    constructor() {
        super(...arguments);
        this.conversation = new conversation_request_1.ConversationRequest({ request: this });
        this.invitation = new invitation_request_1.InvitationRequest({ request: this });
        this.message = new message_request_1.MessageRequest({ request: this });
        this.profile = new profile_request_1.ProfileRequest({ request: this });
        this.search = new search_request_1.SearchRequest({ request: this });
        this.auth = new auth_request_1.AuthRequest({ request: this });
    }
}
exports.LinkedInRequest = LinkedInRequest;
//# sourceMappingURL=linkedin-request.js.map