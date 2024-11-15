import React, { createContext, useContext, useState } from 'react';

// Create the context
const UrlContext = createContext();

// Create the provider component
export const UrlProvider = ({ children }) => {
  const [url, setUrl] = useState("");

  return (
    <UrlContext.Provider value={{ url, setUrl }}>
      {children}
    </UrlContext.Provider>
  );
};

// Custom hook to use the UrlContext
export const useUrlContext = () => useContext(UrlContext);
