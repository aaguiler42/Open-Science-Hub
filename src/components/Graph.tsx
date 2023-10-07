import {
  Network,
  Edge,
} from "vis-network/standalone/esm/vis-network";

import { useEffect, useRef } from "react";
import { NodeData } from "../types";
import { options } from "../data/graph";

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
  console.log(network.current?.getSeed())

  useEffect(() => {
    const container = document.getElementById("mynetwork");
    if (!container) return;
    console.log(edges)

    const data = {
      nodes,
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
