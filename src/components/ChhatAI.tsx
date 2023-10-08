import { useModalContext } from "../contexts/ModalContext";
import EditorAI from "./EditorAI"
import Modal from "./Modal"

export default function ChhatAI() {
  const { setChatModal } = useModalContext();

  return (<Modal 
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
          }}>Making a proposal for $$PROJECT NAME$$</h2>
          <EditorAI defaultValue="" className="relative min-h-[500px] w-full max-w-screen-lg border-stone-200 bg-white sm:mb-[calc(20vh)] sm:rounded-lg sm:border sm:shadow-lg editooor"/>
          <button style={{
            textAlign: "center",
            fontSize: "1.3rem",
            fontWeight: "500"
          }} onClick={() => {setChatModal(false)}}>Send Proposal</button>
        </div>
      </Modal>
      )}