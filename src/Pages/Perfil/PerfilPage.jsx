import React, {useState, useEffect } from 'react';

import axios from 'axios';
import { url } from '../../constants/Url'
import { useForm } from '../../Hooks/useForm';
import {InfoUser, Name, AddressUser, Historic} from './style'

import { MainContainer, Header, Container, Title } from '../../Styles/style'


export default function Perfil () {
    const [perfil,setPerfil] = useState({})
    const [address,setAddress] = useState({})
    
    const token = {"auth":          
        {"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVESFVjN2l5emcwblpYTDBvdVB3IiwibmFtZSI6IkJlcm5hcmRvIiwiZW1haWwiOiJiZXJuYXJkb0BicmFnYS5jb20iLCJjcGYiOiI4ODEuMTc0LjAyMy00NSIsImhhc0FkZHJlc3MiOmZhbHNlLCJpYXQiOjE2NTI5ODAxOTV9.36GL3dIsTvJIpdXHFrOf6vxAyASKtG5alpxJ29npXy4"}
    }
    
    useEffect(()=>{
        getProfile()
        getFullAddress()
    },[])

	const getFullAddress = async () => {
	   
		try {
			const response = await axios.get(`${url}/profile/address`, token )
			console.log(response.data);
		} catch (err) {
			console.log('deu erro no getFullAddress');
			console.log(err.message);
		}
	}
	const getProfile = async () => {
	   
		try {
			const response = await axios.get(`${url}/profile`,token  )
			console.log(response.data);
		} catch (err) {
			console.log('deu erro no getProfile');
			console.log(err.message);
		}
	}

	const putUpdateProfile = async (body) => {
	   /*body tem que ser igual a ==
	   body:{
	"name": "Astrodev",
	"email": "astrodev@future4.com",
	"cpf": "111.111.111-13"
}*/
		try {
			const response = await axios.put(`${url}/profile`, body, {auth: localStorage.getItem("token")} )
			console.log(response.data);
		} catch (err) {
			console.log('deu erro no putUpdateProfile');
			console.log(err.message);
		}
	}
	
    return (
        <MainContainer>
            
            <Header>
                <Title>Meu Perfil</Title>
            </Header>

            <Container>

                <InfoUser >
                    {/* O Container InfoUser tem que permitir um click mandando para a alteracao da informacoes do usuario */}
                    <Name>nome do user</Name>
                    <Name>email do user</Name>
                    <Name>cpf do user</Name>
                </InfoUser>

                <AddressUser>
                    {/* O Container AddressUser tem que permitir a um click para alteracao da informacao de endereco do usuario, pois o usuario pode mudar de casa um dia */}
                    <Name> endereco do usuario </Name>
                </AddressUser>

                <Historic>
                    {/* 
                        Esse Container sera para mostrar o historico de pedidos que o perfil tem , mostrando o  RESTAURANTE , A DATA DO PEDIDO, E O VALOR;
                        A ideia e a de colocar o historico de pedidos em uma variavel no globalState e depois fazer um map do array aqui nesse container
                    */}
                        <p>historico de pedidos que o perfil tem , mostrando o  RESTAURANTE , A DATA DO PEDIDO, E O VALOR</p>
                </Historic>


            </Container>

        </MainContainer>
    );
}









/*
    
    const {form,onChange,cleanField} = useForm({username:'', email:'', password:''})

    const doCheckIn = e => {
        
        e.preventDefault()
        request.postCheckIn(form,navigate,'/feed')

        cleanField();
                   <Form onSubmit={doCheckIn}  >
                <Input 
                    name="email"
                    value={form.email} 
                    onChange={ onChange }
                    placeholder={'digite o seu email'}
                    forHtml="email"
                    required

                /><Input 
                    name="username"
                    value={form.username} 
                    onChange={ onChange }
                    placeholder={'digite o seu nickname'}
                    
                    required

                />
                <Input
                    name="password"
                    value={form.password} 
                    onChange={ onChange }
                    placeholder={'digite o sua Senha'}
                    type="password"
                    required
                />
                <Button> cadastrar</Button>
            </Form>

    }



*/