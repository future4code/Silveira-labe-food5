import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../../Routes/coordinator";
import { InputContainer } from "../../Styles/Styled";
import { Container, StyledLogoToast } from "./TelaInicialStyle";

export default function TelaInicial() {
  const [ contador, setContador ] = useState(0);
  const navigate = useNavigate();

  useEffect( () => {
    if(contador === 20000){
      goToHomePage(navigate);
    }
    else {
      setContador(contador + 1);
    }

  }, [contador])

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