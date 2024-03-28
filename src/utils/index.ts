import { INode } from "../interface";

export const defaultSenderNode = { pos: { x: 0, y: 0 }, color: "", id: 0 };

export const getSenderNode = () => {
    const center = {
        x: window.innerWidth / 2 - 5,
        y: window.innerHeight / 2 - 5,
    }

    const initialConfig = {
        pos: center,
        color: "#ED64A6",
        id: 0,
    }

    return initialConfig;

}

export const getNodes = (noOfNodes:number) => {  
    const nodes:Array<INode> = [];

    const center = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
    }

    const radius = 200;

    for (let i = 0; i < noOfNodes; i++) {
        const angle = (i / noOfNodes) * 2 * Math.PI;

        const x = center.x + radius * Math.cos(angle);
        const y = center.y + radius * Math.sin(angle);

        const pos = { x, y }
        const initialConfig = {
            pos,
            color: "#81E6D9",
            id: i + 1,
        }

        nodes.push(initialConfig);
    }

    return nodes;
}