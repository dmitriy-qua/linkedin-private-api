import { AuthRequest } from '../requests/auth.request';
import { ConversationRequest } from '../requests/conversation.request';
import { InvitationRequest } from '../requests/invitation.request';
import { MessageRequest } from '../requests/message.request';
import { ProfileRequest } from '../requests/profile.request';
import { SearchRequest } from '../requests/search.request';
import { Request } from './request';
export declare class LinkedInRequest extends Request {
    conversation: ConversationRequest;
    invitation: InvitationRequest;
    message: MessageRequest;
    profile: ProfileRequest;
    search: SearchRequest;
    auth: AuthRequest;
}
