import { useEffect, useState } from "react";
import Nodes from "../nodes";
import Node from "../nodes/node";
import { defaultSenderNode, getNodes, getSenderNode } from "../../utils"
import { INode, IMessage } from "../../interface";
import Messages from "../../components/messages";
import { Button } from "@chakra-ui/react";

function RoundRobin() {
  const [nodes, setNodes] = useState<Array<INode>>([]);
  const [senderNode, setSenderNode] = useState<INode>(defaultSenderNode);
  const [messages, setMessages] = useState<Array<IMessage>>([]);

  useEffect(() => {
    const nodes = getNodes(10);
    setNodes(nodes);
    const senderNode = getSenderNode();
    setSenderNode(senderNode);
  }, []);

  const sendMessage = () => {
    const newMessage: IMessage = {
      from: senderNode.id,
      to: [1],
      message: "",
      id: Math.random().toString(36).substring(7)
    }
    setMessages([...messages, newMessage]);
  }

  return (
    <>
      <Messages
        messages={messages}
        senderNode={senderNode}
        nodes={nodes}
      />
      <Nodes
        nodes={nodes}
      />
      <Node
        node={senderNode}
      />
      <Button onClick={sendMessage}>Send</Button>
    </>
  );
}

export default RoundRobin;
