import { IMessage, INode } from "../../interface";

interface Props {
  messages: Array<IMessage>;
  senderNode: INode;
  nodes: Array<INode>;
}

export default function Messages(props: Props) {
  console.log(props)
  return (
    <div></div>
  )
}
