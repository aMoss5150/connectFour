import {Game} from './game.js'

let game = undefined

window.addEventListener('DOMContentLoaded', event => {

    const colSelectors = document.querySelectorAll('.click-target')
    const boardSquares = document.querySelectorAll('.token-square')

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

    const player1 = document.getElementById('player-1-name')
    const player2 = document.getElementById('player-2-name')
    const players = [player1,player2]
    const newgame = document.getElementById('new-game')

    player1.addEventListener('keyup', e => {
        if(!player1.value && !player2.value ) {
            newgame.disabled = true
        }

        else {
            newgame.disabled = false
        }
    })

    player2.addEventListener('keyup', e => {
        if(!player1.value && !player2.value ) {
            newgame.disabled = true
        }

        else {
            newgame.disabled = false
        }
    })













})