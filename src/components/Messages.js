import React, { useEffect, useRef } from "react";

export default function Messages({ messages }) {
  const el = useRef(null);
  useEffect(() => {
    el.current.scrollIntoView({ block: "end", behavior: "smooth" });
  });
  return (
    <div className="w-full h-[400px] flex flex-col px-10 py-0">
      {messages}
      <div id={"el"} ref={el} />
    </div>
  );
}
