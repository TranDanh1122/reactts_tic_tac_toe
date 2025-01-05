import React from "react"

interface AppContextType {
    type: "duo" | "solo",
    tie: number,
    player1: Player,
    player2: Player,
    turn: TicTacToe,
    data: string[][],
    currentPage: "home" | "game" | "end",
    lastWinner: Player | "tie" | "restart"
}
type ReducerAction = { type: "RESET" } | { type: "RESTART" }
    | { type: "SET_PAGE", page: "home" | "game" | "end" }
    | { type: "SET_TYPE", userPick: "duo" | "solo" }
    | { type: "SET_TURN", turn: TicTacToe }
    | { type: "SET_MARK_OF_PLAYER", userPick: TicTacToe }
    | { type: "MARK", row: number, col: number }
    | { type: "SET_WINNER", winner: TicTacToe | "tie" }
    | { type: "REQUEST_RESTART" }

const initData: AppContextType = {
    type: "duo",
    tie: 0,
    player1: { mark: "x", wins: 0 },
    player2: { mark: "o", wins: 0 },
    turn: "x",
    data: Array(3).fill(Array(3).fill("")),
    currentPage: "home",
    lastWinner: { mark: "x", wins: 0 }
}
const appReducer = (state: AppContextType, action: ReducerAction): AppContextType => {
    switch (action.type) {
        case "RESET":
            return { ...initData }
        case "SET_PAGE":
            return { ...state, currentPage: action.page }
        case "SET_MARK_OF_PLAYER": {
            const { userPick } = action
            return { ...state, player1: { ...state.player1, mark: userPick }, player2: { ...state.player2, mark: userPick === "x" ? "o" : "x" } }
        }
        case "SET_TYPE":
            return { ...state, type: action.userPick }
        case "SET_TURN":
            return { ...state, turn: action.turn }
        case "MARK": {
            const { row, col } = action
            const newData = state.data.map((r, i) => r.map((c, j) => i === row && j === col ? state.turn : c))
            return { ...state, data: newData }
        }
        case "SET_WINNER": {
            const { winner } = action
            if (winner === "tie") return { ...state, tie: state.tie + 1, lastWinner: "tie" }
            const newState = { ...state }
            if (newState.player1.mark == winner) {
                newState.player1.wins++
                newState.lastWinner = newState.player1
            } else {
                newState.player2.wins++
                newState.lastWinner = newState.player2
            }

            return { ...newState }
        }
        case "REQUEST_RESTART": {
            return { ...state, lastWinner: "restart" }
        }
        case "RESTART": return { ...state, data: Array(3).fill(Array(3).fill("")), turn: "x" }
        default: return { ...state }
    }
}
export const AppContext = React.createContext<{ state: AppContextType | null, dispatch: React.Dispatch<ReducerAction> }>({ state: null, dispatch: () => { } })
interface ProviderProp {
    children: React.ReactNode
}
export default function AppProvider({ children }: ProviderProp) {
    const [state, dispatch]: [state: AppContextType, dispatch: React.Dispatch<ReducerAction>] = React.useReducer(appReducer, initData)
    return <AppContext.Provider value={{ state, dispatch }}>
        {children}
    </AppContext.Provider>
}
