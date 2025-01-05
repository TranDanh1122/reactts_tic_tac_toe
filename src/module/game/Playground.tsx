import React from "react";
import { AppContext } from "../../AppContext";
import Box from "../../components/Box";
import { checkTie, checkWinner, cpuMark } from "../../helpers/helper";
export default function Playground(): React.JSX.Element {
    const { state, dispatch } = React.useContext(AppContext)

    React.useEffect(() => {
        if (!state || !state.data) return
        if (state.currentPage == "end" || state.currentPage == "home") return
        if (checkTie(state.data)) {
            dispatch({ type: "SET_WINNER", winner: "tie" })
            dispatch({ type: "SET_PAGE", page: "end" })
            return
        }
        const winner = checkWinner(state.data)
        if (winner) {
            dispatch({ type: "SET_WINNER", winner: winner as TicTacToe })
            dispatch({ type: "SET_PAGE", page: "end" })
            return
        }
    }, [state?.data])

    React.useEffect(() => {
        if (!state) return
        if (state.turn == state.player2.mark && state.type == "solo") {
            const result = cpuMark(state.data);
            if (result) {
                const { x, y } = result;
                dispatch({ type: "MARK", row: x, col: y });
                dispatch({ type: "SET_TURN", turn: state?.turn == "x" ? "o" : "x" });
            }
        }
    }, [state?.turn])
    if (!state) return <p>Loading</p>

    return (
        <div className=" w-full flex flex-wrap gap-5 gap-y-5 justify-center items-center mt-8 boxs">
            {state.data.map((rowArr: string[], row_index: number) => {
                return rowArr.map((mark, col_index) => {
                    return <Box key={`${row_index}-${col_index}`} mark={mark as TicTacToe} position={{ row: row_index, col: col_index }} />
                });
            })}
        </div>)
}