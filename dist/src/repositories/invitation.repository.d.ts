import { Client } from '../core/client';
import { Invitation } from '../entities/invitation.entity';
import { InvitationScroller } from '../scrollers';
export declare class InvitationRepository {
    private client;
    constructor({ client }: {
        client: Client;
    });
    getSentInvitations({ skip, limit }?: {
        skip?: number | undefined;
        limit?: number | undefined;
    }): InvitationScroller;
    getReceivedInvitations({ skip, limit }?: {
        skip?: number | undefined;
        limit?: number | undefined;
    }): InvitationScroller;
    sendInvitation({ profileId, trackingId, message, }: {
        profileId: string;
        trackingId: string;
        message?: string;
    }): Promise<Invitation>;
    private fetchReceived;
    private fetchSent;
}
