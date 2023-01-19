import Navbar from "../components/Navbar";
import { IoExitOutline } from "react-icons/io5"
import { Link } from "react-router-dom";
import { HomePageContainer } from "../styles/HomePageStyled";
import styled from "styled-components";
import { Colors, SaldoData } from "../constants/constants";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import { useState } from "react";
import Registry from "../components/Registry";

export default function HomePage() {
    const [userData, serUserData] = useState(SaldoData);

    return (
        <>
            <Navbar>
                <p>Oi, Fulano</p>
                <Link to={'/'} style={{ textDecoration: 'none' }}>
                    <IoExitOutline style={{ fontSize: '32px', color: "white" }} />
                </Link>
            </Navbar>
            {userData.length === 0 ?
                <HomePageContainer>
                    <h1>
                        Não há registros de entrada ou saída
                    </h1>
                </HomePageContainer>
                : <>
                    <DadosContainer>
                        <div>
                            {userData.map((data,i) =>
                                <Registry id={i} data={data} />
                            )}
                        </div>
                        <SaldoTotalContainer>
                            <h1>SALDO</h1>
                            <SaldoTotalStyled saldo={userData.reduce((a, data) => a + data.valor, 0).toFixed(2)}>{userData.reduce((a, data) => a + data.valor, 0).toFixed(2)}</SaldoTotalStyled>
                        </SaldoTotalContainer>
                    </DadosContainer>
                </>
            }
            <ButtonHomePageContainer>
                <Link to={'/nova-entrada'} style={{ textDecoration: 'none' }}>
                    <NewEntryButtonContainer>
                        <AiOutlinePlusCircle style={{ fontSize: '22px', color: "white" }} />
                        <p>Nova entrada</p>
                    </NewEntryButtonContainer>
                </Link>
                <Link to={'/nova-saida'} style={{ textDecoration: 'none' }}>
                    <NewEntryButtonContainer>
                        <AiOutlineMinusCircle style={{ fontSize: '22px', color: "white" }} />
                        <p>Nova saída</p>
                    </NewEntryButtonContainer>
                </Link>
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
const DadosContainer = styled.div`
    height: 416px;
    width: 326px;
    margin: 13px auto;
    margin-top:78px;
    padding:12px 0;
    border-radius: 5px;
    background-color: white;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    box-sizing:border-box;
    p{ 
        font-size: 17px;
        font-weight: 400;
    }
`

const SaldoTotalContainer = styled.div`
    width:300px;
    display:flex;
    justify-content:space-between;
    h1{
        font-weight:700;
        font-size: 17px;
    }
`

const SaldoTotalStyled = styled.p`
    color: ${props=>props.saldo >=0?Colors.positiveColor:Colors.negativeColor}
`