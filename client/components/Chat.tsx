import React from "react";
import Message from "./Message";

export default function Chat() {
  return (
    <div className="w-1/2 h-4/5 overflow-y-auto bg-gradient-to-tr from-blue-600 to-blue-500  rounded-lg py-2 flex flex-col gap-y-3">
      <Message content="سلام خوبی" own={true} />
      <Message content="مرسی" own={false} />
    </div>
  );
}
