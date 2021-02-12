class ColumnWinInspector {
    constructor(column) {
        this.column = column
    }

    inspect() {
        for (let i = 0; i < this.column.length - 3; i++) {
            let first = this.column[i]
            let second = this.column[i + 1]
            let third = this.column[i + 2]
            let fourth = this.column[i + 3]

            if (first === second && second === third && third === fourth) {
                return first;
            }

        }
        return 0;
    }
}

export { ColumnWinInspector }