import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { BaseURL } from "../constants/constants"
import LoadingDots from "../components/LoadingDots";
import { InputStyle } from "../styles/inputStyle"
import { InputsContainer } from "../styles/SignInPageStyled"
import { HomeScreenContainer } from "../styles/SignInPageStyled";

export default function RegistryPage() {
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }
    function TryRegistry(e) {
        e.preventDefault();
        setIsLoading(true)
        axios.post(`${BaseURL}auth/sign-up`, form)
            .then(() => {
                setIsLoading(false);
                navigate("/")
            })
            .catch((e) => {
                alert(e.response.data.message);
                setIsLoading(false);
            })
    }
    return (
        <HomeScreenContainer>
            <h1>MyWallet</h1>
            <form onSubmit={TryRegistry}>
                <InputsContainer>
                    <InputStyle
                        type="text"
                        name="name"
                        onChange={handleForm}
                        value={form.name}
                        disabled={isLoading}
                        required
                        placeholder="Nome" />
                    <InputStyle
                        type="email"
                        name="email"
                        onChange={handleForm}
                        value={form.email}
                        disabled={isLoading}
                        required
                        placeholder="E-mail" />
                    <InputStyle
                        type="password"
                        name="password"
                        onChange={handleForm}
                        value={form.password}
                        disabled={isLoading}
                        required
                        placeholder="Senha" />
                    <InputStyle
                        type="password"
                        name="confirmPassword"
                        onChange={handleForm}
                        value={form.confirmPassword}
                        disabled={isLoading}
                        required
                        placeholder="Confirme a senha" />
                    <button type="submit" disabled={isLoading}>{isLoading ? <LoadingDots /> : "Cadastrar"}</button>
                </InputsContainer>
            </form>
            <Link to={"/"} style={{ textDecoration: 'none' }}><p>Já tem uma conta? Entre agora!</p></Link>
        </HomeScreenContainer>
    )
}