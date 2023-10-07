// import vis from "vis-network";
import "./App.css";
import { useState } from "react";
import { ClerkProvider } from "@clerk/clerk-react";
import { Route } from "wouter";

const clerk_pub_key =
  "pk_test_bWFqb3ItcGVnYXN1cy04My5jbGVyay5hY2NvdW50cy5kZXYk";

import { nodes, edges } from "./data/graph";
import Graph from "./components/Graph";
import { NodeData } from "./types";
import Onboarding from "./components/Onboarding";
import List from "./components/List";
import Nav from "./components/Nav";
import Filters from "./components/Filters";

function App() {
  const [selected, setSelected] = useState<NodeData | null>(null);

  return (
    <ClerkProvider publishableKey={clerk_pub_key}>
      <Route path="/onboarding">
        <Onboarding />
      </Route>
      <div
        style={{
          height: "100vh",
        }}
      >
        <Nav />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 4fr",
            overflow: "hidden",
            padding: "2rem",
            height: "96vh",
          }}
        >
          <List nodes={nodes} selected={selected} setSelected={setSelected} />
          <div
            style={{
              height: "90vh",
              position: "relative",
              backgroundImage: "url(/space.gif)",
              backgroundSize: "50%",
              backgroundPosition: "left 0 top 22px"
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "1rem",
                left: "1rem",
                zIndex: 10,
              }}
            >
              <Filters />
            </div>
            <Graph
              height="90vh"
              nodes={nodes}
              edges={edges}
              selected={selected}
              setSelected={setSelected}
            />
          </div>
        </div>
      </div>
    </ClerkProvider>
  );
}

export default App;
