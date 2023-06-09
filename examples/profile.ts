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

  // const peopleScroller = client.search.searchPeople({ keywords: 'Bill Gates' });
  // const billGates = (await peopleScroller.scrollNext())[0];
  const fullProfile = await client.profile.getProfile({ publicIdentifier: profile });

  const ownProfile = await client.profile.getOwnProfile();

  console.log(fullProfile, ownProfile);
})();
