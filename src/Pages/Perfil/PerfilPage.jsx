import React from 'react';



import {InfoUser, Name, AddressUser, Historic} from './style'

import { MainContainer, Header, Container, Title } from '../../Styles/style'


export default function Perfil () {


    return (
        <MainContainer>
            
            <Header>
                <Title>Meu Perfil</Title>
            </Header>

            <Container>

                <InfoUser>
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