import { NodeData } from "../types"

export default function List({ nodes }: {nodes: NodeData[]}) {
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
            <div key={node.id} style={{
              height: "18rem",
              display: "flex",
              flexDirection: "column",
              alignItems:"center",
              width: "100%",
              textAlign: "left",
            }}
            >
              <div style={{
                width: "100%",
                height: "70%",
                backgroundColor: "red",
              }} />
              <h3 style={{
                fontWeight: "bold",
              }}>{node.label}</h3>
              <p style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: "20px",
                whiteSpace: "nowrap",
              }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod at ducimus officia sed, nihil dicta voluptatum blanditiis, voluptatem ad voluptate odit, nemo similique consequuntur a atque molestiae quaerat alias ipsam!</p>
            </div>
          ))}
        </div>
        )
}