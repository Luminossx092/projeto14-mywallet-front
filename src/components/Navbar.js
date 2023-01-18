import styled from "styled-components"
import { Colors } from "../constants/constants"

export default function Navbar(prop) {
    return (
        <NavbarContainer >
            {prop.children}
        </NavbarContainer>
    )
}

const NavbarContainer = styled.div`
    height: 78px;
    width: 100%;
    padding:0 24px;
    box-sizing:border-box;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color: ${Colors.backgroundColor};
    position:fixed;
    top:0;
    z-index:1;

    p{
        font-size: 26px;
        font-weight: 700;
        line-height: 30px;
        color: white;
    }
`