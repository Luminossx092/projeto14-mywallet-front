import styled from "styled-components"
import { Colors } from "../constants/constants"

export default function Registry(props) {
    const { date, description, valor } = props.data;
    return (
        <RegistryContainer>
            <ValorStylized>{date}</ValorStylized>
            <DescriptionContainer>
                <h1>{description}</h1>
            </DescriptionContainer>
            <ValorStylized valor={Number(valor)}>{Number(valor).toFixed(2)}</ValorStylized>
        </RegistryContainer>
    )
}

const RegistryContainer = styled.div`
    width:300px;
    margin-top:15px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:5px;
    p{
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
    }
`
const ValorStylized = styled.p`
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        color: ${props => props.valor ? ((props.valor >= 0) ? Colors.positiveColor : Colors.negativeColor) : Colors.greyWord};
`

const DescriptionContainer = styled.div`
    width:200px;
    display:flex;
    justify-content:flex-start;
    overflow:auto;
    h1{
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        color: black;
    }
`