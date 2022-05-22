import styled from "styled-components";
import { mainColor, primaryNeutralColor, secondaryColor } from "../../Constants/colors";

export const StyledAdress = styled.div `
    display: flex;
    align-items: center;
    width: 100vw;
    height: 10vh;
    background-color: ${primaryNeutralColor};
    margin-bottom: 20px;

    .text-adress {
        margin-left: 20px;
        line-height: 15px;
    }

    .text {
        color: ${mainColor};
    }

    .adress {
        font-weight: bold;
    }
`;

export const StyledTotalPrice = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    .frete {
        display: flex;
        justify-content: flex-end;
        width: 100%;
    }

    .total {
        display: flex;
        justify-content: space-between;
        width: 100%;
        font-weight: bold;
        font-size: 1.2rem;
    }

    .valor {
        color: ${secondaryColor};
    }

    .forma-pagamento {
        display: flex;
        justify-content: flex-start;
        width: 100%;
    }
`;

export const StyledHr = styled.hr `
    width: 100%;
    height: 1px;
    border: none;
    background-color: black;
`;

export const StyledPagamento = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 50px;

    .input-pagamento {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: flex-start;
    }
`;
