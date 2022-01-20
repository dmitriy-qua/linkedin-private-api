import { LinkedInMiniProfile } from './linkedin-mini-profile.entity';
export declare type ProfileId = string;
export interface MiniProfile extends LinkedInMiniProfile {
    profileId: ProfileId;
    pictureUrls: string[];
}
