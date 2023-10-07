import { Editor } from "novel";

export default function Onboarding(){
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
      height: "90vh",
      width: "90vw",
      position: "absolute",
      top: "5vh",
      left: "5vw",
      backgroundColor: "rgba(250,250,250)",
      borderRadius: "1rem",
      zIndex: 100,
      color: "#000",
    }}>
      <h1>Onboarding</h1>
      <Editor
        defaultValue={""}
      />
    </div>
  </>)
}