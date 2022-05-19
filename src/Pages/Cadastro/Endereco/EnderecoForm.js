import React, { useState } from 'react';
import { InputContainer, ScreenContainer, StyledForm } from '../../../Styles/Styled';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import useForm from '../../../Hooks/useForm';
import { addAdress } from '../../../services/User';
import { useNavigate } from 'react-router-dom';

const EnderecoForm = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const { form, onChange, cleanField } = useForm({
        street: "",
        number: "",
        neighbourhood: "",
        city: "",
        state: "",
        complement: "",
    });

    const onSubmitForm = (event) => {
        event.preventDefault();
        addAdress(form, navigate, cleanField, setIsLoading);
    }; 

    return (
        <ScreenContainer>
            <InputContainer>
                <p>Meu Endereço</p>
                <StyledForm onSubmit={onSubmitForm}>
                    <TextField
                        margin='normal'
                        fullWidth
                        id="outlined-disabled" 
                        label="Logradouro" 
                        variant="outlined" 
                        InputLabelProps={{ shrink: true }}
                        value={form.street}
                        name={'street'}
                        onChange={onChange}
                        placeholder={'Rua/Av.'}
                        required
                    />
                    <TextField
                        margin='normal'
                        fullWidth
                        id="outlined-disabled" 
                        label="Número" 
                        variant="outlined" 
                        InputLabelProps={{ shrink: true }}
                        value={form.number}
                        name={'number'}
                        onChange={onChange}
                        type={'number'}
                        placeholder={'Número'}
                        required
                    />
                    <TextField
                        margin='normal'
                        fullWidth
                        id="outlined-disabled" 
                        label="Complemento" 
                        variant="outlined" 
                        InputLabelProps={{ shrink: true }}
                        value={form.complement}
                        name={'complement'}
                        onChange={onChange}
                        placeholder={'Apto./Bloco'}
                    />
                    <TextField
                        margin='normal'
                        fullWidth
                        id="outlined-disabled" 
                        label="Bairro" 
                        variant="outlined" 
                        InputLabelProps={{ shrink: true }}
                        value={form.neighbourhood}
                        name={'neighbourhood'}
                        onChange={onChange}
                        placeholder={'Bairro'}
                        required
                    />
                    <TextField
                        margin='normal'
                        fullWidth
                        id="outlined-disabled" 
                        label="Cidade" 
                        variant="outlined" 
                        InputLabelProps={{ shrink: true }}
                        value={form.city}
                        name={'city'}
                        onChange={onChange}
                        placeholder={'Cidade'}
                        required
                    />
                    <TextField
                        margin='normal'
                        fullWidth
                        id="outlined-disabled" 
                        label="Estado" 
                        variant="outlined" 
                        InputLabelProps={{ shrink: true }}
                        value={form.state}
                        name={'state'}
                        onChange={onChange}
                        placeholder={'Estado'}
                        required
                    />
                    <Button
                        fullWidth 
                        variant={"contained"} 
                        color={"secondary"} 
                        margin={"normal"}
                        type={"submit"}
                    >
                        {isLoading ? <CircularProgress color={"primary"} size={24}/> : <>Salvar</>}
                    </Button>
                </StyledForm>
            </InputContainer>
        </ScreenContainer>
    );
};

export default EnderecoForm;