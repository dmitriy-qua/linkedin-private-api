import { ConversationId } from '../entities/conversation.entity';
import { MessageEvent } from '../entities/message-event.entity';
import { CreatedBeforeScroller } from './created-before-scroller';
declare type FetchMessages = ({ conversationId, createdBefore, }: {
    conversationId: ConversationId;
    createdBefore?: Date;
}) => Promise<MessageEvent[]>;
export declare class MessageScroller extends CreatedBeforeScroller<MessageEvent> {
    private fetchMessages;
    private conversationId;
    fieldName: 'createdAt';
    constructor({ fetchMessages, conversationId, createdBefore, }: {
        fetchMessages: FetchMessages;
        conversationId: ConversationId;
        createdBefore?: Date;
    });
    fetch(): Promise<MessageEvent[]>;
}
export {};
