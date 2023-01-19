import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BaseURL } from "../constants/constants"
import LoadingDots from "../components/LoadingDots"
import { InputStyle } from "../styles/inputStyle"
import { HomeScreenContainer, InputsContainer } from "../styles/SignInPageStyled"
import Navbar from "../components/Navbar"
import CurrencyInput from 'react-currency-input-field';
import styled from "styled-components"
import CurrentInputContainer from "../styles/CurrentInputStyle"

export default function NewEntryPage({ }) {
    const [valor, setValor] = useState('');
    const [description, setDescription] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    function TryLoggingIn(e) {
        e.preventDefault();
        setIsLoading(true);
        navigate("/home");
        /*axios.post(`${BaseURL}auth/login`, { email, password })
            .then((r) => {
                setLoginData(r.data);
                setIsLoading(false);
                navigate("/home")
            })
            .catch((e) => {
                alert(e.response.data.message);
                setIsLoading(false);
            })*/
    }
    return (
        <>
            <Navbar><p>Nova entrada</p></Navbar>
            <HomeScreenContainer>
                <form onSubmit={TryLoggingIn}>
                    <InputsContainer>
                        <CurrentInputContainer>
                            <CurrencyInput
                                value={valor}
                                onValueChange={(value) => (!isNaN(Number(value))||value==undefined ) && setValor(value)}
                                placeholder="Valor"
                                disabled={isLoading}
                                allowNegativeValue={false}
                                decimalsLimit={2}
                                prefix={"R$"}
                                groupSeparator='' 
                                required />
                        </CurrentInputContainer>
                        <InputStyle type={"text"}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Descrição"
                            disabled={isLoading}
                            required />
                        <button type="submit" disabled={isLoading}>{isLoading ? <LoadingDots /> : "Entrar"}</button>
                    </InputsContainer>
                </form>
            </HomeScreenContainer>
        </>
    )
}
