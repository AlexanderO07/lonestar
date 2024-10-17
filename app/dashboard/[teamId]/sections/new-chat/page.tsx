"use client"; // Ensure this component is treated as a client component

import { Forward, Mic } from "lucide-react";
import React, { useState, useRef } from "react";
import "./chat.css";

const ForwardIcon = () => (
  <Forward className="h-6 w-6" style={{ strokeWidth: "1.8" }} />
);

const MicIcon = () => (
  <Mic className="h-6 w-6" style={{ strokeWidth: "1.8" }} />
);

export default function NewChatPage() {
  const [message, setMessage] = useState("");
  const [isFirstMessageSent, setIsFirstMessageSent] = useState(false); // Track if the first message has been sent
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null); // Reference to the chat container

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      if (e.shiftKey) {
        e.preventDefault();
        const newMessage = message + "\n";
        setMessage(newMessage);
        if (textAreaRef.current) {
          textAreaRef.current!.style.height = "auto";
          //chatbox anim
          requestAnimationFrame(() => {
            textAreaRef.current!.style.height = `${
              textAreaRef.current!.scrollHeight
            }px`;
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
        if (!isFirstMessageSent) {
          setIsFirstMessageSent(true); // Mark that the first message was sent
          if (chatContainerRef.current) {
            chatContainerRef.current.classList.add("move-bottom"); // Move the chatbox down
            chatContainerRef.current.classList.toggle("chatcontainer-hold");
          }
        }
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
      textAreaRef.current.focus();
    }
  };

  return (
    <div className="page-container">
      <title>Journey</title>
      <h1 className="welcome-container" id="welcomeText">
        I&apos;m Journey! <br /> How can I help you today?
      </h1>
      <div className={`chatcontainer ${isFirstMessageSent ? "move-bottom" : ""}`} ref={chatContainerRef}>
        <div className="input-container">
          <button>
            <MicIcon />
          </button>
          <textarea
            ref={textAreaRef}
            className="chatbox"
            placeholder="Message Journey"
            value={message}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            rows={1}
            style={{ overflow: "hidden" }}
          />
          <button
            className={`send-icon ${message.trim() === "" ? "disabled" : ""}`}
            onClick={() => {
              if (message.trim() !== "") {
                console.log("Message sent:", message);
                if (!isFirstMessageSent) {
                  setIsFirstMessageSent(true); // Move the chatbox down after the first message
                  if (chatContainerRef.current) {
                    chatContainerRef.current.classList.add("move-bottom"); // Add the move-bottom class
                    chatContainerRef.current!.classList.add("chat-hold");
                  }
                }
                setMessage(""); // Resetting chatbox
              }
            }}
            disabled={message.trim() === ""}
          >
            <ForwardIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
