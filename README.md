# KamotoAI Node.js Library

The KamotoAI Node.js Library provides easy access to the Kamoto.AI API from applications written in server-side JavaScript.

## Installation

Install the package with:

```bash
npm install kamotoai
```

## Usage

The package needs to be configured with your account's API Key and the Personality ID which you get from the Kamoto.AI platform. 

```javascript
const KamotoClient = require('kamotoai');

const apiKey = 'your-api-key';
const personalityId = 'your-personality-id';

const client = new KamotoClient(apiKey, personalityId);
```

## Chat with the AI

You can start chatting with your AI personality using the `chat` method.

```javascript
client.chat("Hello AI!").then(response => console.log(response.choices[0].message.content));
```

## Chat with the AI with history

You can maintain a conversation history with the AI using the `chatWithHistory` method. 

```javascript
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

client.chatWithHistory(messages).then(response => console.log(response.choices[0].message.content));
```

## Error handling

Both `chat` and `chatWithHistory` methods will throw an error if the request fails. The error object contains useful information about the failure.

```javascript
try {
  const response = await client.chat('Hello AI!');
  console.log(response.choices[0].message.content);
} catch (error) {
  console.error('An error occurred:', error);
}
```
## What is Kamoto.AI?
Kamoto.AI is a SaaS platform that revolutionizes the way people interact with AI chatbots, celebrities, and influencers. Kamoto.AI provides an unprecedented opportunity for users to create and train their own virtual AI characters or digital clone. This not only allows for a uniquely customizable AI experience but also opens up a new avenue for monetization. Users can share these personalized AI characters with others on a rental basis, creating a dynamic marketplace of AI Persona

In a world that's increasingly fascinated by celebrity culture and influenced by social media personalities,Our product is limited only to creating digital clones but at the same time you can talk to your favorite AI character and personalities. Kamoto.AI takes it a step further. Celebrities and influencers can license their authorized AI personalities on their platform. These AI replicas are trained using structured data provided by the celebrities themselves, ensuring an authentic and truly representative AI version of their persona. This provides fans and followers with an exciting and intimate mode of interaction, never seen before.

Moreover, celebrities and influencers stand to benefit from this innovative model. Every usage of their licensed AI character generates a commission for them, thereby opening up a new and engaging revenue stream.

Kamoto.AI's capabilities don't just stop at individual users and celebrities. Kamoto.AI offers these AI personas as an API for seamless integration into other applications like telegram bots, mobile apps, etc. This opens up incredible possibilities for developers and companies who wish to offer their users the authentic experience of interacting with celebrities and influencers. Imagine a fitness app guided by your favorite athlete's AI, or a language learning app featuring your favorite author's AI - the possibilities are endless.

Kamoto.AI is on a mission to redefine the landscape of AI, celebrity culture, and social influence. By creating a symbiotic ecosystem of users, celebrities, influencers, and developers, Kamoto.AI is taking a leap into the future of digital interaction and monetization. Kamoto.AI is not just building an AI platform, it is creating a new digital universe where everyone can interact, innovate, and earn.  


## More Information

- [Kamoto.AI Platform](https://www.kamoto.ai/)
- [Kamoto.AI Support](https://help.kamoto.ai/)
- [Issues](https://github.com/Kamoto-AI/kamoto-ai-nodejs-library/issues)
- [MIT License](LICENSE.md)
```

Please make sure to replace 'your-api-key' and 'your-personality-id' with your actual API Key and Personality ID. Note that this README includes a section on how to handle errors in the event of a request failure, which can help users of your library to troubleshoot issues.