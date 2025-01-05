import React from "react";
import Header from "../components/Header";
import Playground from "../module/game/Playground";
import Footer from "../components/Footer";
export default function Game(): React.JSX.Element {
    return (<>
        <div className=" card w-full max-w-[28.75rem] mb:max-w-[90%]">
            <Header />
            <Playground />
            <Footer />
        </div>
    </>)
}