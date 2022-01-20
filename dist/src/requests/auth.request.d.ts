import { AxiosResponse } from 'axios';
import { LinkedInRequest } from '../core/linkedin-request';
export declare class AuthRequest {
    private request;
    constructor({ request }: {
        request: LinkedInRequest;
    });
    getAnonymousAuth(): Promise<AxiosResponse>;
    authenticateUser({ username, password, sessionId, }: {
        username: string;
        password: string;
        sessionId: string;
    }): Promise<AxiosResponse>;
}
