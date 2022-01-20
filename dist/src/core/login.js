"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
const cookie_1 = require("cookie");
const fs = __importStar(require("fs/promises"));
const lodash_1 = require("lodash");
const config_1 = require("../../config");
const SESSIONS_PATH = `${process.cwd()}/sessions.json`;
const parseCookies = (cookies) => cookies.reduce((res, c) => {
    let parsedCookie = cookie_1.parse(c);
    parsedCookie = lodash_1.pickBy(parsedCookie, (v, k) => k === Object.keys(parsedCookie)[0]);
    return lodash_1.merge(res, parsedCookie);
}, {});
class Login {
    constructor({ client }) {
        this.client = client;
    }
    setRequestHeaders({ cookies }) {
        const cookieStr = lodash_1.reduce(cookies, (res, v, k) => `${res}${k}="${v}"; `, '');
        this.client.request.setHeaders({
            ...config_1.requestHeaders,
            cookie: cookieStr,
            'csrf-token': cookies.JSESSIONID,
        });
    }
    async readCacheFile() {
        let cachedSessions;
        try {
            const sessionsBuffer = (await fs.readFile(SESSIONS_PATH).catch(() => fs.writeFile(SESSIONS_PATH, '{}'))) || '{}';
            cachedSessions = JSON.parse(sessionsBuffer.toString());
        }
        catch (err) {
            cachedSessions = {};
        }
        return cachedSessions;
    }
    tryCacheLogin({ useCache = true, cachedSessions, username, }) {
        if (!useCache) {
            return false;
        }
        if (!username) {
            throw new TypeError('Must provide username when useCache option is true');
        }
        const cookies = cachedSessions[username];
        if (cookies) {
            this.setRequestHeaders({ cookies });
            return true;
        }
        return false;
    }
    async userPass({ username, password, useCache = true, }) {
        const cachedSessions = await this.readCacheFile();
        if (this.tryCacheLogin({ useCache, cachedSessions, username })) {
            return this.client;
        }
        if (!password) {
            throw new TypeError('password is required for login');
        }
        const anonymousAuthResponse = await this.client.request.auth.getAnonymousAuth();
        const sessionId = parseCookies(anonymousAuthResponse.headers['set-cookie']).JSESSIONID;
        const authRes = await this.client.request.auth.authenticateUser({ username, password, sessionId });
        const parsedCookies = parseCookies(authRes.headers['set-cookie']);
        fs.writeFile(SESSIONS_PATH, JSON.stringify({ ...cachedSessions, [username]: parsedCookies }));
        this.setRequestHeaders({ cookies: parsedCookies });
        return this.client;
    }
    async userCookie({ username, cookies, useCache = true, }) {
        const cachedSessions = await this.readCacheFile();
        if (this.tryCacheLogin({ useCache, cachedSessions, username })) {
            return this.client;
        }
        this.setRequestHeaders({ cookies });
        if (username) {
            fs.writeFile(SESSIONS_PATH, JSON.stringify({ ...cachedSessions, [username]: cookies }));
        }
        return this.client;
    }
}
exports.Login = Login;
//# sourceMappingURL=login.js.map