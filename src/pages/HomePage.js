import Navbar from "../components/Navbar";
import { IoExitOutline } from "react-icons/io5"
import { Link } from "react-router-dom";
import { ButtonHomePageContainer, DadosContainer, HomePageContainer, NewEntryButtonContainer, SaldoTotalContainer, SaldoTotalStyled } from "../styles/HomePageStyled";
import { BaseURL,SaldoData } from "../constants/constants";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import { useEffect, useState } from "react";
import Registry from "../components/Registry";
import axios from "axios";

export default function HomePage({loginData,setLoginData}) {
    const [userData, setUserData] = useState([]);
    const {token,name} = loginData;
    useEffect(() => {
        const config = {
            headers: {
                "Authorization":`Bearer ${token}`
            }
        }
        axios.get(`${BaseURL}/balance`,config)
        .then(r=>{
            setUserData(r.data)
        })
        .catch(e=>{console.log(e.response.data)})
    }, [])


    return (
        <>
            <Navbar>
                <p>{`Oi, ${name}`}</p>
                <Link onClick={()=>setLoginData({})} to={'/'} style={{ textDecoration: 'none' }}>
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
                            {userData.map((data) =>
                                <Registry key={data.id} data={data} />
                            )}
                        </div>
                        <SaldoTotalContainer>
                            <h1>SALDO</h1>
                            <SaldoTotalStyled saldo={userData.reduce((a, data) => a + Number(data.valor), 0).toFixed(2)}>{userData.reduce((a, data) => a + Number(data.valor), 0).toFixed(2)}</SaldoTotalStyled>
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