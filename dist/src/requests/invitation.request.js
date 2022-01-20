"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvitationRequest = void 0;
class InvitationRequest {
    constructor({ request }) {
        this.request = request;
    }
    sendInvitation({ profileId, trackingId, message }) {
        const requestPayload = {
            trackingId,
            emberEntityName: 'growth/invitation/norm-invitation',
            invitee: {
                'com.linkedin.voyager.growth.invitation.InviteeProfile': {
                    profileId,
                },
            },
            ...(message && { message }),
        };
        return this.request.post('growth/normInvitations', requestPayload);
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