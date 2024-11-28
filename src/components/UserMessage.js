import React from "react";

export default function UserMessage({ text }) {
  return (
    <div className="w-full">
      <div className="bg-highlights text-border float-right p-4 m-2 rounded-[20px_20px_1px_20px]">
        {text}
      </div>
    </div>
  );
}
