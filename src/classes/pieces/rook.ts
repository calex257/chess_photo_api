import { Board } from "../board";
import { Piece } from "../piece";
import { Position } from "../position";
import { LinearPiece, movePredicate } from "./linear";
export class Rook extends LinearPiece {
    protected _type: string = "R";
    limit = 8;
    predicate: movePredicate = {
        callback: (i, j) => {
            return (i !== 0 || j !== 0) && i*j === 0;
        },
    };
}