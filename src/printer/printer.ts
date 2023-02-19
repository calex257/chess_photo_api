import sharp from "sharp";
import { Board } from "../classes/board";
import { Piece } from "../classes/piece";

export async function boardToImage(board: Board, size: number):Promise<Buffer> {
    const pieceSize = size / 8;
    const arr: Array<Object> = [];
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (board.pieces[i][j].type === "E") {
                continue;
            } else {
                const path = computePath(board.pieces[i][j]);
                const buffer = await sharp(path).resize(pieceSize, pieceSize)
                    .toBuffer();
                arr.push({
                    input: buffer,
                    top: i * pieceSize,
                    left: j * pieceSize,
                })
            }
        }
    }
    const result = await sharp("../../assets/board.png")
    .resize(size, size)
    .composite(arr)
    .toBuffer();
    return result;
}

function computePath(piece: Piece) {
    return "../../assets/" + piece.color + piece.type + ".svg";
}