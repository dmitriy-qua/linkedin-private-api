import { ProfileId } from '../entities';
import { Conversation } from '../entities/conversation.entity';
import { CreatedBeforeScroller } from './created-before-scroller';
declare type FetchConversations = ({ createdBefore, }: {
    recipients?: ProfileId | ProfileId[];
    createdBefore?: Date;
}) => Promise<Conversation[]>;
export declare class ConversationScroller extends CreatedBeforeScroller<Conversation> {
    private fetchConversations;
    fieldName: 'lastActivityAt';
    recipients?: ProfileId | ProfileId[];
    constructor({ fetchConversations, recipients, createdBefore, }: {
        fetchConversations: FetchConversations;
        recipients?: ProfileId | ProfileId[];
        createdBefore?: Date;
    });
    fetch(): Promise<Conversation[]>;
}
export {};
