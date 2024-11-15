import { ragChainService } from './components/ragChainService';

const API = {
  GetChatbotResponse: async (message,selectedModel) => {
    return await ragChainService.getChatbotResponse(message,selectedModel);
  }
};

export default API;