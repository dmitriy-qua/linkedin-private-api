"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestHeaders = exports.authHeaders = exports.authUrl = exports.linkedinApiUrl = void 0;
exports.linkedinApiUrl = 'https://www.linkedin.com/voyager/api/';
exports.authUrl = 'https://www.linkedin.com/uas/authenticate';
exports.authHeaders = {
    'user-agent': 'LinkedIn/8.8.1 CFNetwork/711.3.18 Darwin/14.0.0',
    'accept-encoding': 'gzip, deflate',
    Accept: '*/*',
    Connection: 'keep-alive',
    'X-Li-User-Agent': 'LIAuthLibrary:3.2.4 com.linkedin.LinkedIn:8.8.1 iPhone:8.3',
    'X-User-Language': 'en',
    'X-User-Locale': 'en_US',
    'Accept-Language': 'en-us',
    'Content-Length': '110',
    'Content-Type': 'application/x-www-form-urlencoded',
};
exports.requestHeaders = {
    authority: 'www.linkedin.com',
    'x-restli-protocol-version': '2.0.0',
    'x-li-lang': 'en_US',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'cors',
    'accept-language': 'en-US,en;q=0.9',
};
//# sourceMappingURL=index.js.map