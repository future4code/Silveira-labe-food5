
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../Pages/Home/HomePage';
import LoginPage from '../Pages/Login/LoginPage';
import PerfilPage from '../Pages/Perfil/PerfilPage';
import RestaurantePage from '../Pages/Restaurante/RestaurantePage'
import BuscarRestaurante from '../Pages/BuscarRestaurante/BuscarRestaurante'
import CadastroPage from '../Pages/Cadastro/CadastroPage'
import CarrinhoPage from '../Pages/Carrinho/CarrinhoPage'



const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/login" element={ <LoginPage  /> } />
                <Route path="/perfil" element={ <PerfilPage  /> } />
                <Route path="/restaurante/:id" element={ <RestaurantePage  /> } />
                <Route path="/buscarRestaurante" element={ <BuscarRestaurante  /> } />
                <Route path="/cadastro" element={ <CadastroPage  /> } />
                <Route path="/carrinho" element={ <CarrinhoPage  /> } />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;