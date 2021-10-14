import React from 'react'
import {Nav, NavbarContainer, NavLogo} from "./Navbardesktop.styles"


interface Props {
    text?: string;
}

export const Navbardesktop:React.FC = () => {
    return (
        <>
            <Nav className="section">
                <NavbarContainer className="section__inner">
                    <NavLogo to="/">
                        Inab
                    </NavLogo>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbardesktop
