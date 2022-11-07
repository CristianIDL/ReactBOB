import { createChatBotMessage } from "react-chatbot-kit";


const config = {
  botName: "BOB",
  initialMessages: [createChatBotMessage(`Holi soy BOB, desconectenme porfavor :D`)],
  customComponents: {},
  customStyles: {
    botMessageBox: {
      backgroundColor: '#911F27',
    },
    chatButton: {
      backgroundColor: '#FFD372',
    },
  },
};

export default config