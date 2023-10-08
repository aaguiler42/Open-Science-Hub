import { useLayoutEffect, useRef, useState } from "react";
import { Input } from "./ui/input";
import { useUser } from "@clerk/clerk-react";

interface Message {
  id: string;
  text: string;
  author: string;
}

export default function Search() {
  const { user } = useUser();
  const input = useRef<HTMLInputElement>(null);
  useLayoutEffect(() => {
    if (!input.current) return;

    const listener = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        setMessages((messages) => {
          if (!input.current) return messages;
          const newMessages = [
            ...messages,
            {
              id: Math.random().toString(),
              text: input.current.value,
              author: "You",
            },
          ];
          input.current.value = "";
          return newMessages;
        });
      }
    };

    input.current.addEventListener("keydown", listener);
    return () => {
      input.current?.removeEventListener("keydown", listener); // eslint-disable-line
    };
  }, []);

  const [showMessages, setShowMessages] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      author: "You",
      id: "1",
      text: "Hi, I'm John Doe",
    },
    {
      author: "AI",
      id: "2",
      text: "Hi, Nice to meet you",
    },
  ]);

  return (
    <div style={{ position: "relative", width: "100%" }}>
      {showMessages && messages.length > 0 && (
        <div
          style={{
            position: "absolute",
            transform: "translateY(-100%)",
            top: "0",
            width: "100%",
            background: "#111",
            border: "1px solid #fff",
            borderTopLeftRadius: "4px",
            borderTopRightRadius: "4px",
            paddingInline: "1rem",
            zIndex: 10,
            maxHeight: "300px",
            overflowY: "auto",
          }}
        >
          {messages.map((message) => (
            <div
              style={{
                borderBottom: "1px solid #fff",
                padding: "0.5rem 0",
                flexDirection: message.author === "You" ? "row-reverse" : "row",
                color: "#fff",
                display: 'flex',
                alignItems: 'center',
                gap: '.5em'
              }}
              key={message.id}
            >
              <img style={{
                width: "2.5em",
                height: "2.5em",
                borderRadius: "50%"
              }} src={user?.imageUrl} alt="" />
              <span>{message.text}</span>
              <span style={{
                marginRight: message.author === "You" ? 'auto' : undefined,
                marginLeft: message.author === "You" ? undefined : 'auto',
                }}>{message.author}</span>
            </div>
          ))}
        </div>
      )}
      <Input
        ref={input}
        onFocus={() => setShowMessages(true)}
        onBlur={() => setShowMessages(false)}
        style={{
          width: "100%",
          border: "1px solid #fff",
          borderRadius: "4px",
          borderTopLeftRadius: showMessages ? "0" : "4px",
          borderTopRightRadius: showMessages ? "0" : "4px",
          fontSize: "1.1rem",
          boxShadow: "0 0 10px 2px #fff",
        }}
        placeholder="🔎  What are you looking for?"
      />
    </div>
  );
}
