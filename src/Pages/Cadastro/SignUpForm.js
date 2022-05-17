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
            label={'Nome'}
            variant={'outlined'}
            fullWidth
            required
            autoFocus
            margin={'normal'}
          />
          <input
            value={form.email}
            name={'email'}
            onChange={onChange}
            label={'E-mail'}
            variant={'outlined'}
            type={'email'}
            fullWidth
            required
            margin={'normal'}
          />
          <input
            value={form.password}
            name={'password'}
            onChange={onChange}
            label={'Senha'}
            variant={'outlined'}
            type={'password'}
            fullWidth
            required
            margin={'normal'}
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
