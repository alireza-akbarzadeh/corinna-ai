"use client";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";

type ChatMessage = {
  message: string;
  id: string;
  role: "assistant" | "user" | null;
  createdAt: Date;
  seen: boolean;
};

type ChatContextProps = {
  realtime: boolean;
  setRealtime: Dispatch<SetStateAction<boolean>>;
  chatRoom: string | undefined;
  setChatRoom: Dispatch<SetStateAction<string | undefined>>;
  chats: ChatMessage[];
  setChats: Dispatch<SetStateAction<ChatMessage[]>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

const ChatInitialValues: ChatContextProps = {
  chatRoom: undefined,
  setChatRoom: () => undefined,
  chats: [],
  setChats: () => undefined,
  loading: false,
  setLoading: () => undefined,
  realtime: false,
  setRealtime: () => undefined,
};

const ChatContext = createContext<ChatContextProps | undefined>(undefined);

export function ChatProvider(props: PropsWithChildren) {
  const { children } = props;
  const [chats, setChats] = useState<ChatMessage[]>(ChatInitialValues.chats);
  const [loading, setLoading] = useState<boolean>(ChatInitialValues.loading);
  const [chatRoom, setChatRoom] = useState<string | undefined>(
    ChatInitialValues.chatRoom
  );
  const [realtime, setRealtime] = useState<boolean>(ChatInitialValues.realtime);

  const values = useMemo(
    () => ({
      chats,
      setChats,
      loading,
      setLoading,
      chatRoom,
      setChatRoom,
      realtime,
      setRealtime,
    }),
    [chats, loading, chatRoom, realtime]
  );

  return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>;
}

export const useChatContext = (): ChatContextProps => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChatContext must be used within a ChatProvider");
  }
  return context;
};
