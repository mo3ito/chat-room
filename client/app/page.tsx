"use client";
import { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import Input from "@/components/Input";
import Chat from "@/components/Chat";
import { ChatType } from "@/types/ChatType";
import SignUp from "@/components/SignUp";

const socket = io("http://localhost:4000");

export default function Home() {
  const [chat, setChat] = useState<ChatType[] | []>([]);
  const user = useRef<string | null>(null);

  console.log(chat);
  useEffect(() => {
    socket.on("recieve-message", (message) => {
      setChat((prev) => [...prev, message]);
    });

    return () => {
      socket.off("recieve-message");
    };
  }, []);

  console.log(chat);

  return (
    <main className="flex flex-col items-center justify-center w-full h-screen py-20 bg-blue-400">
      {user.current ? (
        <>
          <Chat chat={chat} />
          <Input setChat={setChat} user={user.current} socket={socket} />
        </>
      ) : (
        <SignUp socket={socket} user={user.current} />
      )}
    </main>
  );
}
