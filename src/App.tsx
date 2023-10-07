// import vis from "vis-network";
import "./App.css";
import { useState } from "react";

import { nodes, edges } from "./data/graph";
import Graph from "./components/Graph";
import { NodeData } from "./types";

function App() {
  const [selected, setSelected] = useState<NodeData | null>(null);

  return (
    <div style={{
    }}>
      <nav style={{
        display: "flex",
        height: "4vh",
        padding: ".5rem",
        borderBottom: "1px solid #fff"
      }}>
        <span>OSH</span>

      <h1>Neo4j React App</h1>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      </nav>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 4fr",
          height: "92vh",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            border: "1px solid white",
            textAlign: "left",
            overflowY: "auto",
            height: "100%"
          }}
        >
          {nodes.map((node) => (
            <button key={node.id} style={{
              height: "5rem",
              display: "flex",
              flexDirection: "column",
              alignItems:"center",
              width: "100%",
              textAlign: "left",
            }}
            onClick={() => setSelected(node)}
            >
              <div style={{
                width: "100%",
                height: "70%",
                backgroundColor: "red",
              }}></div>
              <h3 style={{
                fontWeight: "bold",
              }}>{node.label}</h3>
              <p style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: "20px",
                whiteSpace: "nowrap",
              }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod at ducimus officia sed, nihil dicta voluptatum blanditiis, voluptatem ad voluptate odit, nemo similique consequuntur a atque molestiae quaerat alias ipsam!</p>
            </button>
          ))}
        </div>
        <Graph height="96vh" nodes={nodes} edges={edges} />
      </div>
    </div>
  );
}

export default App;
