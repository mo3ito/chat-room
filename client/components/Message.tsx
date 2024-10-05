import React from "react";

type MessageProps = {
  content: string;
  own: boolean;
  type: string;
};

export default function Message({ content, own, type }: MessageProps) {
  console.log("type:", type);

  return (
    <p
      className={`${
        own
          ? "bg-sky-400 text-white self-start"
          : "bg-slate-400 text-slate-800 self-end"
      } ${
        content && "py-2 px-6"
      } flex  w-max max-w-4xl h-max text-right mx-4 rounded-lg`}
    >
      {content && (
        <span className="text-xl">
          {type === "text" ? content : <img className="size-44" src={content} alt="image" />}
        </span>
      )}
    </p>
  );
}
