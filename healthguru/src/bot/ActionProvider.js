import axios from 'axios';


class ActionProvider {
    // The action provider receives createChatBotMessage which you can use to define the bots response, and 
    // the setState function that allows for manipulating the bots internal state.
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage
    }
  
    handleMessageParser = () => {
      const messages = this.createChatBotMessage(
        "The message parser controls how the bot reads input and decides which action to invoke.",
        { widget: "messageParser", withAvatar: true }
      );
  
      this.addMessageToBotState(messages);
    };
  
    handleDefault(msg){
        let ref = this
        axios.post('https://www.organicdrop.in/chatbot/get/user/chat/', {
            u: 'novia',
            q: msg
          })
          .then(function (response) {
            console.log(response)
            const message = ref.createChatBotMessage(response["data"]["res"], {
                withAvatar: true,
              });
          
              ref.addMessageToBotState(message)
          })
          .catch(function (error) {
            console.log(error);
          });
        


      
    };
  
    addMessageToBotState = (messages) => {
      if (Array.isArray(messages)) {
        this.setState((state) => ({
          ...state,
          messages: [...state.messages, ...messages],
        }));
      } else {
        this.setState((state) => ({
          ...state,
          messages: [...state.messages, messages],
        }));
      }
    };
  }
  
  export default ActionProvider;