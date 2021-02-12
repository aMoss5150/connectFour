import { Game } from './game.js'


const boardHolder = document.querySelector('#board-holder')
let game = undefined
const gameName = document.querySelector('#game-name')

const updateUI = function () {
    if (game === undefined) {
        boardHolder.classList.add('is-invisible')
    }
    else {
        boardHolder.classList.remove('is-invisible')
        gameName.innerHTML = game.getName()
        let curr = game.currentPlayer
        if (curr === 1) {
            clickTargets.classList.remove('red')
            clickTargets.classList.add('black')
        }
        if (curr === 2) {
            clickTargets.classList.remove('black')
            clickTargets.classList.add('red')
        }

        for (let i = 0; i <= 5; i++) {
            for (let j = 0; j <= 6; j++) {
                let id = `square-${i}-${j}`
                let element = document.getElementById(id)
                let value = game.getTokenAt(i, j)
                element.innerHTML = ''
                if (value === 1) {
                    let div = document.createElement('div')
                    div.classList.add('token')
                    div.classList.add('black')
                    element.appendChild(div)
                }

                if (value === 2) {
                    let div = document.createElement('div')
                    div.classList.add('token')
                    div.classList.add('red')
                    element.appendChild(div)
                }
            }
        }
    }
}

window.addEventListener('DOMContentLoaded', event => {

    const clickTargets = document.querySelector('#click-targets')
    console.log('clickTargets:', clickTargets)
    const boardSquares = document.querySelectorAll('.token-square')
    const player1 = document.getElementById('player-1-name')
    const player2 = document.getElementById('player-2-name')
    const players = [player1, player2]
    const newgame = document.getElementById('new-game')



    clickTargets.addEventListener('click', event => {
        let clickId = event.target.id
        if (clickId.includes("column-")) {
            let column = Number.parseInt(clickId[clickId.length - 1])
        }
        game.playInColumn(column)
        updateUI()
    });


    player1.addEventListener('keyup', e => {
        if (!player1.value && !player2.value) {
            newgame.disabled = true
        }

        else {
            newgame.disabled = false
        }
    })

    player2.addEventListener('keyup', e => {
        if (!player1.value && !player2.value) {
            newgame.disabled = true
        }

        else {
            newgame.disabled = false
        }
    })

    newgame.addEventListener('click', event => {
        game = new Game(player1name, player2name)

        this.player1name = '';
        this.player2name = '';


        newgame.disabled = true

        updateUI();



    })















})