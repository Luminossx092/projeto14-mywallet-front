import styled from "styled-components"
import { Colors } from "../constants/constants"

export const HomePageContainer = styled.div`
    height: 446px;
    width: 326px;
    margin: 13px auto;
    margin-top:78px;
    border-radius: 5px;
    background-color: white;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    box-sizing:border-box;
    h1{
        margin: 0 73px;
        font-size: 16px;
        font-weight:400;    
        text-align:center;
        color: ${Colors.greyColor}
    }
`
export const InputsContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    gap: 13px;
    margin-bottom:25px;
    button{
        height: 45px;
        width: 303px;
        border-radius: 5px;
        background-color: ${Colors.buttonColor};
        color:white;
        font-size: 21px;
        border:none;
    }
    Audio{
        display:flex;
        justify-content:center;
        color:red;
    }
`
export const ButtonHomePageContainer = styled.div`
    width: 326px;
    margin:0 auto;
    gap:15px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`

export const NewEntryButtonContainer = styled.div`
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
export const DadosContainer = styled.div`
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

export const SaldoTotalContainer = styled.div`
    width:300px;
    display:flex;
    justify-content:space-between;
    h1{
        font-weight:700;
        font-size: 17px;
    }
`

export const SaldoTotalStyled = styled.p`
    color: ${props => props.saldo >= 0 ? Colors.positiveColor : Colors.negativeColor}
`