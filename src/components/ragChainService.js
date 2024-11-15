// Create a new file called ragChainService.js
import { CheerioWebBaseLoader } from "@langchain/community/document_loaders/web/cheerio";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { GoogleGenerativeAIEmbeddings, ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { createRetrievalChain } from "langchain/chains/retrieval";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";

// Create a singleton service
class RagChainService {
  constructor() {
    this.ragChain = null;
    this.textSplitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 200,
    });
    
    this.embeddings = new GoogleGenerativeAIEmbeddings({
      model: "embedding-001",
      apiKey: "AIzaSyBKX4K1P-ypMqDuox797vsBbb4TYRRZNYs",
    });
    
    this.llm = new ChatGoogleGenerativeAI({
      model: "gemini-pro",
      apiKey: "AIzaSyBKX4K1P-ypMqDuox797vsBbb4TYRRZNYs",
      maxOutputTokens: 2048,
    });
  }

  async initializeRagChain(url) {
    try {
      // Step 1: Load documents
      const loader = new CheerioWebBaseLoader(url, {
        selector: ".post-content, .post-title, .post-header",
      });
      const docs = await loader.load();

      // Step 2: Split documents
      const splits = await this.textSplitter.splitDocuments(docs);

      // Step 3: Create vector store
      const vectorStore = await MemoryVectorStore.fromDocuments(splits, this.embeddings);

      // Step 4: Create retriever
      const retriever = vectorStore.asRetriever({ k: 2 });

      // Step 5: Set up prompt
      const systemPrompt =
        "You are an assistant for question-answering tasks. " +
        "Use the following pieces of retrieved context to answer " +
        "the question. If you don't know the answer, say that you " +
        "don't know. Use three sentences maximum and keep the " +
        "answer concise." +
        "\n\n" +
        "{context}";

      const prompt = ChatPromptTemplate.fromMessages([
        ["system", systemPrompt],
        ["human", "{input}"],
      ]);

      // Step 6: Create chains
      const questionAnswerChain = await createStuffDocumentsChain({
        llm: this.llm,
        prompt,
      });

      this.ragChain = await createRetrievalChain({
        retriever,
        combineDocsChain: questionAnswerChain,
      });

      return true;
    } catch (error) {
      console.error("Error initializing RAG chain:", error);
      return false;
    }
  }

  async getChatbotResponse(message,selectedModel) {
    try {
        console.log(selectedModel)
    if (selectedModel === 'Generic Model')
    {
        console.log("Inside the Generic Model if statement")
        console.log(message);
        const res = await this.llm.invoke([
            [
              "human",
              `${message}`,
            ],
          ]);
          console.log(res.content)
        return res.content
    }
    else {
        if (!this.ragChain) {
            return "Please initialize the chatbot with a URL first."
        }
          const response = await this.ragChain.invoke({ input: message });
          return response.answer || "Sorry, I couldn't understand that.";
    }
    } catch (error) {
      console.error("Error getting response:", error);
      return "Oops! Something went wrong.";
    }
  }
}

// Export a single instance
export const ragChainService = new RagChainService();