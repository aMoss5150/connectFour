window.addEventListener('DOMContentLoaded', event => {

    const colSelectors = document.querySelectorAll('.click-target')


    const boardSquares = document.querySelectorAll('.token-square')


    boardSquares.forEach((square, i) => {
        let squareCol = square.id.split("-")[1]
        console.log('squareCol:', squareCol)
    })










})