import { Board } from "../classes/board";
import { boardToFen, fenToBoard } from "../converter/converter";
import { boardToImage } from "../printer/printer";
import * as fs from 'fs'
async function test1() {

    const fen1 = "rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2";
    const board: Board = fenToBoard(fen1);
    const buffer = await boardToImage(board, 1920);
    fs.writeFileSync("./output.png", buffer);
    console.log(board.pieces);
    const fen2 = boardToFen(board);

    console.log(fen2);
}

test1();