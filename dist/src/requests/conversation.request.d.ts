import { LinkedInRequest } from '../core/linkedin-request';
import { ConversationId } from '../entities/conversation.entity';
import { ProfileId } from '../entities/mini-profile.entity';
import { GetConversationResponse } from '../responses/conversation.response.get';
import { GetConversationsResponse } from '../responses/conversations.response.get';
export declare class ConversationRequest {
    private request;
    constructor({ request }: {
        request: LinkedInRequest;
    });
    getConversation({ conversationId }: {
        conversationId: ConversationId;
    }): Promise<GetConversationResponse>;
    getConversations({ recipients, createdBefore, }: {
        recipients?: ProfileId | ProfileId[];
        createdBefore?: Date;
    }): Promise<GetConversationsResponse>;
}
