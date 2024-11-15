import React from "react";

export default function UserMessage({ text }) {
  return (
    <div className="w-full">
      <div className="bg-gray-300 text-black float-right p-4 m-2 rounded-[20px_20px_1px_20px]">
        {text}
      </div>
    </div>
  );
}
