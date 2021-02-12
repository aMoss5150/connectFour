class RowWinInspector {
    constructor(columns) {
        this.columns = columns
    }



    inspect() {
        for (let i=0 ; i<=5;i++) {
            let first = this.columns[0].getTokenAt(i)
            let second = this.columns[1].getTokenAt(i)
            let third = this.columns[2].getTokenAt(i)
            let fourth = this.columns[3].getTokenAt(i)
            if (first === second && second === third && third === fourth) {
                if (first !== null && first !== undefined) {
                    return first
                }
            }
        }
        return 0
    }
}

export {RowWinInspector}