import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {url} from '../../constants/Url'
import ProductsSection from '../../Components/ProductSection/ProductSection';


export default function Restaurante () {

    const [restaurantDetails, setRestaurantDetails] = useState([])
    const [productsMenu, setProductsMenu] = useState([])

    const URL = `${url}/restaurants/1`;

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
        <div>
            <div>
                <img src={restaurantDetails.logoUrl} alt={"Logo do restaurante"}/> 
            </div>
            <h2> {restaurantDetails.name} </h2>
            <p> {restaurantDetails.category} </p> 
            <span> {restaurantDetails.deliveryTime} min </span>
            <span> Frete: {restaurantDetails.shipping === 0 ? "Grátis" : `R$ ${restaurantDetails.shipping},00`}</span> 
            <p> {restaurantDetails.address} </p> 

            <div>
                <ProductsSection productsMenu={productsMenu} />
            </div>
        </div>
    );
}