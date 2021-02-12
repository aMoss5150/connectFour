import { Column } from './column.js'

class Game {
    constructor(player1name, player2name) {
        this.player1name = player1name
        this.player2name = player2name
        this.currentPlayer = 1

        this.columns = [];

        for (let i = 0; i < 7; i++) {
            this.columns.push(new Column())
        }
    }

    getName() {
        return `${this.player1name} versus ${this.player2name}`
    }

    playInColumn(columnIndex) {
        let currentColumn = this.columns[columnIndex] //!! ??????
        this.columns.add(this.currentPlayer)

        if (this.currentPlayer === 1) {
            this.currentPlayer = 2
        } else {
            this.currentPlayer = 1;
        }
    }

    getTokenAt(rowIndex, columnIndex) {
        let currentColumn = this.columns[columnIndex]
        return currentColumn.getTokenAt(rowIndex)
    }
}


export { Game }

            // Column organized into nested array
            // let ColofSquares = []
            // for (let i=0;i<colSelectors.length;i++) {
            //     let col = colSelectors[i] // col 0
            //     let array = []
            //     for(let j=0;j<boardSquares.length;j++) {
            //         let square = boardSquares[j].id.split('-')[1]
            //         if (square === col.id.split('-')[1]) {
            //             array.push(boardSquares[j])
            //         }
            //     }
            //     if (array.length !== 0) {
            //     ColofSquares.push(array)
            //     }
            // }