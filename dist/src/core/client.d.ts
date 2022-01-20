import { AxiosProxyConfig } from 'axios';
import { ConversationRepository, InvitationRepository, MessageRepository, ProfileRepository, SearchRepository } from '../repositories';
import { LinkedInRequest } from './linkedin-request';
import { Login } from './login';
interface ClientOpts {
    proxy?: AxiosProxyConfig;
}
export declare class Client {
    request: LinkedInRequest;
    constructor({ proxy }?: ClientOpts);
    login: Login;
    search: SearchRepository;
    invitation: InvitationRepository;
    profile: ProfileRepository;
    conversation: ConversationRepository;
    message: MessageRepository;
}
export {};
