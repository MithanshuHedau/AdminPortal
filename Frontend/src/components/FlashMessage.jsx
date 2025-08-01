import React from "react";
import { useFlash } from "../context/FlashContext";
import "./FlashMessage.css";

const FlashMessage = () => {
  const { flashMessage, hideFlash } = useFlash();

  if (!flashMessage) return null;

  return (
    <div className={`flash-message flash-${flashMessage.type}`}>
      <div className="flash-content">
        <span className="flash-text">{flashMessage.message}</span>
        <button className="flash-close" onClick={hideFlash}>
          ×
        </button>
      </div>
    </div>
  );
};

export default FlashMessage;
