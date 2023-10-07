function CloseX(props: { onClose?: () => void }) {
  return (<div style={{
    position: "absolute",
    top: "1rem",
    right: "1.8rem",
    cursor: "pointer",
    fontSize: "1.5rem"
    }}>
    <div style={{
    }} onClick={props.onClose}><strong>x</strong></div>
  </div>);
}

export default function Modal(props: {
  showX: boolean;
  height?: string;
  width?: string;
  children: React.ReactNode;
  onClose?: () => void;
}) {
  return (<>
    <div style={{
      height: "100vh",
      width: "100vw",
      position: "absolute",
      top: 0,
      left: 0,
      backgroundColor: "rgba(0,0,0,.5)",
      zIndex: 10,
    }}></div>
    <div style={{
      height: props.height || "90vh",
      width: props.width || "90vw",
      position: "fixed",
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
      backgroundColor: "rgba(250,250,250)",
      borderRadius: "1rem",   
      zIndex: 100,
      color: "#000",
    }}>
      {props.showX && <CloseX onClose={props.onClose} />}
      {props.children}
    </div>
  </>);
}