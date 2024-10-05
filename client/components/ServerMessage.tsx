import Image from "next/image";

type ServerMessageProps = {
    user:string;
    content: string
}

const ServerMessage = ({user , content}: ServerMessageProps) => {
  
    
  return (
    <p className="px-1 md:px-6 py-1 flex">
      <span className="text-xl md:text-3xl text-white flex bg-transparent">
        {content}
      </span>
    </p>
  );
};

export default ServerMessage;
