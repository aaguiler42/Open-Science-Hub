import NeoVis, {NeovisConfig} from "neovis.js";



import "./App.css";

const config: NeovisConfig = {
  containerId: "viz",
  neo4j: {
    serverUrl: "bolt://2bb21514databases.neo4j.io:7687",
    serverUser: "neo4j",
    serverPassword: "m5-u_fQxwOCH4Ka7-iBIwaUKXSoIkRldnMRP3bRVrmk",
    driverConfig: {
      encrypted: true,
      trust: "TRUST_CUSTOM_CA_SIGNED_CERTIFICATES",
    }
  },
  labels: {
    contributor: {
      label: "name",
    }
  },
  relationships: {},
};

function App() {
  const neoViz = new NeoVis(config);
  neoViz.render();

  return (
    <div>
      <h1>Neo4j React App</h1>
      <div id="viz"></div>
    </div>
  );
}

export default App;
