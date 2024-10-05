import { Dispatch, SetStateAction } from "react";
import { Socket } from "socket.io-client";


export type ChatType = {
  id: string;
  content: string;
  type: string;
  user: null | string;
};

export type ChatProps = {
  chat: ChatType[];
};

export type InputChat = {
  setChat: Dispatch<SetStateAction<ChatType[] | []>>;
  user: null | string;
  socket: Socket;
};
