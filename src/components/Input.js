import React, { useState } from "react";

export default function Input({ onSend, selectedModel, setSelectedModel }) {
  const [text, setText] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (text.trim()) {
      if (selectedModel === "Custom Model") {
        onSend(text);
      } else if (selectedModel === "Generic Model") {
        onSend(text);
      }
      setText("");
    }
  };

  const handleModelSelect = (model) => {
    setSelectedModel(model);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <form onSubmit={handleSend} className="flex items-center justify-center w-full relative">
      {/* Input Field */}
      <input
        type="text"
        onChange={handleInputChange}
        value={text}
        placeholder="Enter your message"
        className="bg-background w-full font-mono border-0 border-t border-border outline-none shadow-none p-3 pr-32 rounded-lg focus:ring-2 focus:ring-white"
        style={{ fontSize: "13px", color: "white" }}
      />

      {/* Dropdown Button */}
      <div className="relative">
        <button
          type="button"
          onClick={toggleDropdown}
          className="text-white hover:bg-green focus:ring-2 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center absolute right-12 top-1/2 transform -translate-y-1/2 whitespace-nowrap"
          style={{ fontSize: "11px" }}
        >
          {selectedModel}
          <svg
            className="w-2.5 h-2.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5l4-4 4 4"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute right-[10px] bottom-[25px] z-100 bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-100">
            <ul className="py-1 text-xs text-black dark:text-black">
              <li>
                <button
                  onClick={() => handleModelSelect("Generic Model")}
                  className="block w-full text-left px-4 py-1 hover:bg-gray-200 dark:hover:bg-gray-200 dark:hover:text-black whitespace-nowrap"
                >
                  Generic Model
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleModelSelect("Custom Model")}
                  className="block w-full text-left px-4 py-1 hover:bg-gray-200 dark:hover:bg-gray-200 dark:hover:text-black whitespace-nowrap"
                >
                  Custom Model
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Send Button */}
      <button
        type="submit"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent border-0 cursor-pointer p-2 text-gray-500 hover:text-gray-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 500 500"
        >
          <polygon points="0,497.25 535.5,267.75 0,38.25 0,216.75 382.5,267.75 0,318.75" />
        </svg>
      </button>
    </form>
  );
}
