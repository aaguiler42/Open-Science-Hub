import Modal from "./Modal";

export default function Stats(props:{
  onClose: () => void;
}){
  return (<Modal
    showX={true}
    onClose={props.onClose}
    width="80vw"
    height="80vh"
  >
      <h1>Project Stats</h1>
      {/* TODO: substituir por foto de perfil de usuario */}
      <div style={{
        height: "90%",
        width: "90%",
        backgroundColor: "#dda",
      }}></div>
  </Modal>)
}