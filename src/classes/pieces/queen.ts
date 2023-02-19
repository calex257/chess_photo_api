import { Board } from "../board";
import { Piece } from "../piece";
import { Position } from "../position";
import { LinearPiece, movePredicate } from "./linear";
export class Queen extends LinearPiece {
    protected _type: string = "Q";
    limit = 8;
    predicate: movePredicate = {
        callback: (i, j) => {
            return (i !== 0 || j !== 0);
        },
    };
}