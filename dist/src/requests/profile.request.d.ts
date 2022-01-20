import { LinkedInRequest } from '../core/linkedin-request';
import { GetOwnProfileResponse } from '../responses/own-profile.response.get';
import { GetProfileResponse } from '../responses/profile.response.get';
export declare class ProfileRequest {
    private request;
    constructor({ request }: {
        request: LinkedInRequest;
    });
    getProfile({ publicIdentifier }: {
        publicIdentifier: string;
    }): Promise<GetProfileResponse>;
    getOwnProfile(): Promise<GetOwnProfileResponse>;
}
