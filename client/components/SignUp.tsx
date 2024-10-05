import React, { Dispatch, SetStateAction, useState } from "react";
import { Socket } from "socket.io-client";

type SignUpProps = {
  socket: Socket;
  user: string | null;
};

export default function SignUp({ socket, user }: SignUpProps) {
  const [input, setInput] = useState("");
  return (
    <div className="w-64 h-max">
      <div className="grid grid-rows-4 text-center gap-2 p-2 bg-gradient-to-tr from-blue-600 to-blue-500 rounded-lg text-white">
        <h1 className="text-4xl ">اتاق چت</h1>
        <h2 className=" text-sm">نام خود را وارد کنید</h2>
        <input
          type="text"
          value={input}
          placeholder="..."
          onChange={(event) => setInput(event.target.value)}
          className="h-12 outline-none bg-white text-slate-700 rounded-lg text-center"
        />
        <button
          disabled={!user}
          className={`${
            user ? "bg-sky-400" : "bg-slate-400"
          } font-bold rounded-lg`}
        >
          وارد شدن
        </button>
      </div>
    </div>
  );
}
