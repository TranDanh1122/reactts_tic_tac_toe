import React from "react"
import Button from "../../components/Button";
import { AppContext } from "../../AppContext";
const initBtnGroup = [
    { text: "New Game (vs CPU)", type: "solo", color: "light_yellow", hoverColor: "light_yellow_hover", shadowColor: "#CC8B13" },
    { text: "New Game (vs player)", type: "duo", color: "light_blue", hoverColor: "light_blue_hover", shadowColor: "#118C87" }

]
export default function ButtonGroup(): React.JSX.Element {
    const { dispatch } = React.useContext(AppContext)
    const handleClick = (type: string) => {
        dispatch({ type: "SET_TYPE", userPick: type as ("duo" | "solo") })
        dispatch({ type: "SET_PAGE", page: "game" })
    }
    return (<>
        {
            initBtnGroup.map(btn => <Button onClickBtn={handleClick} button={btn}></Button>)
        }
    </>)
}