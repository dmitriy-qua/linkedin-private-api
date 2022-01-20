"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageRequest = void 0;
class MessageRequest {
    constructor({ request }) {
        this.request = request;
    }
    sendMessage({ profileId, text }) {
        const queryParams = {
            action: 'create',
        };
        const payload = {
            keyVersion: 'LEGACY_INBOX',
            conversationCreate: {
                eventCreate: {
                    value: {
                        'com.linkedin.voyager.messaging.create.MessageCreate': {
                            attributedBody: {
                                text,
                                attributes: [],
                            },
                            attachments: [],
                        },
                    },
                },
                subtype: 'MEMBER_TO_MEMBER',
                recipients: [profileId],
            },
        };
        return this.request.post('messaging/conversations', payload, {
            params: queryParams,
        });
    }
    getMessages({ conversationId, createdBefore, }) {
        const queryParams = {
            keyVersion: 'LEGACY_INBOX',
            ...(createdBefore && { createdBefore: createdBefore.getTime() }),
        };
        return this.request.get(`messaging/conversations/${conversationId}/events`, {
            params: queryParams,
        });
    }
}
exports.MessageRequest = MessageRequest;
//# sourceMappingURL=message.request.js.map