import React, { useState } from "react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        style={{ position: "fixed", bottom: "20px", left: "20px" }}
        onClick={toggleOverlay}
      >
        Chat
      </button>
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "60px",
            left: "20px",
            width: "300px",
            height: "400px",
          }}
        >
          <iframe src="https://deezer.memoiz.app" title="Chat" />
        </div>
      )}
    </div>
  );
};

export default Chatbot;
