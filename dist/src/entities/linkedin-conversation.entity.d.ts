import { MiniProfileUrn } from './linkedin-mini-profile.entity';
export declare enum FeaturedType {
    REACTIONS = 0,
    CREATE_NEW_GROUP_CHAT = 1
}
interface LinkedInSeenReceipt {
    $type: 'com.linkedin.voyager.messaging.SeenReceipt';
    eventUrn: string;
    seenAt: number;
}
export interface LinkedInParticipantReceipts {
    $type: 'com.linkedin.voyager.messaging.ParticipantReceipts';
    fromEntity: MiniProfileUrn;
    fromParticipant: string;
    seenReceipt: LinkedInSeenReceipt;
}
export declare const CONVERSATION_TYPE = "com.linkedin.voyager.messaging.Conversation";
export declare type ConversationUrn = string;
export interface LinkedinConversation {
    $type: typeof CONVERSATION_TYPE;
    '*events': string[];
    '*participants': string[];
    '*type': string[];
    archived: boolean;
    backendUrn: string;
    blocked: boolean;
    entityUrn: ConversationUrn;
    featureTypes: FeaturedType[];
    firstMessageUrn: string;
    lastActivityAt: number;
    muted: boolean;
    notificationStatus: string;
    read: boolean;
    receipts: LinkedInParticipantReceipts[];
    totalEventCount: number;
    unreadCount: number;
    viewerCurrentParticipant: boolean;
    withNonConnection: boolean;
}
export {};
