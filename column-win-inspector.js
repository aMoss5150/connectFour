class ColumnWinInspector {
    constructor(column) {
        this.column = column

    }

    inspect() {
        for (let i = 0; i <= 2; i++) {
            let first = this.column.getTokenAt(i)
            let second = this.column.getTokenAt(i + 1)
            let third = this.column.getTokenAt(i + 2)
            let fourth = this.column.getTokenAt(i + 3)
            if (first === second && second === third && third === fourth) {
                return first;
            }

        }
        return 0;
    }
}

export { ColumnWinInspector }