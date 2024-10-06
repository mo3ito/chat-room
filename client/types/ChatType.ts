import { Dispatch, SetStateAction } from "react";
import { Socket } from "socket.io-client";

export type UserType = {
  id: string | undefined;
  name: string;
  typing?: boolean;
};

export type ChatType = {
  id: string;
  content: string;
  type: string;
  user: null | UserType;
};

export type ChatProps = {
  chat: ChatType[];
  user: UserType;
  typing: string[];
};

export type InputChat = {
  setChat: Dispatch<SetStateAction<ChatType[] | []>>;
  user: null | UserType;
  socket: Socket;
};

export type ServerMessageProps = {
  user: {
    id: string;
    content: string;
    type: string;
    user: string | UserType | null;
  };
};
