import { Board } from "./board";
import { Position } from "./position";

export abstract class Piece {
    protected abstract _type: string;
    protected _position: Position;
    protected _color: string;
    constructor(color: string, position: Position) {
        this._position = position;
        this._color = color;
    }
    public abstract getMoves(board: Board): Array<Position>;
    public get position(): Position {
        return this._position;
    }
    public set position(position: Position) {
        this._position = position;
    }
    public get type(): string {
        return this._type;
    }
    public get color(): string {
        return this._color;
    }
}