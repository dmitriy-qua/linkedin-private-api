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

  const conversationScroller = client.conversation.getConversations();
  const conversations = await conversationScroller.scrollNext();

  const messagesScroller = client.message.getMessages({ conversationId: conversations[0].conversationId });
  const messages = await messagesScroller.scrollNext();

  const myConnectionsScroller = client.search.searchOwnConnections({
    keywords: `Trudelta Test2 `
  });
  const myConnections = await myConnectionsScroller.scrollNext();

  const sentMessage = await client.message.sendMessage({
    profileId: myConnections[0].profile.profileId,
    text: 'Hey!',
  });

  console.log(messages, sentMessage);
})();
