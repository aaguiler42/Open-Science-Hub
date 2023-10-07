import { Editor } from "novel";

export default function EditorAI(props: {
  defaultValue: string,
}){
  return (<>
    <Editor
      defaultValue={props.defaultValue}
      completionApi="https://nasa-api-ashen.vercel.app/api/generate"
    />
  </>)
}