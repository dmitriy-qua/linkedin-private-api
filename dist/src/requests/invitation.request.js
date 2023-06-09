"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvitationRequest = void 0;
class InvitationRequest {
    constructor({ request }) {
        this.request = request;
    }
    sendInvitation({ profileId, message }) {
        const queryParams = {
            action: 'verifyQuotaAndCreate',
            decorationId: 'com.linkedin.voyager.dash.deco.relationships.InvitationCreationResultWithInvitee-2',
        };
        const requestPayload = {
            ...(message && {
                customMessage: message,
            }),
            inviteeProfileUrn: `urn:li:fsd_profile:${profileId}`,
        };
        return this.request.post('voyagerRelationshipsDashMemberRelationships', requestPayload, {
            params: queryParams,
        });
    }
    getReceivedInvitations({ skip = 0, limit = 100 } = {}) {
        const queryParams = {
            start: skip,
            count: limit,
            q: 'receivedInvitation',
        };
        return this.request.get('relationships/invitationViews', {
            params: queryParams,
        });
    }
    getSentInvitations({ skip = 0, limit = 100 } = {}) {
        const queryParams = {
            start: skip,
            count: limit,
            invitationType: 'CONNECTION',
            q: 'invitationType',
        };
        return this.request.get('relationships/sentInvitationViewsV2', {
            params: queryParams,
        });
    }
}
exports.InvitationRequest = InvitationRequest;
//# sourceMappingURL=invitation.request.js.map