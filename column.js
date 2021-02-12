class Column {
    constructor() {
        this.tokens = [null, null, null, null, null, null];
    }

    add(currentPlayer) {
        for (let i = this.tokens.length - 1; i >= 0; i--) {
            if (this.tokens[i] === null) {
                this.tokens[i] = currentPlayer
                return;
            }
        }
    }

    getTokenAt(rowIn) {
        return this.tokens[rowIn]
    }

    isFull() {
        for (let i = 0; i < this.tokens.length; i++) {
            if (this.tokens[i] === null) {
                return false
            }
        }
        return true
    }



}


export { Column }

// if (rowIn >= 0 && rowIn <= 5) {
//     if (this.tokens[rowIn] === 1) return 1
//     if (this.tokens[rowIn] === 2) return 2
//     else {
//         return null
//     }
// }