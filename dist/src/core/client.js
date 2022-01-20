"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const repositories_1 = require("../repositories");
const linkedin_request_1 = require("./linkedin-request");
const login_1 = require("./login");
class Client {
    constructor({ proxy } = {}) {
        this.login = new login_1.Login({ client: this });
        this.search = new repositories_1.SearchRepository({ client: this });
        this.invitation = new repositories_1.InvitationRepository({ client: this });
        this.profile = new repositories_1.ProfileRepository({ client: this });
        this.conversation = new repositories_1.ConversationRepository({ client: this });
        this.message = new repositories_1.MessageRepository({ client: this });
        this.request = new linkedin_request_1.LinkedInRequest({ proxy });
    }
}
exports.Client = Client;
//# sourceMappingURL=client.js.map