import { Board } from "../classes/board";
import { Piece } from "../classes/piece";
import { Bishop } from "../classes/pieces/bishop";
import { King } from "../classes/pieces/king";
import { Knight } from "../classes/pieces/knight";
import { Pawn } from "../classes/pieces/pawn";
import { Queen } from "../classes/pieces/queen";
import { Rook } from "../classes/pieces/rook";
import { Position } from "../classes/position";

export function fenToBoard(fen: string): Board {
    const board: Board = new Board();
    const segments: string[] = fen.split(" ");
    if (segments.length !== 6) {
        throw new Error("Invalid FEN format");
    }
    const position: string[] = segments[0].split("/");
    if (position.length !== 8) {
        throw new Error("Invalid FEN format");
    }
    for (let i = 0; i < 8; i++) {
        if (position[i].charAt(0) === "8") {
            continue;
        } else {
            translateRow(position[i], board.pieces[i], i);
        }
    }
    return board;
}

export function boardToFen(board: Board): string {
    let newFen = ""
    for (let i = 0; i < 8; i++) {
        let count = 0;
        for (let j = 0; j < 8; j++) {
            if (board.pieces[i][j].type == "E") {
                count++;
                if (j === 7) {
                    newFen += count.toString();
                }
            } else {
                if (count != 0) {
                    newFen += count.toString();
                    count = 0;
                }
                let type = board.pieces[i][j].type;
                if (board.pieces[i][j].color === "b") {
                    type = type.toLowerCase();
                }
                newFen += type;
            }
        }
        if (i !== 7) {
            newFen += "/";
        }
    }
    return newFen;
}

function translateRow(row: string, layout: Array<Piece>, layoutIndex: number) {
    let cursor = 0;
    for (let i = 0; i < row.length; i++) {
        if (row.charCodeAt(i) <= "7".charCodeAt(0)
            && row.charCodeAt(i) >= "0".charCodeAt(0)) {
            let diff = row.charCodeAt(i) - "0".charCodeAt(0);
            cursor += diff;
        } else {
            let newPiece: Piece;
            let color: string;
            let position: Position = new Position(layoutIndex, cursor);
            if (row[i].toUpperCase() === row[i]) {
                color = "w";
            } else {
                color = "b";
            }
            let type = row[i].toLowerCase();
            switch (type) {
                case 'p':
                    newPiece = new Pawn(color, position);
                    break;
                case 'n':
                    newPiece = new Knight(color, position);
                    break;
                case 'b':
                    newPiece = new Bishop(color, position);
                    break;
                case 'r':
                    newPiece = new Rook(color, position);
                    break;
                case 'q':
                    newPiece = new Queen(color, position);
                    break;
                case 'k':
                    newPiece = new King(color, position);
                    break;
                default:
                    newPiece = new Pawn(color, position);
            }
            layout[cursor] = newPiece;
            cursor++;
        }
    }
}