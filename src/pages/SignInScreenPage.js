import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BaseURL } from "../constants/constants"
import LoadingDots from "../components/LoadingDots"
import { InputStyle } from "../styles/inputStyle"
import { HomeScreenContainer, InputsContainer } from "../styles/SignInPageStyled"

export default function HomeScreen({ setLoginData }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    function TryLoggingIn(e) {
        e.preventDefault();
        setIsLoading(true);
        axios.post(`${BaseURL}/login`, { email, password })
            .then((r) => {
                setLoginData(r.data);
                setIsLoading(false);
                navigate("/home")
            })
            .catch((e) => {
                alert(e);
                setIsLoading(false);
            })
    }
    return (
        <HomeScreenContainer>
            <h1>MyWallet</h1>
            <form onSubmit={TryLoggingIn}>
                <InputsContainer>
                    <InputStyle type={"email"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mail"
                        disabled={isLoading}
                        required />
                    <InputStyle type={"password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Senha"
                        disabled={isLoading}
                        required />
                    <button type="submit" disabled={isLoading}>{isLoading ? <LoadingDots /> : "Entrar"}</button>
                </InputsContainer>
            </form>
            <Link to={'/cadastro'} style={{ textDecoration: 'none' }}><p>Primeira vez? Cadastre-se!</p></Link>
        </HomeScreenContainer>
    )
}