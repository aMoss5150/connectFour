import { Column } from './column.js'
import { ColumnWinInspector } from './column-win-inspector.js'
import {RowWinInspector} from './row-win-inspector.js'

class Game {
    constructor(player1name, player2name) {
        this.player1name = player1name
        this.player2name = player2name
        this.currentPlayer = 1

        this.columns = [];
        this.winnerNumber = 0

        for (let i = 0; i < 7; i++) {
            this.columns.push(new Column())
        }
    }

    getName() {
        if (this.winnerNumber === 3) {
            return `${this.player1name} ties with ${this.player2name}`
        }

        if (this.winnerNumber === 1) {
            return `${this.player1name} has won!`
        }

        if (this.winnerNumber === 2) {
            return `${this.player2name} has won!`
        }
        return `${this.player1name} versus ${this.player2name}`
    }

    playInColumn(columnIndex) {
        let currentColumn = this.columns[columnIndex] //!! ??????
        currentColumn.add(this.currentPlayer)
        if (this.currentPlayer === 1) {
            this.currentPlayer = 2
        } else {
            this.currentPlayer = 1;
        }
        this.checkForTie()
        this.checkForColumnWin()
        this.checkForRowWin()
    }



    getTokenAt(rowIndex, columnIndex) {
        let currentColumn = this.columns[columnIndex]
        return currentColumn.getTokenAt(rowIndex)
    }

    isColumnFull(columnIndex) {
        if (this.winnerNumber === 1 || this.winnerNumber === 2) return true;

        if (columnIndex >= 0 && columnIndex <= 6) {
            return this.columns[columnIndex].isFull()
        }
    }

    checkForTie() {
        for (let i = 0; i <= 6; i++) {
            if (!this.isColumnFull(i)) {
                return;
            }
        }
        this.winnerNumber = 3
    }

    checkForColumnWin() {
        if (this.winnerNumber) return

        for (let i = 0; i < this.columns.length; i++) {
            let newCol = new ColumnWinInspector(this.columns[i])
            let winner = newCol.inspect()
            if (winner === 1 || winner === 2) {
                this.winnerNumber = winner
                return
            }
        }
    }

    checkForRowWin() {
        if (this.winnerNumber) {
            return;
        }
        let column1 = new RowWinInspector(this.columns.slice(0,4))
        let column2 = new RowWinInspector(this.columns.slice(1,5))
        let column3 = new RowWinInspector(this.columns.slice(2,6))
        let column4 = new RowWinInspector(this.columns.slice(3))
        if (column1.inspect() > 0) {
            this.winnerNumber = column1.inspect()
            return;
        }
        if (column2.inspect() > 0) {
            this.winnerNumber = column2.inspect()
            return;
        }
        if (column3.inspect() > 0) {
            this.winnerNumber = column3.inspect()
            return;
        }
        if (column4.inspect() > 0) {
            this.winnerNumber = column4.inspect()
            return;
        }
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