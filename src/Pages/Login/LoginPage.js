import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../Hooks/useForm";
import { CadastroPage, goToHomePage } from "../../Routes/coordinator";
import { url } from "../../constants/Url";
import { Container, HeaderContainer, Nome1, Nome2, Titulo, InputsContainer, ButtonContainer, CadastroContainer } from "./LoginStyle";


const LoginPage = () => {
  const navigate = useNavigate();

  const { form, onChange, clear } = useForm({ email: "", password: "" });
  const login = (event) => {
    event.preventDefault();
    axios
      .post(`${url}/users/login`, form)
      .then((res) => {
        console.log(res.data.token);
        localStorage.setItem("token", res.data.token);
        goToHomePage(navigate);
        clear();
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
            value={""}
            onChange={""}
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
            <span onClick={() => CadastroPage(navigate)}>Clique aqui</span>
          </p>
        </CadastroContainer>
      </form>
    </Container>
  );
};

export default LoginPage;
