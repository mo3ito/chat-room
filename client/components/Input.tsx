import { ChatType, InputChat } from "@/types/ChatType";
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Input({setChat , user , socket }:InputChat) {
  const [input, setInput] = useState<string>("");

  const sendMessage = ()=>{
    const msg = {id:uuidv4() ,content:input , type:"text" , user}
    setChat((prev : ChatType[])=>[...prev , msg])
    setInput("")
  }

  return (
    <div className="w-1/3   my-6 h-max flex items-center justify-center gap-x-4">
      <button onClick={sendMessage} className="bg-gradient-to-tr from-blue-600 to-blue-500  h-12 w-16 flex items-center justify-center rounded-lg">
        <svg
          className="size-8 fill-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M3.5 1.34558C3.58425 1.34558 3.66714 1.36687 3.74096 1.40747L22.2034 11.5618C22.4454 11.6949 22.5337 11.9989 22.4006 12.2409C22.3549 12.324 22.2865 12.3924 22.2034 12.4381L3.74096 22.5924C3.499 22.7255 3.19497 22.6372 3.06189 22.3953C3.02129 22.3214 3 22.2386 3 22.1543V1.84558C3 1.56944 3.22386 1.34558 3.5 1.34558ZM5 4.38249V10.9999H10V12.9999H5V19.6174L18.8499 11.9999L5 4.38249Z"></path>
        </svg>
      </button>
      <input
        value={input}
        onChange={(event) => setInput(event?.target.value)}
        onKeyDown={(event)=> event.key === "Enter" && sendMessage() }
        placeholder="پیام را وارد کنید"
        type="text"
        className=" w-10/12 bg-gradient-to-tr from-blue-600 to-blue-500  rounded-lg text-white px-3 min-h-12 max-h-44 outline-none"
      />
    </div>
  );
}
