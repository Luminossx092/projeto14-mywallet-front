import Navbar from "../components/Navbar";
import { IoExitOutline } from "react-icons/io5"
import { Link } from "react-router-dom";
import { HomePageContainer } from "../styles/HomePageStyled";
import styled from "styled-components";
import { Colors } from "../constants/constants";
import {AiOutlinePlusCircle,AiOutlineMinusCircle} from 'react-icons/ai'

export default function HomePage() {
    return (
        <>
            <Navbar>
                <p>Oi, Fulano</p>
                <Link to={'/'} style={{ textDecoration: 'none' }}>
                    <IoExitOutline style={{ 'font-size': '32px', color: "white" }} />
                </Link>
            </Navbar>
            <HomePageContainer>
                <h1>
                    Não há registros de entrada ou saída
                </h1>
            </HomePageContainer>
            <ButtonHomePageContainer>
                <NewEntryButtonContainer>
                    <AiOutlinePlusCircle style={{ 'font-size': '22px', color: "white" }}/>
                    <p>Nova entrada</p>
                </NewEntryButtonContainer>
                <NewEntryButtonContainer>
                    <AiOutlineMinusCircle style={{ 'font-size': '22px', color: "white" }}/>
                    <p>Nova saída</p>
                </NewEntryButtonContainer>
            </ButtonHomePageContainer>
        </>
    )
}

const ButtonHomePageContainer = styled.div`
    width: 326px;
    margin:0 auto;
    gap:15px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`

const NewEntryButtonContainer = styled.div`
    height: 114px;
    width: 156px;
    border-radius: 5px;
    margin-bottom:16px;
    padding:10px;
    background-color: ${Colors.buttonColor};
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    p{
        width:64px;
        color:white;
        font-weight:700;
        font-size:17px;
    }
`