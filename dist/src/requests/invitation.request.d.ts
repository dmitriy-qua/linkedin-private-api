import { LinkedInRequest } from '../core/linkedin-request';
import { GetReceivedInvitationResponse } from '../responses/received-invitations.response.get';
import { GetSentInvitationResponse } from '../responses/sent-invitations.response.get';
export declare class InvitationRequest {
    private request;
    constructor({ request }: {
        request: LinkedInRequest;
    });
    sendInvitation({ profileId, message }: {
        profileId: string;
        message?: string;
    }): Promise<void>;
    getReceivedInvitations({ skip, limit }?: {
        skip?: number | undefined;
        limit?: number | undefined;
    }): Promise<GetReceivedInvitationResponse>;
    getSentInvitations({ skip, limit }?: {
        skip?: number | undefined;
        limit?: number | undefined;
    }): Promise<GetSentInvitationResponse>;
}
