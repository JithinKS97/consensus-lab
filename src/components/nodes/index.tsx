import Node from "../node";
import { useEffect, useState } from "react";
import { Pos } from "../../interface";
import { generateInitialPositions } from "./initial-pos";

interface Props {
  nos: number;
}

function Nodes(props: Readonly<Props>) {
  const { nos } = props;
  const [initialPositions, setInitialPositions] = useState<Array<Pos>>([]);

  useEffect(() => {
    const _initialPositions = generateInitialPositions(nos);
    setInitialPositions(_initialPositions);
  }, [nos]);

  return (
    <>
      {initialPositions.map((pos, index) => (
        <Node key={index} pos={pos} />
      ))}
    </>
  );
}

export default Nodes;
