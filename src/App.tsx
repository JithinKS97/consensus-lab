import { useEffect, useState } from "react";
import Nodes from "./components/nodes";
import Node from "./components/node";
import { getNodes, getSenderNode } from "./utils";
import { INode } from "./interface";

function App() {
  const [nodes, setNodes] = useState<Array<INode>>([]);
  const [senderNode, setSenderNode] = useState<INode>({ pos: { x: 0, y: 0 }, color: "", id: 0 });

  useEffect(() => {
    const nodes = getNodes(10);
    setNodes(nodes);
    const senderNode = getSenderNode();
    setSenderNode(senderNode);
  }, []);

  return (
    <>
      <Nodes
        nodes={nodes}
      />
      <Node
        node={senderNode}
      />
    </>
  );
}

export default App;
