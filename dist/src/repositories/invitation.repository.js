"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvitationRepository = void 0;
const lodash_1 = require("lodash");
const linkedin_invitation_entity_1 = require("../entities/linkedin-invitation.entity");
const scrollers_1 = require("../scrollers");
const profile_repository_1 = require("./profile.repository");
const TO_MEMBER_FIELD = '*toMember';
const FROM_MEMBER_FIELD = '*fromMember';
const parseInvitationResponse = (idField) => (response) => {
    const results = response.included || [];
    const profiles = lodash_1.keyBy(profile_repository_1.getProfilesFromResponse(response), 'entityUrn');
    const invitations = results.filter(r => r.$type === linkedin_invitation_entity_1.INVITATION_TYPE && !!r[idField]);
    return lodash_1.orderBy(invitations.map(invitation => ({
        ...invitation,
        profile: profiles[invitation[idField]],
    })), 'sentTime', 'desc');
};
const parseSentInvitations = parseInvitationResponse(TO_MEMBER_FIELD);
const parseReceivedInvitations = parseInvitationResponse(FROM_MEMBER_FIELD);
class InvitationRepository {
    constructor({ client }) {
        this.client = client;
    }
    getSentInvitations({ skip = 0, limit = 100 } = {}) {
        return new scrollers_1.InvitationScroller({
            skip,
            limit,
            fetchInvitations: this.fetchSent.bind(this),
        });
    }
    getReceivedInvitations({ skip = 0, limit = 100 } = {}) {
        return new scrollers_1.InvitationScroller({
            skip,
            limit,
            fetchInvitations: this.fetchReceived.bind(this),
        });
    }
    async sendInvitation({ profileId, trackingId, message, }) {
        await this.client.request.invitation.sendInvitation({ profileId, trackingId, message });
        const lastInvitation = (await this.fetchSent({ skip: 0, limit: 1 }))[0];
        return lastInvitation;
    }
    async fetchReceived({ skip = 0, limit = 100 } = {}) {
        const response = await this.client.request.invitation.getReceivedInvitations({ skip, limit });
        return parseReceivedInvitations(response);
    }
    async fetchSent({ skip = 0, limit = 100 } = {}) {
        const response = await this.client.request.invitation.getSentInvitations({ skip, limit });
        return parseSentInvitations(response);
    }
}
exports.InvitationRepository = InvitationRepository;
//# sourceMappingURL=invitation.repository.js.map