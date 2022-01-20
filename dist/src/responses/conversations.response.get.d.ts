import { LinkedInCollectionResponse } from '../entities/linkedin-collection-response.entity';
import { ConversationUrn, LinkedinConversation } from '../entities/linkedin-conversation.entity';
import { LinkedInMiniProfile } from '../entities/linkedin-mini-profile.entity';
interface ConversationMetadata {
    $type: 'com.linkedin.voyager.messaging.ConversationsMetadata';
    unreadCount: number;
}
export declare type GetConversationsResponse = LinkedInCollectionResponse<ConversationUrn, LinkedInMiniProfile | LinkedinConversation, ConversationMetadata>;
export {};
