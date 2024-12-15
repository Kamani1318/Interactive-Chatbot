# Chatbot Documentation

## Overview
This documentation provides details about an interactive chatbot built using **LangChain.js** and **React.js**, powered by the **Gemini-1.5** Large Language Model (LLM). The chatbot supports two modes:

1. **Generic Mode**: Standard chatbot functionality using the base Gemini-1.5 model.
2. **Custom Mode**: Enables customization by training the chatbot with specific URLs, allowing it to answer questions based on the provided content.

---

## Features

### Generic Mode
- Operates as a typical chatbot.
- Leverages the advanced natural language understanding and generation capabilities of Gemini-1.5.
- Suitable for general-purpose interactions.

### Custom Mode
- Accepts URLs as input for training.
- Processes the content of the provided URLs and uses it to answer user queries.
- Ideal for domain-specific or context-aware interactions.

---

## Technology Stack

1. **Frontend Framework**: React.js
   - Used to build the user interface.
   - Manages the interactive messaging interface for the chatbot.

2. **Backend/Logic Layer**: LangChain.js
   - Facilitates seamless integration with the Gemini-1.5 LLM.
   - Handles the logic for switching between Generic and Custom modes.

3. **LLM**: Gemini-1.5
   - Provides the core natural language processing capabilities.

---

## Setup Instructions

### Prerequisites
- Node.js installed on your system.
- A valid API key for accessing the Gemini-1.5 LLM.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/chatbot
   cd chatbot
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the project root and add your API key:
   ```plaintext
   GEMINI_API_KEY=your-api-key
   ```

4. Start the development server:
   ```bash
   npm start
   ```

---

## Usage

### Generic Mode
1. Launch the chatbot interface.
2. Start typing your questions or messages in the input box.
3. The chatbot will respond using the standard Gemini-1.5 LLM capabilities.

### Custom Mode
1. Enter URLs to train the chatbot on specific content.
2. After training is complete, ask questions related to the provided URLs.
3. The chatbot will respond based on the processed content of the URLs.

---

## Code Overview

### Core Components

1. **Chat Interface**
   - Built using React.js components.
   - Includes an input box, message display area, and mode selection.

2. **LangChain.js Integration**
   - Manages interactions with the Gemini-1.5 API.
   - Implements the logic for switching between Generic and Custom modes.

3. **Custom URL Processing**
   - Uses LangChain.js tools to fetch and preprocess content from the provided URLs.
   - Creates embeddings for context-aware responses.

---

## API Reference

### Generic Mode
- **Endpoint**: `/generate`
- **Method**: POST
- **Payload**:
  ```json
  {
    "message": "Your input message"
  }
  ```
- **Response**:
  ```json
  {
    "response": "Chatbot's reply"
  }
  ```

### Custom Mode
- **Endpoint**: `/train`
- **Method**: POST
- **Payload**:
  ```json
  {
    "urls": ["https://example.com/content"]
  }
  ```
- **Response**:
  ```json
  {
    "status": "Training completed",
    "trained_on": ["https://example.com/content"]
  }
  ```

- **Endpoint**: `/custom-generate`
- **Method**: POST
- **Payload**:
  ```json
  {
    "message": "Your query",
    "context": "custom"
  }
  ```
- **Response**:
  ```json
  {
    "response": "Chatbot's reply based on trained content"
  }
  ```

---

## Example Interactions

### Generic Mode
- **Input**: "What is the capital of France?"
- **Output**: "The capital of France is Paris."

### Custom Mode
1. Train the chatbot:
   ```json
   {
     "urls": ["https://example.com/science"]
   }
   ```
2. Ask a question based on the URL:
   - **Input**: "What is the main topic discussed in the article?"
   - **Output**: "The article discusses recent advancements in quantum physics."

---

## Future Enhancements

1. **Support for Additional Input Types**
   - PDFs, Word documents, etc.

2. **Advanced Training Capabilities**
   - Allow fine-tuning on larger datasets.

3. **Improved UI/UX**
   - Add real-time feedback for training progress.

4. **Multilingual Support**
   - Extend capabilities to multiple languages.

---

## Support
For any issues or feature requests, please open an issue on [GitHub](https://github.com/your-repo/chatbot/issues) or contact us at support@example.com.

