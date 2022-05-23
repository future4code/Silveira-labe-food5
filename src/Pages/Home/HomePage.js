import React, { useContext, useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import { GlobalStateContext } from '../../Context/GlobalStateContext';
import { InputContainer, ScreenContainer, StyledContainerPage } from '../../Styles/Styled';
import { StyledDivImage, StyledDivRestaurant, StyledSearch, StyledSearchIcon } from './Styled';
import ScrollableTabs from './ScrollableTabs';
import { useNavigate } from 'react-router-dom';
import { goToRestaurante } from '../../Routes/coordinator';
import useProtectedPage from '../../Hooks/useProtectedPage';


export default function HomePage () {
    const [ search, setSearch ] = useState("");
    const { data } = useContext(GlobalStateContext);
    const { restaurants, setNameHeader, setButtonBack, category } = data;
    const navigate = useNavigate();
    useProtectedPage();

    const onClickCard = (id) => {
        goToRestaurante(navigate, id);
    };

    const onChangeSearch = (e) => setSearch(e.target.value);

    useEffect(() => {
        setNameHeader("FutureEats");
        setButtonBack(false);
    },[]);

    const restaurantesOp = restaurants && restaurants.filter( ( (restaurant) => { 
        return ( !search ? true : restaurant.name.toLowerCase().includes(search.toLowerCase()))
       && ( !category ? true : restaurant.category.toLowerCase().includes(category.toLowerCase()))
    })).map( (restaurant) => {
        return( 
            <StyledDivRestaurant key={restaurant.id}>
                <StyledDivImage onClick={()=> onClickCard(restaurant.id)}>
                    <img className='image' src={restaurant.logoUrl}/>
                </StyledDivImage>
                <div>
                   <p className='restaurant-name'>{restaurant.name}</p> 
                </div>
                <div className='time-shipping'>
                    <p>{restaurant.deliveryTime} min</p>
                    <p>Frete R${restaurant.shipping},00</p>
                </div>
            </StyledDivRestaurant>
        )
    }) 

    console.log(restaurants);

    return(
        <ScreenContainer>
            <Header/>
            <InputContainer>
                <StyledContainerPage>
                    <StyledSearch>
                        <div>
                            <StyledSearchIcon />
                        </div>
                        <input 
                            className='input-search' 
                            type="text" 
                            placeholder="Restaurante" 
                            name="search" value={search} 
                            onChange={onChangeSearch}
                        />
                    </StyledSearch>
                    <ScrollableTabs />
                    {restaurantesOp.length > 0 ? restaurantesOp : <p>{"Não encontramos :("}</p>}
                </StyledContainerPage>
            </InputContainer>
        </ScreenContainer>
    )
}
