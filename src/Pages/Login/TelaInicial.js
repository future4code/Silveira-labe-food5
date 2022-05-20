import React from "react";
import { InputContainer } from "../../Styles/Styled";
import { Container, StyledLogoToast } from "./TelaInicialStyle";

export default function TelaInicial() {
  return (
    <Container>
      <InputContainer>
        <StyledLogoToast>
          <p id='main-text'>Future <span id='snd-text'>Eats</span></p>
        </StyledLogoToast>
      </InputContainer>
    </Container>
  );
}