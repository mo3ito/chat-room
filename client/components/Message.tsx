import { UserType } from "@/types/ChatType";
import React from "react";

type MessageProps = {
  content: string;
  own: boolean;
  type: string;
  user: UserType;
};

export default function Message({ content, own, type, user }: MessageProps) {
  console.log(user);

  return (
    <div
      className={`${own ? "self-start" : "self-end"} w-max flex items-center `}
    >
      {!own && (
        <div className=" bg-slate-400 size-8 rounded-full flex items-center justify-center ">
          {user?.name?.slice(0, 2).toUpperCase()}
        </div>
      )}
      <p
        className={`${
          own ? "bg-sky-400 text-white " : "bg-slate-400 text-slate-800 "
        } ${
          content && "py-2 px-3"
        } flex  w-max max-w-4xl h-max text-right mx-2 rounded-lg`}
      >
        {content && (
          <span className="text-xl">
            {type === "text" ? (
              content
            ) : (
              <img className="size-44" src={content} alt="image" />
            )}
          </span>
        )}
      </p>
    </div>
  );
}
