import { useChat } from "ai/react";
import { useEffect, useRef, useState } from "react";
import { Input } from "./ui/input";
import { useUser } from "@clerk/clerk-react";
import { NodeData } from "../types";
import { useModalContext } from "../contexts/ModalContext";

export default function Search({
  select,
  addNode,
}: {
  select: () => void;
  addNode: (node: NodeData) => void;
}) {
  const { user } = useUser();
  const [showMessages, setShowMessages] = useState(false);
  const { setChatModal } = useModalContext();
  const {
    input,
    setInput,
    handleSubmit: chatSubmit,
    messages,
  } = useChat({
    api: "https://nasa-api-ashen.vercel.app/api/chat",
    initialMessages: [
      {
        role: "assistant",
        content:
          "Hi, I'm MOB, your AI-Powered Manager Onboard. I've realized you have not provided us your information yet. Would you like I help you to create a profile?",
        id: "first",
      },
    ],
    onFinish: (message) => {
      if (message.content.includes("✅")) {
        setTimeout(() => {
          setShowMessages(false);
        }, 1000);
        setTimeout(() => {
          addNode({
            id: "user",
            color: "#fff",
            shape: "circularImage",
            image: user?.imageUrl,
            person: {
              name: user?.firstName + " " + user?.lastName,
              id: "user",
              description: "User",
              level: "intermediate",
              skills: [],
              projects: [],
            },
          });
        }, 1500);
      } else if (message.content.includes("💻")) {
        setTimeout(() => {
          setChatModal(true);
          setShowMessages(false);
        }, 1000);
      } else if (message.content.includes("🚀")) {
        setTimeout(select, 1000);
      }
    },
  });
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!messagesRef.current || !showMessages) return;
    messagesRef.current.scrollTo({
      top: messagesRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, showMessages]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <img src="/octopus.png" alt="" style={{
        position: "absolute",
        transform: "translateY(-100%)",
        width: "9rem",
        left: "-1rem",
      }} />
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
            maxHeight: "min(400px, 80vh)",
            overflowY: "auto",
          }}
          ref={messagesRef}
        >
          {messages
            .filter((m) => m.role !== "system")
            .map((message) => (
              <div
                style={{
                  borderBottom: "1px solid #fff",
                  padding: "1rem 0",
                  color: "#fff",
                  display: "flex",
                  gap: "1rem",
                  textAlign: "left",
                }}
                key={message.id}
              >
                <img
                  style={{
                    width: "2.5em",
                    height: "2.5em",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                  src={message.role === "user" ? user?.imageUrl : "/octopus.png"}
                  alt=""
                />
                <span
                  style={{
                    marginTop: ".5rem",
                  }}
                >
                  {message.content}
                </span>
              </div>
            ))}
        </div>
      )}
      <form onSubmit={chatSubmit}>
        <Input
          value={input}
          onChange={handleChange}
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
          placeholder="👋  Interact with me!"
        />
      </form>
    </div>
  );
}
