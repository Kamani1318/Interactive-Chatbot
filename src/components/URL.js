import React from 'react';
import { useUrlContext } from './UrlContext';
import { ragChainService } from './ragChainService';

const URL = () => {
  const { url, setUrl } = useUrlContext();

  const handleChange = (event) => {
    setUrl(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await ragChainService.initializeRagChain(url);
      // You can add success notification here
    } catch (error) {
      console.error("Error processing the URL:", error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={url}
          onChange={handleChange}
          placeholder="Enter a URL"
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default URL;