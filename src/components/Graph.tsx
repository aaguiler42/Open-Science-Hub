import {
  Network,
  Options,
  Edge,
} from "vis-network/standalone/esm/vis-network";

import { useEffect, useState } from "react";
import { NodeData } from "../types";

export default function Graph({
  height = "50rem",
  nodes,
  edges,
}: {
  height?: string,
  nodes: NodeData[];
  edges: Edge[];
}) {
  const [selected, setSelected] = useState<NodeData | null>(null);

  useEffect(() => {
    const container = document.getElementById("mynetwork");
    if (!container) return;

    const options: Options = {
      clickToUse: true,
      nodes: {
        shape: "circle",
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
        },
      },
      edges: {
        color: {
          color: "#8c8c8c",
          highlight: "#000000",
          hover: "#000000",
        },
      },
    };
    const data = {
      nodes,
      edges,
    };
    const network = new Network(container, data, options);

    network.on("click", function (params) {
      console.log(params);
      if (params.nodes.length)
        setSelected(nodes?.find(({ id }) => id === params.nodes[0]) ?? null);
    });

    const obj = {
      viewPosition: network.getViewPosition(),
      scale: network.getScale(),
      positions: network.getPositions(),
    };
  }, []);

  return (
    <div
      id="mynetwork"
      style={{
        height,
        border: "1px solid white",
      }}
    ></div>
  );
}
