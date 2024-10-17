"use client"; // Ensure this component is treated as a client component

import { Forward, Mic } from "lucide-react";
import React, { useState, useRef } from "react";
import "./styles.css";

const ForwardIcon = () => (
  <Forward className="h-6 w-6" style={{ strokeWidth: "1.5" }} />
);

export default function NewTeamChatPage() {
  const [message, setMessage] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      if (e.shiftKey) {
        e.preventDefault();
        const newMessage = message + "\n"; 
        setMessage(newMessage);
        if (textAreaRef.current) {
          textAreaRef.current!.style.height = "auto";
          requestAnimationFrame(() => {
            textAreaRef.current!.style.height = `${textAreaRef.current!.scrollHeight}px`;
          });
          textAreaRef.current!.focus();
        }
      } else {
        e.preventDefault();
        console.log("Message sent:", message);
        setMessage("");
        if (textAreaRef.current) {
          textAreaRef.current.style.height = "40px"; // Reset initial height
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
      <title>Team Chat</title>
      <div className="text-container">
        <div className="messages">
          <div className="teamPlaceholder">
            <h1>
              You&apos;re team chats will show up here. <br/> Start by inviting
              some people to your <br/> team through the Invitations section<br/>on the
              left.
            </h1>
          </div>
        </div>
        <div className="chatcontainer">
          <div className="input-container">
            <Mic />
            <textarea
              ref={textAreaRef}
              className="chatbox"
              placeholder="Message Team"
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
                  console.log("Team Message sent:", message);
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
    </div>
  );
}
