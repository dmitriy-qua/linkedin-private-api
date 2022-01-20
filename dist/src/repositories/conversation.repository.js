"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationRepository = void 0;
const lodash_1 = require("lodash");
const linkedin_conversation_entity_1 = require("../entities/linkedin-conversation.entity");
const conversation_scroller_1 = require("../scrollers/conversation.scroller");
const profile_repository_1 = require("./profile.repository");
const participantToProfileId = (participant) => participant.replace(/urn:li:fs_messagingMember:\(|\)/g, '').split(',')[1];
const transformConversationId = (conversationUrn) => conversationUrn.replace('urn:li:fs_conversation:', '');
const transformConversations = ({ conversations, profiles, }) => conversations.map(conversation => {
    const participants = lodash_1.map(conversation['*participants'], participant => {
        const profileId = participantToProfileId(participant);
        return profiles[profileId];
    });
    return {
        ...conversation,
        participants,
        conversationId: transformConversationId(conversation.entityUrn),
    };
});
class ConversationRepository {
    constructor({ client }) {
        this.client = client;
    }
    async getConversation({ conversationId }) {
        const response = await this.client.request.conversation.getConversation({ conversationId });
        const conversation = response.data;
        const profiles = profile_repository_1.getProfilesFromResponse(response);
        return transformConversations({
            profiles,
            conversations: [conversation],
        })[0];
    }
    getConversations({ recipients, createdBefore, } = {}) {
        return new conversation_scroller_1.ConversationScroller({ fetchConversations: this.fetchConversations.bind(this), recipients, createdBefore });
    }
    async fetchConversations({ recipients, createdBefore, }) {
        const res = await this.client.request.conversation.getConversations({ recipients, createdBefore });
        const conversations = res.included.filter(p => p.$type === linkedin_conversation_entity_1.CONVERSATION_TYPE);
        const profiles = profile_repository_1.getProfilesFromResponse(res);
        return lodash_1.orderBy(transformConversations({ conversations, profiles }), 'lastActivityAt', 'desc');
    }
}
exports.ConversationRepository = ConversationRepository;
//# sourceMappingURL=conversation.repository.js.map