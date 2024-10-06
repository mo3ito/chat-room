import React, { useEffect, useRef } from "react";
import Message from "./Message";
import { ChatProps, ChatType } from "@/types/ChatType";
import Typing from "./Typing";
import ServerMessage from "./ServerMessage";

export default function Chat({ chat, user, typing }: ChatProps) {
  console.log(typing);
  console.log(chat);

  const scrollerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!scrollerRef.current) {
      return;
    }

    scrollerRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }, [chat]);

  return (
    <div className="container px-3 h-full">
      <section className=" w-full  h-full overflow-y-auto bg-gradient-to-tr from-blue-600 to-blue-500 rounded-lg py-2 flex flex-col gap-y-3 overflow-x-hidden ">
        {chat.map((item: ChatType) => {
          return item.type === "server" ? (
            <ServerMessage
              key={item.id}
              user={item.user}
              content={item.content}
            />
          ) : (
            <Message
              content={item.content}
              own={item.user?.id === user?.id}
              type={item.type}
              user={item.user}
              key={item.id}
            />
          );
        })}
        {typing[0] && <Typing user={typing[0]} />}
        <div ref={scrollerRef}></div>
      </section>
    </div>
  );
}
