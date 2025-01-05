import React from "react";
import { AppContext } from "../AppContext";
import clsx from "clsx";
export default function Footer(): React.JSX.Element {
    const { state } = React.useContext(AppContext)
    return (
        <div className=" flex flex-nowrap gap-4 mt-8">
            <div className={clsx("flex flex-col rounded-lg py-3 px-10 w-1/3 items-center justify-center text-dark_navy uppercase", {
                "bg-light_blue": state?.player1.mark == "x",
                "bg-light_yellow": state?.player1.mark == "o"
            })}>
                <span className="body">{state?.player1.mark}({state?.type == "duo" ? "you" : "P1"})</span>
                <span className="xsmall">{state?.player1.wins}</span>
            </div>
            <div className="flex flex-col rounded-lg py-3 px-10 w-1/3 items-center justify-center uppercase bg-sliver text-dark_navy">
                <span className=" body ">ties</span>
                <span className="  xsmall ">{state?.tie}</span>
            </div>
            <div className={clsx("flex flex-col rounded-lg py-3 px-10 w-1/3 items-center justify-center uppercase", {
                "bg-light_blue": state?.player2.mark == "x",
                "bg-light_yellow": state?.player2.mark == "o"
            })}>
                <span className="  body">{state?.player2.mark}({state?.type == "duo" ? "CPU" : "P2"})</span>
                <span className=" text-dark_navy xsmall win_count_p2 ">{state?.player2.wins}</span>
            </div>
        </div>
    )
}
