export interface IPos {
    x: number;
    y: number;
}

export interface INode {
    pos: IPos;
    color: string;
    id: number;
    state: string;
}

export interface IMessage {
    from: number;
    to: number[];
    message: string;
    id: string;
}