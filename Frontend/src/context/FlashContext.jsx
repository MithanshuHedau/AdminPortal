import React, { createContext, useContext, useState } from "react";

const FlashContext = createContext();

export const useFlash = () => {
  const context = useContext(FlashContext);
  if (!context) {
    throw new Error("useFlash must be used within a FlashProvider");
  }
  return context;
};

export const FlashProvider = ({ children }) => {
  const [flashMessage, setFlashMessage] = useState(null);

  const showFlash = (message, type = "success") => {
    setFlashMessage({ message, type });
    // Auto remove after 5 seconds
    setTimeout(() => {
      setFlashMessage(null);
    }, 5000);
  };

  const hideFlash = () => {
    setFlashMessage(null);
  };

  return (
    <FlashContext.Provider value={{ flashMessage, showFlash, hideFlash }}>
      {children}
    </FlashContext.Provider>
  );
};
