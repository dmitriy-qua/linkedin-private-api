import { LinkedInRequest } from '../core/linkedin-request';
import { GetReceivedInvitationResponse } from '../responses/received-invitations.response.get';
import { GetSentInvitationResponse } from '../responses/sent-invitations.response.get';

export class InvitationRequest {
  private request: LinkedInRequest;

  constructor({ request }: { request: LinkedInRequest }) {
    this.request = request;
  }

  sendInvitation({ profileId, message }: { profileId: string; message?: string }): Promise<void> {
    const queryParams = {
      action: 'verifyQuotaAndCreate',
      decorationId: 'com.linkedin.voyager.dash.deco.relationships.InvitationCreationResultWithInvitee-2',
    };

    const requestPayload = {
      ...(message && {
        customMessage: message,
      }),
      inviteeProfileUrn: `urn:li:fsd_profile:${profileId}`,
    };

    return this.request.post('voyagerRelationshipsDashMemberRelationships', requestPayload, {
      params: queryParams,
    });
  }

  getReceivedInvitations({ skip = 0, limit = 100 } = {}): Promise<GetReceivedInvitationResponse> {
    const queryParams = {
      start: skip,
      count: limit,
      q: 'receivedInvitation',
    };

    return this.request.get<GetReceivedInvitationResponse>('relationships/invitationViews', {
      params: queryParams,
    });
  }

  getSentInvitations({ skip = 0, limit = 100 } = {}): Promise<GetSentInvitationResponse> {
    const queryParams = {
      start: skip,
      count: limit,
      invitationType: 'CONNECTION',
      q: 'invitationType',
    };

    return this.request.get<GetSentInvitationResponse>('relationships/sentInvitationViewsV2', {
      params: queryParams,
    });
  }
}
