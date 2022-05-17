import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import useForm from "../../Hooks/useForm.js";
import {signUp} from "../../services/user";
import CircularProgress from '@material-ui/core/CircularProgress';

const CadastroForm = ({setRightButtonText}) => {
  const navigate = useNavigate();
  const [form, onChange, clear] = useForm({ name: '', email: '', password: '' })
  const [isLoading, setIsLoading] = useState(false)

  const onSubmitForm = (event) => {
    event.preventDefault()
    signUp(form, clear, navigate, setRightButtonText, setIsLoading)
  }

  return (
    <form onSubmit={onSubmitForm}>
      <div>
        <div>
          <input
            value={form.name}
            name={'name'}
            onChange={onChange}
            placeholder={'Nome'}
            required
          />
          <input
            value={form.email}
            name={'email'}
            onChange={onChange}
            type={'email'}
            placeholder={'E-mail'}
            required
          />
          <input
            value={form.password}
            name={'password'}
            onChange={onChange}
            type={'password'}
            placeholder={'Senha'}
            required
            pattern={"^.{8,}"}
            title={"Sua senha deve ter no mínimo 8 caracteres."}
          />
          <input
            value={form.password}
            name={'password'}
            onChange={onChange}
            type={'password'}
            placeholder={'Confirmar senha'}
            required
          />
        </div>
        <button
          color={'primary'}
          variant={'contained'}
          type={'submit'}
          fullWidth
        >
          {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Criar</>}
        </button>
      </div>
    </form>
  )
}

export default CadastroForm;
