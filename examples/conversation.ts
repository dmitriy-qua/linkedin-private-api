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

  const conversation = await client.conversation.getConversation({ conversationId: conversations[0].conversationId });

  console.log(conversations, conversation);
})();
