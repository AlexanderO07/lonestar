"use client"; // Ensure this component is treated as a client component

import { Forward, Mic } from "lucide-react";
import React, { useState, useRef } from "react";
import "./chat.css";

const ForwardIcon = () => (
  <Forward className="h-6 w-6" style={{ strokeWidth: "1.5" }} />
);

export default function NewChatPage() {
  const [message, setMessage] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      if (e.shiftKey) {
        e.preventDefault(); // Prevent the default behavior
        const newMessage = message + "\n"; 
        setMessage(newMessage);
        if (textAreaRef.current) {
          textAreaRef.current.style.height = "auto";
          textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
          textAreaRef.current.focus(); //Keep focus on the textarea
        }
      } else {
        e.preventDefault();
        console.log("Message sent:", message);
        setMessage("");
        if (textAreaRef.current) {
          textAreaRef.current.style.height = "40px"; // Set to the desired initial height
        }
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);

    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto"; 
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
      textAreaRef.current.focus(); // Keep focus on the textarea after changing
    }
  };

  return (
    <div className="page-container">
      <title>New Chat</title>
      <h1 className="welcome-container">I'm Flow! <br/> How can I help you today?</h1>
      <div className="chatcontainer">
        <div className="input-container">
        <Mic />
          <textarea
            ref={textAreaRef}
            className="chatbox"
            placeholder="Message Flow"
            value={message}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            rows={1} // Start with one row
            style={{ overflow: "hidden" }} 
          />
          <button
            className={`send-icon ${message.trim() === "" ? "disabled" : ""}`} // Add a disabled class for when empty chatbox
            onClick={() => {
              if (message.trim() !== "") {
                console.log("Message sent:", message);
                setMessage(""); 
              }
            }}
            disabled={message.trim() === ""} // Disable the button if there's no text
          >
            <ForwardIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
