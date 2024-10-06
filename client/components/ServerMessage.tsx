import Image from "next/image";

type ServerMessageProps = {
  user: string;
  content: string;
};

const ServerMessage = ({ user, content }: ServerMessageProps) => {
  return (
    <div className="flex items-center justify-end gap-x-2 text-white">
      <div className=" rounded-full bg-blue-700  size-9 flex items-center justify-center mr-2">
        {user.slice(0, 2).toUpperCase()}
      </div>
      <p className="flex bg-slate-400 rounded-lg text-xl py-2 px-3 ml-2 text-slate-800">
        <span className=" flex bg-transparent">{content}</span>
      </p>
    </div>
  );
};

export default ServerMessage;
