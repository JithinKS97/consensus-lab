import Node from "../node";
import { INode } from "../../interface";

interface Props {
  nodes: Array<INode>;
}

function Nodes(props: Readonly<Props>) {
  const { nodes } = props;

  return (
    <>
      {nodes.map((node) => (
        <Node key={node.id} node={node}/>
      ))}
    </>
  );
}

export default Nodes;
