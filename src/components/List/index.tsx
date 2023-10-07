import { NodeData } from "../../types";
import PersonElement from "./PersonElement";
import ProjectElement from "./ProjectElement";

export default function List({
  nodes,
  selected,
  setSelected,
}: {
  nodes: NodeData[];
  selected?: NodeData | null;
  setSelected: (node: NodeData | null) => void;
}) {
  return (
    <div
      style={{
        border: "1px solid white",
        textAlign: "left",
        overflowY: "auto",
        height: "100%",
      }}
    >
      {nodes.map((node) => {
        if ("person" in node && node.person) {
          return (
            <PersonElement
              id={`node-${node.id}`}
              key={node.id}
              node={node}
              selected={selected?.id === node.id}
              onClick={() => setSelected(node)}
            />
          );
        }
        if ("project" in node && node.project) {
          return (
            <ProjectElement
              id={`node-${node.id}`}
              key={node.id}
              node={node}
              selected={selected?.id === node.id}
              onClick={() => setSelected(node)}
            />
          );
          }
      })}
    </div>
  );
}
