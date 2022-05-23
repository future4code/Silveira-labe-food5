import styled from 'styled-components';
import { primaryColor, secondaryColor, mainColor } from "../Constants/colors";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`;

export const StyledLogo = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    #main-text {
        display: flex;
        flex-direction: column;
        font-size: 300%;
        color: ${primaryColor};
        line-height: 40px;
    }

    #snd-text {
        font-weight: bold;
        color: ${secondaryColor};
    }
`;

export const StyledForm = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 100%;
`;

export const StyledContainerPage = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 85%;
    height: 100%;
`;

export const ScreenContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    min-height: 100vh;
`;

export const InputContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 600px;
`;

export const MainContainer = styled.div `
    display:flex; 
    flex-direction: column;
    flex-wrap: nowrap;
    
`;

export const Container = styled.div `
    display:flex; 
    flex-direction: column;
    flex-wrap: nowrap;

`;

export const Header = styled.header `
    display : flex; 

`;
//--------------------------------------  Card
export const StyledCard = styled.div `
    display: flex;
    border: 2px solid ${mainColor};
    border-radius: 10px;
    width: 100%;
    height: 15vh;
    margin: 10px;
`;

export const StyledImgCard = styled.div `
    width: 30%;
    height: 100%;
    margin-right: 5%;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px 0 0 10px;
    }
`;

export const StyledDivCardInfo = styled.div `
    display: flex;
    flex-direction: column;
    width: 65%;
    height: 100%;
`;

export const StyledInputDesc = styled.div `
    width: 100%;
    height: 70%;
    line-height: 15px;

    .name {
        font-size: 1.2rem;
        color: ${secondaryColor};
    }

    .description {
        font-size: 0.8rem;
        color: ${mainColor};
    }
`;

export const StyledSections = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    hr {
        border: none;
        background: ${primaryColor};
        width: 100%;
        height: 1px;
    }
`;

export const StyledDivButton = styled.div `
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    height: 30%;
    padding-left: 0.1rem;

    .price {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        height: 100%;
        font-size: 1.2rem;
        margin-top: 0.15rem;
    }
`;

export const StyledButtonCard = styled.button `
    background: white;
    border: 2px solid ${secondaryColor};
    color: ${secondaryColor};
    height: 102%;
    width: 30%;
    border-radius: 10px 0 10px 0;
    top: 0.1rem;
    position: relative;
`;
// -------------------------------- 

export const StyledRestaurant = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 40vh;
    border-radius: 10px 10px 0 0;
    margin: 20px 0;
    color: ${mainColor};

    .div-img {
        width: 100%;
        height: 50%;
    }

    .img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px 10px 0 0;
        }

    .name-restaurant {
        color: ${secondaryColor};
    }

    .time-shipping {
        display: flex;
        width: 50%;
        justify-content: space-between;
    }
`;


export const Title = styled.h1 `  `
export const Form  = styled.form `  `
export const Button= styled.div `  `
export const Input= styled.div`  `


