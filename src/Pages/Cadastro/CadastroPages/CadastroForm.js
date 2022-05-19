import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import useForm from "../../../Hooks/useForm.js";
import { signUp } from '../../../services/User.js';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

//Input password import:
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { ScreenContainer, InputContainer, StyledLogo, StyledForm } from '../../../Styles/Styled.js';

const CadastroForm = () => {
  const navigate = useNavigate();
  
  const { form, onChange, cleanField } = useForm({ name: '', email: '', cpf: '', password: '' });

  const [isLoading, setIsLoading] = useState(false);
  const [ passwordSnd, setPasswordSnd ] = useState("");
  const [ helper, setHelper ] = useState("");
  const [ error, setError ] = useState(false);
  const [ showPassword, setShowPassword ] = useState(false);

  const onSubmitForm = (event) => {
    event.preventDefault();
    setError(false);
    setHelper("");

    if(form.password === passwordSnd){
      signUp(form, navigate, cleanField, setIsLoading);
    }
    else if(form.password !== passwordSnd){
      setError(true);
      setHelper("Deve ser a mesma que a anterior.");
    }

  }; 

  return (
    <ScreenContainer>
      <InputContainer>
        <StyledLogo>
          <p id='main-text'>Future <span id='snd-text'>Eats</span></p>
        </StyledLogo>
        <p>Cadastrar</p>
        <StyledForm onSubmit={onSubmitForm}>
          <TextField
            margin='normal'
            fullWidth
            id="outlined-disabled" 
            label="Nome" 
            variant="outlined" 
            InputLabelProps={{ shrink: true }}
            value={form.name}
            name={'name'}
            onChange={onChange}
            placeholder={'Nome'}
            required
          />
          <TextField
            margin='normal'
            fullWidth
            id="outlined-disabled" 
            label="E-mail" 
            variant="outlined" 
            InputLabelProps={{ shrink: true }}
            value={form.email}
            name={'email'}
            onChange={onChange}
            type={'email'}
            placeholder={'E-mail'}
            required
          />
          <TextField 
            margin='normal'
            fullWidth
            id="outlined-disabled" 
            label="CPF" 
            variant="outlined" 
            InputLabelProps={{ shrink: true }}
            value={form.cpf}
            name={'cpf'}
            onChange={onChange}
            placeholder={'000.000.000-00'}
            required
            pattern={"[0-9]{3}[.][0-9]{3}[.][0-9]{3}[-][0-9]{2}"}
            title={"Deve seguir o formato: 000.000.000-00."}
          />
          <TextField
            margin='normal'
            fullWidth
            id="outlined-disabled" 
            label="Senha"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            value={form.password}
            onChange={onChange}
            name={'password'}
            type={showPassword ? 'text' : 'password'}
            placeholder={'Mínimo 6 caracteres'}
            required
            pattern={"^.{6,}"}
            title={"Sua senha deve ter no mínimo 6 caracteres."}
            
          />
          {/* <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-disabled">Senha</InputLabel>
          <OutlinedInput
            pattern={"^.{6,}"}
            title={"Sua senha deve ter no mínimo 6 caracteres."}
            id="outlined-disabled"
            type={showPassword ? 'text' : 'password'}
            value={form.password}
            name={'password'}
            onChange={onChange}
            placeholder={'Mínimo 6 caracteres'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="password visibility"
                  onClick={(e) => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
            required
          />
          </FormControl> */}
          <TextField
            margin='normal'
            fullWidth
            id="outlined-disabled" 
            label="Confirmar senha" 
            variant="outlined" 
            InputLabelProps={{ shrink: true }}
            value={passwordSnd}
            name={'passwordSnd'}
            onChange={(e) => setPasswordSnd(e.target.value)}
            type={'password'}
            placeholder={'Confirmar senha'}
            required
            helperText={helper}
            error={error}  
          />
          <Button
            fullWidth 
            variant={"contained"} 
            color={"secondary"} 
            margin={"normal"}
            type={"submit"}
          >
            {isLoading ? <CircularProgress color={"primary"} size={24}/> : <>Criar</>}
          </Button>
        </StyledForm>
      </InputContainer>
    </ScreenContainer>
  )
}

export default CadastroForm;