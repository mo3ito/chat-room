import { UserType } from "@/types/ChatType";
import React from "react";

type MessageProps = {
  content: string;
  own: boolean;
  type: string;
  user: UserType | null;
};

export default function Message({ content, own, type, user }: MessageProps) {
  console.log(user);

  return (
    <div
      className={`${
        own ? "self-start" : "self-end"
      }  flex items-center max-w-xs sm:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl break-words `}
    >
      {!own && (
        <div className=" bg-blue-700 size-9 rounded-full flex items-center justify-center flex-shrink-0 text-white self-end">
          {user?.name?.slice(0, 2).toUpperCase()}
        </div>
      )}
      <p
        className={`${
          own ? "bg-sky-400 text-white " : "bg-slate-400 text-slate-800 "
        } ${content && "py-2 px-3"} flex   h-max text-right mx-2 rounded-lg`}
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
