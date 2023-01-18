import styled from "styled-components"
import { Colors } from "../constants/constants"

export const HomeScreenContainer = styled.div`
    height: 667px;
    width: 375px;
    margin:0 auto;
    background-color: ${Colors.backgroundColor};
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    h1{
        margin-bottom:30px;
        color:white;
        font-family: 'Saira Stencil One', cursive;
        font-size: 32px;
        font-weight: 400;
    }
    p{
        margin-top:6px;
        font-size: 15px;
        color:white;
        line-height: 17px;
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