import { NodeData } from "../types";

export default function List({
  nodes,
  selected,
}: {
  nodes: NodeData[];
  selected?: NodeData | null;
}) {
  console.log(selected);
  return (
    <div
      style={{
        border: "1px solid white",
        textAlign: "left",
        overflowY: "auto",
        height: "100%",
      }}
    >
      {nodes.map((node) => (
        <div
          id={`node-${node.id}`}
          key={node.id}
          style={{
            height: "18rem",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            textAlign: "left",
            backgroundColor:
              selected?.id === node.id
                ? "rgba(255, 255, 255, 0.1)"
                : "transparent",
          }}
        >
          <div style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center"
          }}>

          <div
            style={{
              width: "5rem",
              height: "5rem",
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            {node.person?.image && (
              <img
                src={node.person.image}
                alt={node.person.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
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
          <p
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
          </p>
        </div>
      ))}
    </div>
  );
}
