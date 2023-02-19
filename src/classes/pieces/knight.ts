import { Board } from "../board";
import { Piece } from "../piece";
import { Position } from "../position";
export class Knight extends Piece {
    protected _type: string = "N";
    public getMoves(board: Board): Position[] {
        const pos:Position[] = [];

        return pos;
    }
}