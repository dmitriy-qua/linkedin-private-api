import dotenv from 'dotenv';
dotenv.config();

import { Client } from '../src';

const username = process.env.ACC_USERNAME as string;
const password = process.env.ACC_PASSWORD as string;
const profile = process.env.EXAMPLE_PROFILE as string;

(async () => {
  let client = new Client();
  client = await client.login.userPass({
    username,
    password,
    useCache: true
  });

  // const receivedScroller = client.invitation.getReceivedInvitations();
  // const receivedInvitations = await receivedScroller.scrollNext();
  //
  // const sentScroller = client.invitation.getSentInvitations();
  // const sentInvitations = await sentScroller.scrollNext();
  //
  // const peopleScroller = client.search.searchPeople({ keywords: 'Bill Gates' });
  // const people = await peopleScroller.scrollNext();
  // const billGates = people[0].profile;
  const fullProfile = await client.profile.getProfile({ publicIdentifier: profile });
  const sentInvitation = await client.invitation.sendInvitation({
    profileId: fullProfile.entityUrn?.replace("urn:li:fsd_profile:", ""),
    message: "I'd be glad to connect."
  });

  console.log(fullProfile, sentInvitation);
})();
