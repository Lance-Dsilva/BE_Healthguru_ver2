// in MessageParser.js
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      if (message.includes('')) {
        this.actionProvider.handleDefault(message);
      }
    }
  }
    export default MessageParser;