import React from "react";
import MarkPicker from "../module/home/MarkPicker";
import ButtonGroup from "../module/home/ButtonGroup";
export default function Home(): React.JSX.Element {

    return (<>
        <div className=" card w-full max-w-[28.75rem] mb:max-w-[90%]">
            <div className="card_header">
                <img src="./assets/logo.svg" alt="logo" className="w-[4.5rem] h-8 object-cover mx-auto" />
            </div>
            <div
                className="card_body bg-semi_navy p-6 drop-shadow-dark_navy drop-shadow-lg shadow-lg shadow-dark_navy rounded-md mt-10">
                <MarkPicker />
            </div>
            <div className="card_footer flex flex-wrap gap-y-8 mt-8 items-center ">
                <ButtonGroup/>
            </div>
        </div>
    </>)
}