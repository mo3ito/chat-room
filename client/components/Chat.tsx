import React from "react";
import Message from "./Message";
import { ChatType } from "@/types/ChatType";



export default function Chat({ chat }:ChatType[]) {

    console.log(chat);
    
  return (
    <div className="w-1/2 h-4/5 overflow-y-auto bg-gradient-to-tr from-blue-600 to-blue-500  rounded-lg py-2 flex flex-col gap-y-3">
      {chat.map((item : ChatType[], index: number) => (
        <Message key={index} {...item} />
      ))}
    </div>
  );
}
