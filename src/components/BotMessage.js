import React, { useState, useEffect } from "react";
import { GoogleGenerativeAIEmbeddings, ChatGoogleGenerativeAI } from "@langchain/google-genai";
export default function BotMessage({ fetchMessage }) {
  const [isLoading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function loadMessage() {
      const msg = await fetchMessage();
      setLoading(false);
      setMessage(msg);
    }
    loadMessage();
  }, [fetchMessage]);

  return (
    <div className="w-full">
      <div className="bg-[#00aaa5] text-white float-left p-4 m-2 rounded-[20px_20px_20px_1px]">{isLoading ? "..." : message}</div>
    </div>
  );
}
