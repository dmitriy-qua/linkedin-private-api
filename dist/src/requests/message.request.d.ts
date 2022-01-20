import { ProfileId } from 'src/entities';
import { LinkedInRequest } from '../core/linkedin-request';
import { ConversationId } from '../entities/conversation.entity';
import { SendMessageResponse } from '../responses/message.response.post';
import { GetMessagesResponse } from '../responses/messages.response.get';
export declare class MessageRequest {
    private request;
    constructor({ request }: {
        request: LinkedInRequest;
    });
    sendMessage({ profileId, text }: {
        profileId: ProfileId;
        text: string;
    }): Promise<SendMessageResponse>;
    getMessages({ conversationId, createdBefore, }: {
        conversationId: ConversationId;
        createdBefore?: Date;
    }): Promise<GetMessagesResponse>;
}
