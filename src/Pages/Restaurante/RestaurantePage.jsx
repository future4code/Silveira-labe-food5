import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios'
import {url} from '../../Constants/Url'
import ProductsSection from '../../Components/ProductSection/ProductSection';
import { InputContainer, ScreenContainer, StyledContainerPage, StyledRestaurant } from '../../Styles/Styled';
import Header from '../../Components/Header/Header';
import { GlobalStateContext } from '../../Context/GlobalStateContext';


export default function Restaurante () {

    const { data } = useContext(GlobalStateContext);
    const { setNameHeader, setButtonBack } = data;

    const [restaurantDetails, setRestaurantDetails] = useState([])
    const [productsMenu, setProductsMenu] = useState([])

    const URL = `${url}/restaurants/1`;

    useEffect(() => {
        setNameHeader("Restaurante");
        setButtonBack(true);
    },[]);

    const getRestaurantData = () => {
        const token = localStorage.getItem('token')

        axios.get(URL, {headers: {
            auth: token
        }})
        .then((res) => {
            setRestaurantDetails(res.data.restaurant)
            setProductsMenu(res.data.restaurant.products)
        }).catch((err) => {
            console.log(err.data)
        })
    }

    useEffect(() => {
        getRestaurantData()
    }, [URL])
 
    return (
        <ScreenContainer>
            <Header/>
            <InputContainer>
                <StyledContainerPage>
                    <StyledRestaurant>
                        <div className='div-img'>
                            <img className='img' src={restaurantDetails.logoUrl} alt={"Logo do restaurante"}/> 
                        </div>
                        <h2 className='name-restaurant'> {restaurantDetails.name} </h2>
                        <p> {restaurantDetails.category} </p> 
                        <div className='time-shipping'>
                            <span>{restaurantDetails.deliveryTime} min</span>
                            <span>Frete: {restaurantDetails.shipping === 0 ? "Grátis" : `R$ ${restaurantDetails.shipping},00`}</span> 
                        </div>
                        <p> {restaurantDetails.address} </p> 
                    </StyledRestaurant>
                    <div>
                        <ProductsSection productsMenu={productsMenu} />
                    </div>
                </StyledContainerPage>
            </InputContainer>
        </ScreenContainer>
    );
}