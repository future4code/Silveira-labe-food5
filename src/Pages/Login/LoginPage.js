import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import { CadastroPage, goToHomePage } from "../../Routes/coordinator";
import { url } from "../../Constants/Url";
import { Container, HeaderContainer, Nome1, Nome2, Titulo, InputsContainer, ButtonContainer, CadastroContainer } from "./LoginStyle";


const LoginPage = () => {
  const navigate = useNavigate();

  const { form, onChange, cleanField } = useForm({ email: "", password: "" });
  const login = (event) => {
    event.preventDefault();
    axios
      .post(`${url}/login`, form)
      .then((res) => {
        console.log(res.data.token);
        localStorage.setItem("token", res.data.token);
        goToHomePage(navigate);
        cleanField();
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <Container>
      <HeaderContainer>
        <Nome1>Future</Nome1>
        <Nome2>Eats</Nome2>
      </HeaderContainer>

      <Titulo>Entrar</Titulo>

      <form onSubmit={login}>
        <InputsContainer>
          <input
            placeholder="email@email.com"
            name="email"
            type={"email"}
            value={form.email}
            onChange={onChange}
            margin={"normal"}
            variant={"outlined"}
            required
          ></input>

          <input
            placeholder="Mínimo 6 caracteres"
            name="password"
            type={"password"}
            value={form.password}
            onChange={onChange}
            pattern={"^.{6,}"}
            margin={"normal"}
            variant={"outlined"}
            title={"Sua senha deve ter no mínimo 6 caracteres"}
            required
          ></input>
        </InputsContainer>

        <ButtonContainer>
          <button onClick={() => navigate}>Entrar</button>
        </ButtonContainer>

        <CadastroContainer>
          <p>
            Não possui cadastro? 
            <span onClick={() => CadastroPage(navigate)}> Clique aqui</span>
          </p>
        </CadastroContainer>
      </form>
    </Container>
  );
};

export default LoginPage;
