import { NodeData } from "../../types";
import { Badge } from "../ui/badge";

export default function ProjectElement({
  id,
  node,
  selected = false,
  onClick,
}: {
  id: string;
  node: NodeData;
  selected?: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      id={id}
      key={node.id}
      onClick={onClick}
      style={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        textAlign: "left",
        backgroundColor: selected ? "rgba(255, 255, 255, 0.1)" : "transparent",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "15rem",
            overflow: "hidden",
          }}
        >
          {node.project && (
            <img
              src={node.project.image}
              alt={node.project.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          )}
        </div>
        <div>
          <h3
            style={{
              fontWeight: "bold",
            }}
          >
            {node.label}
          </h3>
          <span>Guapo e inteligente</span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          marginTop: ".5rem",
        }}
      >
        <Badge>AI</Badge>
        <Badge>Data</Badge>
      </div>
      {/* <p
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: "20px",
              whiteSpace: "nowrap",
            }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod at
            ducimus officia sed, nihil dicta voluptatum blanditiis, voluptatem
            ad voluptate odit, nemo similique consequuntur a atque molestiae
            quaerat alias ipsam!
          </p> */}
    </div>
  );
}