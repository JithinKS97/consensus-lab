import { Pos } from "../interface";

export const generateInitialPositionsOfNodes = (noOfNodes:number) => {  
    const initialPositions:Array<Pos> = [];

    const center = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
    }

    const radius = 200;

    for (let i = 0; i < noOfNodes; i++) {
        const angle = (i / noOfNodes) * 2 * Math.PI;

        const x = center.x + radius * Math.cos(angle);
        const y = center.y + radius * Math.sin(angle);

        initialPositions.push({ x, y });
    }

    return initialPositions;
}