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
import dayjs from "dayjs"

export default function NewOutPage({ loginData }) {
    const [valor, setValor] = useState('');
    const [description, setDescription] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { token } = loginData;

    function TryCreateNewEntry(e) {
        e.preventDefault();
        setIsLoading(true);
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        axios.post(`${BaseURL}/balance`, { date: dayjs().format('MM/DD'), description, valor: -Number(valor) }, config)
            .then((r) => {
                setIsLoading(false);
                navigate("/home")
            })
            .catch((e) => {
                alert(e.response.data.message);
                setIsLoading(false);
            })
    }
    return (
        <>
            <Navbar><p>Nova saída</p></Navbar>
            <HomeScreenContainer>
                <form onSubmit={TryCreateNewEntry}>
                    <InputsContainer>
                        <CurrentInputContainer>
                            <CurrencyInput
                                value={valor}
                                onValueChange={(value) => (!isNaN(Number(value)) || value == undefined) && setValor(value)}
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
                        <button type="submit" disabled={isLoading}>{isLoading ? <LoadingDots /> : "Salvar saida"}</button>
                    </InputsContainer>
                </form>
            </HomeScreenContainer>
        </>
    )
}
