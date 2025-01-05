declare global {
    type TicTacToe = "x" | "o"
    interface Player {
        mark: TicTacToe,
        wins: number,
    }
}
export { }