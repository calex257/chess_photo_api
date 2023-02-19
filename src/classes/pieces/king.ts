import { Board } from "../board";
import { Piece } from "../piece";
import { Position } from "../position";
import { LinearPiece, movePredicate } from "./linear";
export class King extends LinearPiece {
    protected _type: string = "K";
    limit = 1;
    predicate: movePredicate = {
        callback: (i, j) => {
            return (i != 0 || j != 0);
        },
    };
}