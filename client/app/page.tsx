"use client";
import { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import Input from "@/components/Input";
import Chat from "@/components/Chat";

const socket = io("http://localhost:4000");

export default function Home() {
  useEffect(() => {
    socket.on("do-something", () => {
      console.log("clicked");
    });
  });

  const user = useRef(null);

  return (
    <main className="flex flex-col items-center justify-center w-full h-screen py-20 bg-blue-400">
      {!user.current ? (
        <>
          <Chat />
          <Input />
        </>
      ) : (
        <p>sign up</p>
      )}
    </main>
  );
}
