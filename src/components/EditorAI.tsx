import { Editor } from "novel";

export default function EditorAI(props: {
  defaultValue: string
  className?: string
}){
  return (<div style={{
    margin: "auto",
    width: "1000px",
  }}>
    <Editor
      defaultValue={props.defaultValue}
      completionApi="https://nasa-api-ashen.vercel.app/api/generate"
      className={props.className}
    />
  </div>)
}