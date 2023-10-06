// import vis from "vis-network";
import {
  Network,
  Options,
  Edge,
  Node,
  Data
} from "vis-network/standalone/esm/vis-network";

import "./App.css";
import { useEffect, useState } from "react";

const nodes: Node[] = [
  { id: 1, label: "Node 1" },
  { id: 2, label: "Node 2" },
  { id: 3, label: "Node 3" },
  { id: 4, label: "Node 4" },
  { id: 5, label: "Node 5" },
];

// create an array with edges
const edges: Edge[] = [
  { from: 1, to: 3 },
  { from: 1, to: 2 },
  { from: 2, to: 4 },
  { from: 2, to: 5 },
];

const data: Data = {
  nodes: nodes,
  edges: edges,
};

function App() {
  const [selected, setSelected] = useState<Node | null>(null);

  useEffect(() => {
    const container = document.getElementById("mynetwork");
    const options: Options = {
      clickToUse: true,
      nodes: {
        shape: 'circle',
        color: {
          background: "#ffffff",
          border: "#1c1c1c",
          highlight: {
            background: "#ffffff",
            border: "#000000",
          },
          hover: {
            background: "#ffffff",
            border: "#000000",
          },
        }
      },
      edges: {
        color: {
          color: "#8c8c8c",
          highlight: "#000000",
          hover: "#000000",
        }
      }
    };
    const network = new Network(container, data, options);


    network.on("click", function (params) {
      console.log(params)
      if (params.nodes.length) setSelected(nodes?.find(({id}) => id ===params.nodes[0]) ?? null)
    })

    const obj = {
      viewPosition: network.getViewPosition(),
      scale: network.getScale(),
      positions: network.getPositions(),
    }
    

  }, []);
  console.log(selected)
  return (
    <div
      style={{
      }}
    >
      <h1>Neo4j React App</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 4fr",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <div style={{
          border: "1px solid white",
        }}></div>
        <div id="mynetwork" style={{
          height: "80vh",
          border: "1px solid white",
        }}></div>
      </div>
    </div>
  );
}

export default App;
