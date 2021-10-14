import React from "react";
import { NavLink } from "react-router-dom";

export default function Navlinks() {
    return(
        <ul>
            <li>
                <NavLink to="/#projekte">Projekte</NavLink>
            </li>
            <li>
                <NavLink to="/#lokal">Lokal</NavLink>
            </li>
            <li>
                <NavLink to="/#support">Support</NavLink>
            </li>
        </ul>
    )
}