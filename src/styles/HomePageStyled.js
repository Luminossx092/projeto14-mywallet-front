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