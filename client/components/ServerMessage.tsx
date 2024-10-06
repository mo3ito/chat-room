import { ServerMessageProps, UserType } from "@/types/ChatType";
import Image from "next/image";

const ServerMessage = (props: ServerMessageProps) => {
  console.log(props);

  return (
    <div className="flex items-center justify-end gap-x-2 text-white">
      <div className=" rounded-full bg-blue-700  size-9 flex items-center justify-center mr-2">
        {typeof props.user.user === "string" &&
          props.user.user.slice(0, 2).toUpperCase()}
      </div>
      <p className="flex bg-slate-400 rounded-lg text-xl py-2 px-3 ml-2 text-slate-800">
        <span className=" flex bg-transparent">{props.user.content}</span>
      </p>
    </div>
  );
};

export default ServerMessage;
