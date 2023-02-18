import React from "react";
import pcHeader from "./images/bg-header-desktop.svg"

export default function Header(){
    return(
        <header className="header">
            <h1>header</h1>
       <img className="pc-header" src={pcHeader} alt='header-img'></img>
       </header>
    )
}