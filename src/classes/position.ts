export class Position {
    row:number = 0;
    column:number = 0;
    constructor(row:number, column:number) {
        this.row = row;
        this.column = column;
    }
    public isOutsideBounds():boolean {
        return this.column >= 8
        || this.row >= 8
        || this.column < 0
        || this.row < 0;
    }
}