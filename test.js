const KamotoClient = require('.');

const apiKey = '576799f8-05eb-47ac-a9e9-ea0f987d6c2d';
const personalityId = '7342e580-b59d-44a9-93c8-e60a5e013eab';

const client = new KamotoClient(apiKey, personalityId);

const messages = [
  {
    role: 'user',
    content: 'Hi',
  },
  {
    role: 'assistant',
    content: 'Hello!',
  },
  {
    role: 'user',
    content: 'what is my name?',
  },
];

client.chat("My name is Toshendra").then(response => console.log(response.choices[0].message.content));

client.chatWithHistory(messages).then(response => console.log(response.choices[0].message.content));


