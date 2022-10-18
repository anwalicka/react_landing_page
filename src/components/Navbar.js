import React from "react";
import logo from "../images/logo.svg";

export default function Navbar() {
    return (
        <div>
            <nav className="bg-black d-flex justify-content-space-between px-2">
                <div className="d-flex">
                <img src={logo} className="nav-logo"></img>
                <h3 className="color-blue">ReactFacts</h3> 
                </div>
                 <h4 className="sub-title">React Course - project 1</h4>
            </nav>
           
        </div>
    );
}