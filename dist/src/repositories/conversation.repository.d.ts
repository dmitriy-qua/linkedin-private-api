import { Client } from '../core/client';
import { Conversation, ConversationId } from '../entities/conversation.entity';
import { ProfileId } from '../entities/mini-profile.entity';
import { ConversationScroller } from '../scrollers/conversation.scroller';
export declare class ConversationRepository {
    private client;
    constructor({ client }: {
        client: Client;
    });
    getConversation({ conversationId }: {
        conversationId: ConversationId;
    }): Promise<Conversation>;
    getConversations({ recipients, createdBefore, }?: {
        recipients?: ProfileId | ProfileId[];
        createdBefore?: Date;
    }): ConversationScroller;
    private fetchConversations;
}
