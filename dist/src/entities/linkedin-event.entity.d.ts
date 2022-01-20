export declare type LinkedInEventUrn = string;
export declare const EVENT_TYPE = "com.linkedin.voyager.messaging.Event";
export interface LinkedInEvent {
    $type: typeof EVENT_TYPE;
    '*from': string;
    backendUrn: string;
    createdAt: number;
    dashEntityUrn: string;
    entityUrn: LinkedInEventUrn;
    eventContent: unknown;
    originToken: string;
    subtype: string;
    previousEventInConversation?: string;
}
