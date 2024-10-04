import React from "react";

type MessageProps = {
  content: string;
  own: boolean;
};

export default function Message({
  content = "میلاد",
  own = true,
}: MessageProps) {
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
      {content && <span className="text-xl">{content}</span>}
    </p>
  );
}
