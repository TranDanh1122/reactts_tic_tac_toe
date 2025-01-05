import React from "react";
import Picker from "../../components/Picker";
import { AppContext } from "../../AppContext";
type PickerStatus = "default" | "selected"
const initPickerGroup: { status: PickerStatus, mark: TicTacToe }[] = [
    { status: "selected", mark: "x" },
    { status: "default", mark: "o" }
]
export default function MarkPicker(): React.JSX.Element {
    const [pickState, setPickState] = React.useState(initPickerGroup)
    const { dispatch } = React.useContext(AppContext)
    const handleSelect = (mark: TicTacToe) => {
        dispatch({ type: "SET_MARK_OF_PLAYER", userPick: mark })
        const newPickState = pickState.map(item => {
            if (item.mark == mark) return { ...item, status: "selected" as PickerStatus }
            return { ...item, status: "default" as PickerStatus }
        })
        setPickState(newPickState)
    }
    return (
        <>
            <h2 className="text-sliver xsmall uppercase text-center">
                Pick player 1's mark
            </h2>
            <div className="flex rounded-xl flex-nowrap bg-dark_navy my-5 p-2">
                {pickState.map((picker, index) => <Picker picker={picker} key={index} onSelected={handleSelect} />)}
            </div>
            <span className="text-sliver uppercase body block text-center"> Remember: X goes first</span>
        </>
    )
}