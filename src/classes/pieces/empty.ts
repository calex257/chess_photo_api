import { Board } from "../board";
import { Piece } from "../piece";
import { Position } from "../position";

export class Empty extends Piece {
    protected _type: string = "E";
    public getMoves(board: Board): Position[] {
        return [];
    }
}