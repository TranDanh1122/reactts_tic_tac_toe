import React from "react";
import { AppContext } from "../AppContext";
import clsx from "clsx";
export default function Result(): React.JSX.Element {
    const { state, dispatch } = React.useContext(AppContext)
    const handleQuit = () => {
        if (state?.lastWinner == "restart") {
            dispatch({ type: "SET_PAGE", page: "game" })
            return
        }
        dispatch({ type: "SET_PAGE", page: "home" })
        dispatch({ type: "RESTART" })
    }
    const handleNext = () => {
        dispatch({ type: "SET_PAGE", page: "game" })
        dispatch({ type: "RESTART" })
    }
    return (<>
        <div className="overlay  fixed top-0 left-0 w-full h-full bg-dark_navy bg-opacity-50"></div>
        <div className=" fixed top-1/2 left-0 py-10 bg-semi_navy w-full text-center text-sliver uppercase small">
            {state?.lastWinner === state?.player1 && <span>player 1 win</span>}
            {(state?.lastWinner === state?.player2 && state?.type === "duo") && <span>player 2 win</span>}
            {(state?.lastWinner === state?.player2 && state?.type === "solo") && <span>Oh you lose...</span>}
            {typeof state?.lastWinner == "object" &&
                <div className="flex items-center justify-center gap-6 winner_banner">
                    <i className={clsx("block w-24 h-24", {
                        "bg-light_blue": state.lastWinner.mark == "x",
                        "bg-light_yellow": state.lastWinner.mark == "o",

                    })} style={{
                        mask: `url(./assets/icon-${state.lastWinner.mark}.svg) center/cover no-repeat`,
                        WebkitMask: `url(./assets/icon-${state.lastWinner.mark}.svg) center/cover no-repeat`,
                    }}></i>
                    <span className={clsx("large", {
                        "text-light_blue": state.lastWinner.mark == "x",
                        "text-light_yellow": state.lastWinner.mark == "o",

                    })}>TAKES THE ROUND</span>
                </div>
            }

            {state?.lastWinner == "tie" && <div className=" mb-8 text-sliver">
                <span className="large">
                    ROUND TIED
                </span>
            </div>}
            {state?.lastWinner == "restart" && <div className=" mb-8 text-sliver">
                <span className="large">
                    RESTART GAME?
                </span>
            </div>}

            <div className="flex flex-nowrap gap-4 items-center justify-center">
                <button onClick={() => handleQuit()} className="bg-sliver  hover:bg-sliver_hover text-dark_navy tracking-[1px] p-4 rounded-lg font-bold uppercase">
                    {state?.lastWinner == "restart" ? "No, Cancel" : "QUIT"}
                </button>
                <button onClick={() => handleNext()} className=" bg-light_yellow hover:bg-light_yellow_hover text-dark_navy tracking-[1px] p-4 rounded-lg font-bold uppercase">
                    {state?.lastWinner == "restart" ? "Yes, restart" : "NEXT ROUND"}
                </button>
            </div>
        </div>
    </>)
}