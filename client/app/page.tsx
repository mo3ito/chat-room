"use client";
import { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import Input from "@/components/Input";
import Chat from "@/components/Chat";
import { ChatType, UserType } from "@/types/ChatType";
import SignUp from "@/components/SignUp";
const socket = io("http://localhost:4000");
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const [chat, setChat] = useState<ChatType[] | []>([]);
  const [input, setInput] = useState<string>("");
  const [user, setUser] = useState<UserType | null>(null);
  const [typing, setTyping] = useState<string[]>([]);

  console.log(chat);
  useEffect(() => {
    socket.on("recieve-message", (message) => {
      setChat((prev) => [...prev, message]);
    });

    socket.on("new-user", (newUser) => {
      console.log(newUser);
      setChat((prev) => [
        ...prev,
        {
          id: uuidv4(),
          content: `${newUser} اضافه شد`,
          type: "text",
          user: newUser,
        },
      ]);
    });

    socket.on("user-typing", (data) => {
      if (data.user === user?.name) {
        return;
      }

      setTyping((prev) => {
        if (typing.includes(data.user) && data.typing === true) {
          return prev;
        }

        if (data.typing === false) {
          return prev.filter((you) => you !== data.user);
        } else {
          return [...prev, data.user];
        }
      });
    });

    console.log(typing);

    return () => {
      socket.off("recieve-message");
      socket.off("new-user");
      socket.off("user-typing");
    };
  }, []);

  return (
    <main className="flex flex-col items-center justify-center w-full h-screen py-20 bg-blue-400">
      {user ? (
        <>
          <Chat chat={chat} user={user} typing={typing} />
          <Input setChat={setChat} user={user} socket={socket} />
        </>
      ) : (
        <SignUp
          socket={socket}
          user={user}
          setUser={setUser}
          input={input}
          setInput={setInput}
        />
      )}
    </main>
  );
}
