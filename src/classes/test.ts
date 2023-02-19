import { Board } from "./board";
import { Bishop } from "./pieces/bishop";
import { Queen } from "./pieces/queen";
import { Position } from "./position";

const board:Board = new Board();
board.pieces[2][2] = new Queen("b", new Position(2,2));
board.pieces[3][3] = new Bishop("b", new Position(3,3));

console.log(board.pieces[2][2].getMoves(board));
console.log(board.pieces[3][3].getMoves(board))