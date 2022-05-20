import styled from "styled-components";
import { secondaryColor } from "../../Constants/colors";

export const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    border: none;
    margin: 0 auto;
    width: 100vw;
    height: 100vh;
    /* padding-bottom: 57vh;
    margin: -1.2vh; */
`

export const StyledLogoToast = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    #main-text {
        display: flex;
        flex-direction: column;
        font-size: 300%;
        color: white;
        line-height: 40px;
    }

    #snd-text {
        font-weight: bold;
        color: ${secondaryColor};
    }
`;

export const NomeContainer = styled.div `
    padding-top: 50%;
`

export const Nome1 = styled.div `
    color: white;
    text-align: center;
    font-size: 36px;
    letter-spacing: -0.1px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, regular;
`

export const Nome2 = styled.div `
    color: #50a747;
    text-align: center;
    font-size: 34px;
    font-weight: bold;
    letter-spacing: -0.1px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, regular;
`

