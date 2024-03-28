import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { INode } from "../../interface";

interface Props {
  node: INode;
}

function Node(props: Readonly<Props>) {
  const { node } = props;
  const size = 20;

  const shiftedPos = {
    x: node.pos.x - size / 2,
    y: node.pos.y - size / 2,
  }

  return (
    <motion.div style={{ position:"absolute" }} animate={{ ...shiftedPos }}>
      <Box
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: node.color,
          borderRadius: "100%",
        }}
      ></Box>
    </motion.div>
  );
}

export default Node;
