import React, { useContext, useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import { GlobalStateContext } from '../../Context/GlobalStateContext';
import { InputContainer, ScreenContainer, StyledContainerPage } from '../../Styles/Styled';
import { StyledDivImage, StyledDivRestaurant, StyledSearch, StyledSearchIcon } from './Styled';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function HomePage () {
    const [ category, setCategory ] = useState("")
    const [ search, setSearch ] = useState("");
    const { data } = useContext(GlobalStateContext);
    const { restaurants, setNameHeader, setButtonBack } = data;
    const [ value, setValue ] = useState("");
    const onClickCard = () => {

    }

    console.log(restaurants);

    useEffect(() => {
        setNameHeader("FutureEats");
        setButtonBack(false);
    },[]);

    const RestaurantesOp = restaurants && restaurants.filter( ( (restaurant) => { 
        return ( !search ? true : restaurant.name.toLowerCase().includes(search.toLowerCase()))
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
    )}) 

    const restaurantFilter = ( type ) => { 
        if( type === category) { 
            setCategory("")
        }
        else{
            setCategory(type)
        } 
    } 

    function TabPanel(props) {
        const { children, value, index, ...other } = props;
        
        return (
            <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
            >
            {value === index && (
                <Box p={3}>
                <Typography>{children}</Typography>
                </Box>
            )}
            </div>
        );
    }

    function a11yProps(index) {
        return {
          id: `scrollable-auto-tab-${index}`,
          'aria-controls': `scrollable-auto-tabpanel-${index}`,
        };
    }

    // const restaurantsList = restaurants && restaurants.map( restaurant => {
    //     return (
    //         <StyledDivRestaurant key={restaurant.id}>
    //             <StyledDivImage onClick={onClickCard}>
    //                 <img className='image' src={restaurant.logoUrl}/>
    //             </StyledDivImage>
    //             <div>
    //                <p className='restaurant-name'>{restaurant.name}</p> 
    //             </div>
    //             <div className='time-shipping'>
    //                 <p>{restaurant.deliveryTime} min</p>
    //                 <p>Frete R${restaurant.shipping},00</p>
    //             </div>
    //         </StyledDivRestaurant>
    //     )
    // })

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
                            onChange={(event) => 
                            setSearch(event.target.value)}
                        />
                    </StyledSearch>


                    <AppBar position="static" color="default">
                        <Tabs
                            value={value}
                            onChange={(event) => setValue(event.target.value)}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="scrollable"
                            scrollButtons="auto"
                            aria-label="scrollable auto tabs example"
                        >
                        <Tab label="Item One" {...a11yProps(0)} />
                        <Tab label="Item Two" {...a11yProps(1)} />
                        <Tab label="Item Three" {...a11yProps(2)} />
                        <Tab label="Item Four" {...a11yProps(3)} />
                        <Tab label="Item Five" {...a11yProps(4)} />
                        <Tab label="Item Six" {...a11yProps(5)} />
                        <Tab label="Item Seven" {...a11yProps(6)} />
                        </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0}>
                    Item One
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                    Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                    Item Three
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                    Item Four
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                    Item Five
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                    Item Six
                    </TabPanel>
                    <TabPanel value={value} index={6}>
                    Item Seven
                    </TabPanel>

                    {/* {restaurantsList} */}
                    {RestaurantesOp}
                </StyledContainerPage>
            </InputContainer>
        </ScreenContainer>
    )
}