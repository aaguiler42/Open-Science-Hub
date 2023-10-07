import {
  Network,
  Options,
  Edge,
} from "vis-network/standalone/esm/vis-network";

import { useEffect, useRef } from "react";
import { NodeData } from "../types";

export default function Graph({
  height = "50rem",
  nodes,
  edges,
  selected,
  setSelected
}: {
  height?: string,
  nodes: NodeData[];
  edges: Edge[];
  selected?: NodeData | null;
  setSelected: (node: NodeData | null) => void;
}) {
  const network = useRef<Network| null>(null)

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
      nodes: nodes.map(node => {
        if ('person' in node && node.person) {
          return {...node, shape: 'circularImage', image: 'https://thispersondoesnotexist.com/' }
        }
        return node
      }),
      edges,
    };
    network.current = new Network(container, data, options);

    network.current.on("click", function (params) {
      if (!params.nodes.length) return

      const node = nodes?.find(({ id }) => id === params.nodes[0]) ?? null
      setSelected(node);

      const el = document.querySelector(`#node-${node?.id}`);
      console.log(el)
      const anchor = document.createElement("a");
      anchor.href = `#node-${node?.id}`
      anchor.click();
      anchor.remove();
    });

    // const obj = {
    //   viewPosition: network.getViewPosition(),
    //   scale: network.getScale(),
    //   positions: network.getPositions(),
    // };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!network.current || !selected?.id) return
    console.log(selected)
    network.current.selectNodes([selected.id])
  }, [selected])

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
