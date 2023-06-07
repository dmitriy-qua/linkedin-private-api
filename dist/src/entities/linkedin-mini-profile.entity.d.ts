import { LinkedInVectorImage } from './linkedin-vector-image.entity';
export declare type MiniProfileUrn = string;
export declare const MINI_PROFILE_TYPE = "com.linkedin.voyager.identity.shared.MiniProfile";
export declare const MICRO_PROFILE_TYPE = "com.linkedin.voyager.dash.identity.profile.Profile";
export interface LinkedInMiniProfile {
    $type: typeof MINI_PROFILE_TYPE;
    backgroundImage: LinkedInVectorImage;
    entityUrn: MiniProfileUrn;
    firstName: string;
    lastName: string;
    memorailzed?: boolean;
    objectUrn: string;
    occupation: string;
    picture?: LinkedInVectorImage;
    publicIdentifier: string;
    trackingId: string;
}
export interface LinkedInMicroProfile {
    $type: typeof MICRO_PROFILE_TYPE;
    $recipeTypes: string[];
    entityUrn: MiniProfileUrn;
    firstName: string;
    lastName: string;
    headline: string;
    memorailzed?: boolean;
    profilePicture?: LinkedInVectorImage;
    publicIdentifier: string;
}
