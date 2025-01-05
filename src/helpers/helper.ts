export function checkWinner(data: string[][]) { //check who is winner logic, AI code
    const size = data.length;
    let winnerMark = null
    for (let row = 0; row < size; row++) {
        if (data[row][0] !== '' && data[row][0] === data[row][1] && data[row][1] === data[row][2]) {
            winnerMark = data[row][0];
            return winnerMark
        }
    }
    for (let col = 0; col < size; col++) {
        if (data[0][col] !== '' && data[0][col] === data[1][col] && data[1][col] === data[2][col]) {
            winnerMark = data[0][col];
            return winnerMark
        }
    }
    if (data[0][0] !== '' && data[0][0] === data[1][1] && data[1][1] === data[2][2]) {
        winnerMark = data[0][0];
        return winnerMark
    }
    if (data[0][2] !== '' && data[0][2] === data[1][1] && data[1][1] === data[2][0]) {
        winnerMark = data[0][2];
        return winnerMark
    }
    return winnerMark;
}
export function checkTie(data: string[][]) {
    const tie = data.every(row => row.every(cell => cell !== ''));
    return tie
}