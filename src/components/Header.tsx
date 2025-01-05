import React from "react";
import { AppContext } from "../AppContext";
export default function Header(): React.JSX.Element {
    const { state, dispatch } = React.useContext(AppContext)
    const handleRestart = () => {
        dispatch({ type: "REQUEST_RESTART" })
        dispatch({ type: "SET_PAGE", page: "end" })
        dispatch({ type: "SET_TURN", turn: "x" })
    }
    return (
        <div className=" flex flex-nowrap justify-between items-center">
            <img src="./assets/logo.svg" alt="logo" className="w-[4.5rem] h-8 object-cover" />
            <div className="flex flex-nowrap items-center justify-between gap-4 bg-semi_navy px-8 py-4 rounded-xl">
                <i className="inline-block  w-5 h-5 bg-sliver turn"
                    style={{ mask: `url(./assets/icon-${state?.turn}.svg) center / contain no-repeat`, WebkitMask: `url(./assets/icon-${state?.turn}.svg) center / contain no-repeat` }}></i>
                <span className="text-sliver tracking-[1px] font-bold uppercase"> turn</span>
            </div>
            <div onClick={handleRestart} className="bg-sliver p-4 rounded-xl cursor-pointer hover:bg-sliver_hover">
                <i className="block w-5 h-5 bg-dark_navy pointer-events-none"
                    style={{ mask: "url(./assets/icon-restart.svg) center / contain no-repeat", WebkitMask: "url(./assets/icon-restart.svg) center / contain no-repeat" }}></i>
            </div>
        </div >
    )
}