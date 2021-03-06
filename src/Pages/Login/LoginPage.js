import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import { CadastroPage, goToHomePage } from "../../Routes/coordinator";
import { url } from "../../Constants/Url";
import { CadastroContainer } from "./LoginStyle";
import { InputContainer, ScreenContainer, StyledForm, StyledLogo } from "../../Styles/Styled";
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { StyledIcon, StyledInputPassword, StyledVisibilityOff } from "../Cadastro/CadastroPages/Styled";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import useUnprotectedPage from "../../Hooks/useUnprotectedPage";

const LoginPage = () => {
  useUnprotectedPage();
  const navigate = useNavigate();
  const { form, onChange, cleanField } = useForm({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [ showPassword, setShowPassword ] = useState(false);

  const login = (event) => {
    event.preventDefault();
    setIsLoading(true);
    axios
      .post(`${url}/login`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        goToHomePage(navigate);
        cleanField();
        setIsLoading(false)
      })
      .catch((error) => {
        alert(error);
        setIsLoading(false)
      });
  };

  return (
    <ScreenContainer>
      <InputContainer>
        <StyledLogo>
          <p id='main-text'>Future <span id='snd-text'>Eats</span></p>
        </StyledLogo>
        <p>Entrar</p>
        <StyledForm onSubmit={login}>
          <TextField
            fullWidth
            id="outlined-disabled" 
            InputLabelProps={{ shrink: true }}
            label="E-mail" 
            placeholder="email@email.com"
            name="email"
            type={"email"}
            value={form.email}
            onChange={onChange}
            margin={"normal"}
            variant={"outlined"}
            required
          />

          <StyledInputPassword>
            <TextField
              fullWidth
              id="outlined-disabled" 
              InputLabelProps={{ shrink: true }}
              label="Senha" 
              placeholder="M??nimo 6 caracteres"
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={form.password}
              onChange={onChange}
              pattern={"^.{6,}"}
              margin={"normal"}
              variant={"outlined"}
              title={"Sua senha deve ter no m??nimo 6 caracteres"}
              required
            />
            <StyledIcon onClick={(e) => setShowPassword(!showPassword)}>
              {showPassword ? <Visibility /> : <StyledVisibilityOff />}
            </StyledIcon>
          </StyledInputPassword>

          {isLoading ? <CircularProgress color={"primary"} size={24}/> 
          : 
          <Button
            fullWidth 
            variant={"contained"} 
            color={"secondary"} 
            margin={"normal"}
            type={"submit"}
          >
            Entrar
          </Button>}

          <CadastroContainer>
            <p> N??o possui cadastro? <span onClick={() => CadastroPage(navigate)}> Clique aqui.</span></p>
          </CadastroContainer>

        </StyledForm>
      </InputContainer>
    </ScreenContainer>
  );
};

export default LoginPage;
