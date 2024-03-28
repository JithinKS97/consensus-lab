import Node from "../node";
import { Pos } from "../../interface";

interface Props {
  pos: Array<Pos>;
  color?: string;
}

function Nodes(props: Readonly<Props>) {
  const { pos, color } = props;

  return (
    <>
      {pos.map((pos, index) => (
        <Node color={color} key={index} pos={pos} />
      ))}
    </>
  );
}

export default Nodes;
