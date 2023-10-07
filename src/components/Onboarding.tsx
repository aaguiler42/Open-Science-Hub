import EditorAI from "./EditorAI";
import Modal from "./Modal";

export default function Onboarding(){
  return (<Modal
    showX={false}
    width="80vw"
    height="80vh"
  >
      <h1>Onboarding</h1>
      <EditorAI defaultValue=""/>
  </Modal>)
}