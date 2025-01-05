import React from "react";
import clsx from "clsx";
interface PickerProps {
    picker: {
        status: "selected" | "default"
        mark: TicTacToe
    }
    onSelected: (mark: TicTacToe) => void
}
export default function Picker({ picker, onSelected }: PickerProps): React.JSX.Element {

    return (
        <div className={clsx(" mark w-1/2 rounded-md p-2", {
            "bg-dark_navy": picker.status == "default",
            "bg-sliver": picker.status == "selected"
        })} onClick={() => onSelected(picker.mark)}>
            <div className="img_box rounded-md w-full h-[3.5rem] flex justify-center items-center">
                <i className={clsx("w-8 h-8 block", {
                    "bg-dark_navy": picker.status == "selected",
                    "bg-sliver": picker.status == "default"
                })} style={{
                    mask: `url(./assets/icon-${picker.mark}.svg) center / cover no-repeat`,
                    WebkitMask: `url(./assets/icon-${picker.mark}.svg) center / cover no-repeat`,
                }}></i>
            </div>
        </div>
    )
}