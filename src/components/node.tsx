import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Pos } from "../interface";

interface Props {
  pos: Pos;
}

function Node(props: Readonly<Props>) {
  const { pos } = props;
  const size = 20;

  const shiftedPos = {
    x: pos.x - size / 2,
    y: pos.y - size / 2,
  }

  return (
    <motion.div style={{ position:"absolute" }} animate={{ ...shiftedPos }}>
      <Box
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: "red",
          borderRadius: "100%",
        }}
      ></Box>
    </motion.div>
  );
}

export default Node;
