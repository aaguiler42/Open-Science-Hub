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
  const projects = nodes.filter((node) => "project" in node && node.project);
  const people = nodes.filter((node) => "person" in node && node.person);

  return (
    <div
      style={{
        border: "1px solid white",
        textAlign: "left",
        overflowY: "auto",
        height: "100%",
        paddingBlock: "1rem",
      }}
    >
      <div style={{
        borderBottom: "1px solid white",
        marginBottom: "1rem"
      }}>
      <h2 style={{textAlign: 'center'}}>Projects</h2>
      {projects.map((node) => (
        <ProjectElement
          id={`node-${node.id}`}
          key={node.id}
          node={node}
          selected={selected?.id === node.id}
          onClick={() => setSelected(node)}
        />
      ))}
</div>
      <h2 style={{textAlign: 'center'}}>People</h2>
      {people.map((node) => (
        <PersonElement
          id={`node-${node.id}`}
          key={node.id}
          node={node}
          selected={selected?.id === node.id}
          onClick={() => setSelected(node)}
        />
      ))}
    </div>
  );
}
