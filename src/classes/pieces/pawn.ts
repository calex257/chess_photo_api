import { Board } from "../board";
import { Piece } from "../piece";
import { Position } from "../position";
export class Pawn extends Piece {
    protected _type: string = "P";
    private _hasBeenMoved: boolean = false;
    get hasBeenMoved() {
        return this._hasBeenMoved;
    }
    public getMoves(board: Board): Position[] {
        const pos:Position[] = [];
        if (this.hasBeenMoved) {
            
        }
        return pos;
    }
}