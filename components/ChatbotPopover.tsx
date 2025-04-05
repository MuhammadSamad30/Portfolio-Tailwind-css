"use client";
import React, { useState } from "react";

const ChatbotPopover: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 8h10M7 12h4m1 8a9 9 0 100-18 9 9 0 000 18z"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="mt-2 bg-white rounded-lg shadow-lg w-[90vw] h-[70vh] sm:w-96 sm:h-[600px] relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <iframe
            src="https://mindmate-ai-chatbot.vercel.app/chat-page"
            title="MindMate AI Chatbot"
            className="w-full h-full rounded-lg"
            frameBorder="0"
          />
        </div>
      )}
    </div>
  );
};

export default ChatbotPopover;
