"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileRequest = void 0;
class ProfileRequest {
    constructor({ request }) {
        this.request = request;
    }
    getProfile({ publicIdentifier }) {
        const queryParams = {
            q: 'memberIdentity',
            memberIdentity: publicIdentifier,
            decorationId: 'com.linkedin.voyager.dash.deco.identity.profile.FullProfileWithEntities-35',
        };
        return this.request.get('identity/dash/profiles', {
            params: queryParams,
        });
    }
    getOwnProfile() {
        return this.request.get('me');
    }
}
exports.ProfileRequest = ProfileRequest;
//# sourceMappingURL=profile.request.js.map