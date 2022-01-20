"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRequest = void 0;
const querystring_1 = require("querystring");
const config_1 = require("../../config");
class AuthRequest {
    constructor({ request }) {
        this.request = request;
    }
    getAnonymousAuth() {
        return this.request.get(config_1.authUrl, { fullResponse: true });
    }
    authenticateUser({ username, password, sessionId, }) {
        const payload = {
            session_key: username,
            session_password: password,
            JSESSIONID: sessionId,
        };
        return this.request.post(config_1.authUrl, querystring_1.stringify(payload), {
            headers: config_1.authHeaders,
            fullResponse: true,
        });
    }
}
exports.AuthRequest = AuthRequest;
//# sourceMappingURL=auth.request.js.map