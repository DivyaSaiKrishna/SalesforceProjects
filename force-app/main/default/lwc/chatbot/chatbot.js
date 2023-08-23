import { LightningElement, track } from 'lwc';

export default class Chatbot extends LightningElement {
  @track chatMessages = [];
  @track userInput = '';
  @track isProcessing = false;

  getMessageClass(message) {
    return classMap({
      'bot-message': message.isBot,
      'user-message': !message.isBot
    });
  }

  
  get messageClass() {
    return this.chatMessages.map(message => (message.isBot ? 'bot-message' : 'user-message')).join(' ');
  }

  connectedCallback() {
    // Add a welcome message from the bot when the component loads
    this.addBotMessage('Welcome to the Chatbot!');
  }

  handleUserInput(event) {
    // Capture user input and handle it
    if (event.keyCode === 13) {
      // Check if the user pressed Enter (key code 13)
      const inputText = event.target.value;
      this.addUserMessage(inputText);
      this.processUserInput(inputText);
    }
  }

  processUserInput(userInput) {
    // Process user input, perform actions, and generate bot responses
    // Here, you can make API calls, perform data lookups, or invoke other services

    // In this example, we'll simulate a simple bot response
    const botResponse = `You said: ${userInput}`;

    this.addBotMessage(botResponse);
  }

  addBotMessage(message) {
    // Add a message from the bot to the chat
    this.chatMessages = [
      ...this.chatMessages,
      {
        id: Date.now(),
        text: message,
        isBot: true
      }
    ];
  }

  addUserMessage(message) {
    // Add a message from the user to the chat
    this.chatMessages = [
      ...this.chatMessages,
      {
        id: Date.now(),
        text: message,
        isBot: false
      }
    ];
  }
}
