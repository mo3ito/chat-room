import { ChatType, InputChat } from "@/types/ChatType";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Input({ setChat, user, socket }: InputChat) {
  const [input, setInput] = useState<string>("");
  const uploadInputRef = useRef<HTMLInputElement | null>(null);
  const typingTimeout = useRef<NodeJS.Timeout | null>(null);

  const sendMessage = () => {
    const msg = { id: uuidv4(), content: input, type: "text", user };
    socket.emit("send-message", msg);
    socket.emit("user-typing", { user: user?.name, typing: false });
    setChat((prev: ChatType[]) => [...prev, msg]);
    setInput("");
  };

  console.log(user);

  const sendFile = () => {
    uploadInputRef.current?.click();
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (
      (file && file.type === "image/jpeg") ||
      file?.type === "image/jpg" ||
      file?.type === "image/png"
    ) {
      const img = URL.createObjectURL(file);
      console.log(img);
      const msg = { id: uuidv4(), content: img, type: "image", user };
      socket.emit("send-message", msg);
      setChat((prev: ChatType[]) => [...prev, msg]);
    } else {
      alert("فرمت عکس فقط باید jpeg , jpg یا png باشد");
    }
  };

  const userTyping = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    socket.emit("user-typing", {
      user: user?.name,
      typing: true,
    });

    if (typingTimeout.current) {
      clearTimeout(typingTimeout.current);
    }

    typingTimeout.current = setTimeout(() => {
      socket.emit("user-typing", {
        user: user?.name,
        typing: false,
      });
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (typingTimeout.current) {
        clearTimeout(typingTimeout.current);
      }
    };
  }, []);

  return (
    <div className="container px-3 flex items-center justify-center">
      <section className=" w-full sm:w-10/12 md:w-9/12 lg:w-10/12 xl:w-2/3 2xl:w-2/3   my-6 h-max flex items-center justify-center gap-x-4">
        {!!input ? (
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
        ) : (
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
              <path d="M12 2.58582L18.2071 8.79292L16.7929 10.2071L13 6.41424V16H11V6.41424L7.20711 10.2071L5.79289 8.79292L12 2.58582ZM3 18V14H5V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V14H21V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18Z"></path>
            </svg>
          </button>
        )}
        <input
          className="hidden"
          type="file"
          ref={uploadInputRef}
          onChange={handleFileUpload}
        />

        <input
          value={input}
          onChange={userTyping}
          onKeyDown={(event) => event.key === "Enter" && sendMessage()}
          placeholder="پیام را وارد کنید"
          type="text"
          className=" w-10/12 bg-gradient-to-tr from-blue-600 to-blue-500  rounded-lg text-white px-3 min-h-12 max-h-44 outline-none placeholder-white"
        />
      </section>
    </div>
  );
}
