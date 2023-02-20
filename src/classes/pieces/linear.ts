import { Board } from "../board";
import { Piece } from "../piece";
import { Position } from "../position";
interface movePredicate {
    callback: (i: number, j: number) => boolean;
}
abstract class LinearPiece extends Piece {
    protected abstract predicate: movePredicate;
    protected abstract limit: number;
    public getMoves(board: Board):Array<Position> {
        return this.getLineMoves(board, this.predicate, this.limit);
    }
    private handleDirections(board: Board, pos: Position[], rowIncrement: number, columnIncrement: number, limit: number) {
        for (let i = 1; i <= limit; i++) {
            const newPos: Position = new Position(this.position.row + i * rowIncrement,
                this.position.column + i *columnIncrement);
            if (newPos.isOutsideBounds()) {
                break;
            }
            if (board.getPiece(newPos).type === "E") {
                pos.push(newPos);
            } else {
                break;
            }
        }
    }
    private getLineMoves(board: Board, predicate: movePredicate, limit: number): Position[] {
        const pos: Position[] = [];
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (predicate.callback(i, j)) {
                    this.handleDirections(board, pos, i, j, limit);
                }
            }
        }
        return pos;
    }
}

export {
    LinearPiece,
    movePredicate
}