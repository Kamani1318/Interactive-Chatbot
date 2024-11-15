import React, { useState, useEffect } from "react";
import BotMessage from "./components/BotMessage";
import UserMessage from "./components/UserMessage";
import Messages from "./components/Messages";
import Input from "./components/Input";
import API from "./ChatbotAPI";
import Header from "./components/Header";
import URL from "./components/URL";
import { UrlProvider } from './components/UrlContext';
import DisplayUrl from "./components/DisplayUrl";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [selectedModel, setSelectedModel] = useState("Generic Model");

  // Load initial welcome message
  useEffect(() => {
    async function loadWelcomeMessage() {
      setMessages([
        <BotMessage key="0" fetchMessage={async () => await API.GetChatbotResponse("hi",selectedModel)} />,
      ]);
    }
    loadWelcomeMessage();
  }, []);

  // Function to handle sending messages
  const send = async (text) => {
    console.log("inside the send function", text)
    const newMessages = messages.concat(
      <UserMessage key={messages.length + 1} text={text} />,
      <BotMessage key={messages.length + 2} fetchMessage={async () => await API.GetChatbotResponse(text,selectedModel)} />
    );
    setMessages(newMessages);
  };

  return (
    <>
    <UrlProvider>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <div className="flex flex-col lg:flex-row w-full max-w-6xl gap-20">
        <div className="flex flex-col flex-1 w-full max-w-lg h-[80vh] bg-[#f5f8fb] rounded-xl shadow-lg overflow-hidden font-mono">
          {/* Header */}
          <Header />
          {/* Scrollable Messages Section */}
          <div className="flex-1 overflow-y-auto p-4" id="messages-container">
            <Messages messages={messages} />
          </div>
          {/* Fixed Input Section */}
          <div className="p-4 bg-white border-t border-gray-200">
            <Input onSend={send} selectedModel={selectedModel} setSelectedModel={setSelectedModel}/>
          </div>
          {/* Column 2: Chat Container */}
        </div>
        {/* Column 1: URL Component */}
        <div className="flex-1 bg-white shadow-lg rounded-xl p-6">
          <URL />
          <DisplayUrl/>
        </div>
      </div>
    </div>
    </UrlProvider>
    </>
  );
};

export default App;
