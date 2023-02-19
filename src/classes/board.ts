import { Piece } from "./piece";
import { Empty } from "./pieces/empty";
import { Position } from "./position";

export class Board {
    pieces: Array<Array<Piece>> = [];
    enPassant: Position = new Position(-1, -1);
    public getPiece(position: Position): Piece {
        return this.pieces[position.row][position.column];
    }
    constructor() {
        for (let i = 0; i < 8; i++) {
            this.pieces.push([]);
            for (let j = 0; j < 8; j++) {
                this.pieces[i].push(
                    new Empty("",
                        new Position(i, j))
                );
            }
        }
    }
}