class Column {
    constructor(){
    }

    add(currentPlayer){
    }

    getTokenAt(rowIn){
        if(rowIn === null) {
            return null
        }
        else if(rowIn === 1) {
            return 1
        }
        else if(rowIn === 2) {
            return 2
        }
    }
}


export {Column}