import { WINNER_COMBOS } from "../constants.js"

export const checkWinner = (boardToCheck) => {

    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo
        console.log(combo)
        console.log(boardToCheck[a])
        console.log(boardToCheck[b])
        console.log(boardToCheck[c])
        if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
            return boardToCheck[a]
        }

    }
    return null
}


export const checkEndGame = (newBoard) => {

    return newBoard.every((square) => square !== null)

}