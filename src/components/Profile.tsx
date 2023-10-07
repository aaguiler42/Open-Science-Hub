import { useState } from "react";
import Modal from "./Modal";
import EditorAI from "./EditorAI";

export default function Profile(props:{
  onClose: () => void;
}){
  console.log("render Profile")
  const [chatOpen, setChatOpen] = useState(false);
  return (<Modal
    showX={true}
    onClose={props.onClose}
    width="80vw"
    height="80vh"
  >
      <h1>User Profile</h1>
      {/* TODO: substituir por foto de perfil de usuario */}
      <div style={{
        height: "90%",
        width: "90%",
        backgroundColor: "#dda",
      }} onClick={
        () => {setChatOpen(true)}
      }></div>
      {chatOpen && <Modal 
        showX={false}
        height="73vh"
        width="73vw"
      >
        <div style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          backgroundColor: "white",
          paddingBlock: "1.5rem",
          borderRadius: "1rem",
        }}>
          <h2 style={{
            textAlign: "center",
            margin: "1rem",
            fontSize: "1.3rem",
            fontWeight: "500"
          }}>Making a proposal for $$NAME$$</h2>
          <EditorAI defaultValue="" className="relative min-h-[500px] w-full max-w-screen-lg border-stone-200 bg-white sm:mb-[calc(20vh)] sm:rounded-lg sm:border sm:shadow-lg editooor"/>
          <button style={{
            textAlign: "center",
            fontSize: "1.3rem",
            fontWeight: "500"
          }}>Send Message</button>
        </div>
      </Modal>}
  </Modal>)
}