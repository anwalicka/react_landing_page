import React from "react";
import logo from "../images/logo.svg";

export default function Navbar() {
    return (
        <div>
            <nav className="bg-black d-flex justify-content-space-between px-2">
                <div className="d-flex">
                <img src={logo} className="nav--icon"></img>
                <h3 className="nav--logo_text">ReactFacts</h3> 
                </div>
                 <h4 className="nav--title">React Course - project 1</h4>
            </nav>
           
        </div>
    );
}