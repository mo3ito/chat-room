import { ChatType, InputChat } from "@/types/ChatType";
import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Input({ setChat, user, socket }: InputChat) {
  const [input, setInput] = useState<string>("");
  const uploadInputRef = useRef<HTMLInputElement | null>(null);

  const sendMessage = () => {
    const msg = { id: uuidv4(), content: input, type: "text", user };
    socket.emit("send-message", msg);
    setChat((prev: ChatType[]) => [...prev, msg]);
    setInput("");
  };

  const sendFile = ()=>{
    uploadInputRef.current?.click()
  }

  return (
    <div className="w-1/3   my-6 h-max flex items-center justify-center gap-x-4">
      <button
        onClick={sendMessage}
        className="bg-gradient-to-tr from-blue-600 to-blue-500  h-12 w-16 flex items-center justify-center rounded-lg"
      >
        <svg
          className="size-8 fill-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M3.5 1.34558C3.58425 1.34558 3.66714 1.36687 3.74096 1.40747L22.2034 11.5618C22.4454 11.6949 22.5337 11.9989 22.4006 12.2409C22.3549 12.324 22.2865 12.3924 22.2034 12.4381L3.74096 22.5924C3.499 22.7255 3.19497 22.6372 3.06189 22.3953C3.02129 22.3214 3 22.2386 3 22.1543V1.84558C3 1.56944 3.22386 1.34558 3.5 1.34558ZM5 4.38249V10.9999H10V12.9999H5V19.6174L18.8499 11.9999L5 4.38249Z"></path>
        </svg>
      </button>
      <button
        onClick={sendFile}
        className="bg-gradient-to-tr from-blue-600 to-blue-500  h-12 w-16 flex items-center justify-center rounded-lg"
      >
        <svg
          className="size-8 fill-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"></path>
        </svg>
      </button>
      <input className="hidden" type="file" ref={uploadInputRef} />

      <input
        value={input}
        onChange={(event) => setInput(event?.target.value)}
        onKeyDown={(event) => event.key === "Enter" && sendMessage()}
        placeholder="پیام را وارد کنید"
        type="text"
        className=" w-10/12 bg-gradient-to-tr from-blue-600 to-blue-500  rounded-lg text-white px-3 min-h-12 max-h-44 outline-none"
      />
    </div>
  );
}
