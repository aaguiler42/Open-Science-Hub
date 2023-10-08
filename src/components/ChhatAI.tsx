import { useModalContext } from "../contexts/ModalContext";
import EditorAI from "./EditorAI"
import Modal from "./Modal"
import { Button } from "./ui/button";

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
          alignItems: "space-between",
          height: "100%",
          padding: '1rem',
          paddingBottom: '2rem',
        }}>

          <h2 style={{
            textAlign: "center",
            margin: "1rem",
            fontSize: "1.3rem",
            fontWeight: "500"
          }}>Make a proposal for Space Exploration Mission II</h2>
          <EditorAI defaultValue="Dear team\,n\n" className="relative min-h-[550px] w-full max-w-screen-lg border-stone-200 bg-white sm:mb-[calc(20vh)] sm:rounded-lg sm:border sm:shadow-lg editor"/>
          <Button style={{
            textAlign: "center",
            fontSize: "1.3rem",
            fontWeight: "500",
            width: "fit-content",
            justifySelf: "center",
            marginInline: "auto",
            marginTop: "1rem",
            borderRadius: "4px",
          }} onClick={() => {
            setChatModal(false)
            }}>Send Proposal</Button>
        </div>
        </Modal>
      )}