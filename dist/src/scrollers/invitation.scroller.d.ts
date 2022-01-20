import { Invitation } from '../entities/invitation.entity';
import { SkipLimitScroller } from './skip-limit-scroller';
declare type FetchInvitations = ({ skip, limit }: {
    skip?: number;
    limit?: number;
}) => Promise<Invitation[]>;
export declare class InvitationScroller extends SkipLimitScroller<Invitation> {
    private fetchInvitations;
    constructor({ fetchInvitations, skip, limit }: {
        fetchInvitations: FetchInvitations;
        skip: number;
        limit: number;
    });
    fetch(): Promise<Invitation[]>;
}
export {};
