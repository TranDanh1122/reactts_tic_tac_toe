import React from "react"
interface ButtonProps {
    button: {
        text: string,
        color: string,
        hoverColor: string
        shadowColor: string
        type: string
    },
    onClickBtn: (type: string) => void
}
export default function Button({ button, onClickBtn }: ButtonProps): React.JSX.Element {
    return (<>
        <div className="relative w-full" onClick={() => onClickBtn(button.type)}>
            <button
                className={`solo py-5 bg-${button.color} hover:bg-${button.hoverColor} w-full rounded-xl cursor-pointer relative z-10 text-dark_navy small uppercase`}>
                {button.text}
            </button>
            <div className={`absolute w-full h-full rounded-xl top-[.5rem] left-0 z-[1] bg-[${button.shadowColor}]`}></div>
        </div>
    </>)
}