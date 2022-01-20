import { Client } from '../core/client';
import { LinkedInMiniProfile } from '../entities/linkedin-mini-profile.entity';
import { MiniProfile, ProfileId } from '../entities/mini-profile.entity';
import { Profile } from '../entities/profile.entity';
export declare const getProfilesFromResponse: <T extends {
    included: (LinkedInMiniProfile | {
        $type: string;
    })[];
}>(response: T) => Record<ProfileId, MiniProfile>;
export declare class ProfileRepository {
    private client;
    constructor({ client }: {
        client: Client;
    });
    getProfile({ publicIdentifier }: {
        publicIdentifier: string;
    }): Promise<Profile>;
    getOwnProfile(): Promise<Profile | null>;
}
