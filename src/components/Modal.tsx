function CloseX(props: { onClose?: () => void }) {
  return (<div style={{
    position: "absolute",
    top: "1rem",
    right: "1.8rem",
    cursor: "pointer",
    fontSize: "1.5rem",
    padding: "1rem",
  }} onClick={props.onClose}>
    <strong>x</strong>
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
      backgroundColor: "rgb(5, 5, 5)",
      borderRadius: "0.5rem",   
      zIndex: 100,
      color: "#ddd",
      boxShadow: "0 0 1rem rgba(253,253,253,.8)",
    }}>
      {props.showX && <CloseX onClose={props.onClose} />}
      {props.children}
    </div>
  </>);
}