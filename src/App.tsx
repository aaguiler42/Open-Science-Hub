// import vis from "vis-network";
import "./App.css";
import { useState } from "react";

import { nodes, edges } from "./data/graph";
import Graph from "./components/Graph";
import { NodeData } from "./types";
import List from "./components/List";
import Nav from "./components/Nav";

function App() {
  const [selected, setSelected] = useState<NodeData | null>(null);

  return (
    <div style={{
      height: "100vh",
    }}>
      <Nav />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 4fr",
          overflow: "hidden",
          padding: "2rem",
          height: "96vh"
        }}
      >
        <List nodes={nodes} />
        <Graph height="90vh" nodes={nodes} edges={edges} />
      </div>
    </div>
  );
}

export default App;
