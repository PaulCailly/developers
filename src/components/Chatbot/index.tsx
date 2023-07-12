import React, { useState } from "react";
import styles from "./styles.module.css";
const Icon = require("@site/static/img/openai.svg").default;

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          height: "60px",
          width: "60px",
          borderRadius: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F5F5F5",
          cursor: "pointer",
          zIndex: 1000,
        }}
        onClick={toggleOverlay}
      >
        <Icon className={styles.icon} role="img" />
      </div>
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "60px",
            right: "20px",
            width: "700px",
            height: "600px",
            backgroundColor: "white",
            zIndex: 1100,
            borderRadius: "20px",
            boxShadow: "0px 24px 32px 16px rgba(0, 0, 0, 0.10)",
          }}
        >
          <iframe
            src="https://deezer.memoiz.app"
            title="Chat"
            height="600px"
            width="700px"
          />
        </div>
      )}
    </div>
  );
};

export default Chatbot;
