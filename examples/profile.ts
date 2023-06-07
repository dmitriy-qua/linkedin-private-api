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

  // graphql?includeWebMetadata=true&variables=(query:(keywords:Bill Gates,flagshipSearchIntent:SEARCH_SRP,queryParameters:List((key:primaryResultType,value:List(PEOPLE)),(key:resultType,value:List(ALL)))))&=&queryId=voyagerSearchDashFilterClusters.762ab3bcd12981f5ebd753a9a2c36ff0
  // variables=(start:0,origin:GLOBAL_SEARCH_HEADER,query:(keywords:Bill Gates,flagshipSearchIntent:SEARCH_SRP,queryParameters:List((key:resultType,value:List(ALL))),includeFiltersInResponse:false))
  const peopleScroller = client.search.searchPeople({ keywords: 'Bill Gates' });
  const billGates = (await peopleScroller.scrollNext())[0];
  const fullProfile = await client.profile.getProfile({ publicIdentifier: billGates.profile.publicIdentifier });

  const ownProfile = await client.profile.getOwnProfile();

  console.log(fullProfile, ownProfile);
})();
