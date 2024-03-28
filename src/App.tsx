import { useEffect, useState } from "react";
import Nodes from "./components/nodes";
import Node from "./components/node";
import { generateInitialPositionsOfNodes } from "./utils";
import { Pos } from "./interface";

function App() {
  const [initialPositions, setInitialPositions] = useState<Array<Pos>>([]);

  useEffect(() => {
    const _initialPositions = generateInitialPositionsOfNodes(10);
    setInitialPositions(_initialPositions);
  }, []);

  return (
    <>
      <Nodes color="#81E6D9" pos={initialPositions} />
      <Node
        color="#ED64A6"
        pos={{ x: window.innerWidth / 2, y: window.innerHeight / 2 }}
      />
    </>
  );
}

export default App;
