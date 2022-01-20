"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageRepository = void 0;
const lodash_1 = require("lodash");
const linkedin_event_entity_1 = require("../entities/linkedin-event.entity");
const scrollers_1 = require("../scrollers");
const profile_repository_1 = require("./profile.repository");
const participantToProfileId = (participant) => participant.replace(/urn:li:fs_messagingMember:\(|\)/g, '').split(',')[1];
class MessageRepository {
    constructor({ client }) {
        this.client = client;
    }
    getMessages({ conversationId, createdBefore }) {
        return new scrollers_1.MessageScroller({ conversationId, createdBefore, fetchMessages: this.fetchMessages.bind(this) });
    }
    async sendMessage({ profileId, text }) {
        var _a;
        const response = await this.client.request.message.sendMessage({ profileId, text });
        return { ...(_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.value, text };
    }
    async fetchMessages({ conversationId, createdBefore, }) {
        const response = await this.client.request.message.getMessages({ conversationId, createdBefore });
        const messages = response.included.filter(p => p.$type === linkedin_event_entity_1.EVENT_TYPE);
        const profiles = profile_repository_1.getProfilesFromResponse(response);
        return lodash_1.orderBy(messages, 'createdAt', 'desc').map(message => {
            var _a, _b;
            return ({
                ...message,
                text: (_b = (_a = message === null || message === void 0 ? void 0 : message.eventContent) === null || _a === void 0 ? void 0 : _a.attributedBody) === null || _b === void 0 ? void 0 : _b.text,
                sentFrom: profiles[participantToProfileId(message['*from'])],
            });
        });
    }
}
exports.MessageRepository = MessageRepository;
//# sourceMappingURL=message.repository.js.map