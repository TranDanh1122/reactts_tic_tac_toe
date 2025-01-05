import React from "react";
import { AppContext } from "../AppContext";
import clsx from "clsx";
interface BoxProps {
    position: {
        row: number,
        col: number,
    },
    mark: TicTacToe
}

export default function Box({ position, mark }: BoxProps): React.JSX.Element {
    const { state, dispatch } = React.useContext(AppContext)
    const hanleClick = () => {
        if (mark) return false
        dispatch({ type: "MARK", row: position.row, col: position.col })
        dispatch({ type: "SET_TURN", turn: state?.turn == "x" ? "o" : "x" })
    }

    return (
        <div onClick={hanleClick} data-x={position.row} data-y={position.col}
            className="box shadow-md shadow-black  cursor-pointer h-[8.75rem] bg-semi_navy w-[calc(33.33%-.8333rem)] rounded-xl flex items-center justify-center">
            {(mark) &&
                <i className={clsx(" w-16 h-16", {
                    "bg-light_yellow": mark == "o",
                    "bg-light_blue": mark == "x"
                })}
                    style={{
                        mask: `url(./assets/icon-${mark}.svg) center / cover no-repeat`,
                        WebkitMask: `url(./assets/icon-${mark}.svg) center / cover no-repeat`,
                    }}

                ></i>
            }
        </div >
    )
}