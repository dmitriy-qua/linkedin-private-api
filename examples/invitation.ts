import dotenv from 'dotenv';
dotenv.config();

import { Client } from '../src';

const username = process.env.ACC_USERNAME as string;
const password = process.env.ACC_PASSWORD as string;

(async () => {
  let client = new Client();
  client = await client.login.userPass({
    username,
    password,
    useCache: true
  });

  const receivedScroller = client.invitation.getReceivedInvitations();
  const receivedInvitations = await receivedScroller.scrollNext();

  const sentScroller = client.invitation.getSentInvitations();
  const sentInvitations = await sentScroller.scrollNext();

  const peopleScroller = client.search.searchPeople({ keywords: 'Bill Gates' });
  const people = await peopleScroller.scrollNext();
  const billGates = people[0].profile;
  const sentInvitation = await client.invitation.sendInvitation({
    profileId: billGates.profileId,
    trackingId: billGates.trackingId,
  });

  console.log(receivedInvitations, sentInvitations, sentInvitation);
})();
