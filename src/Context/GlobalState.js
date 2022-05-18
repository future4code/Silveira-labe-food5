import React from 'react'
// import axios from 'axios'
import { GlobalStateContext } from './GlobalStateContext'
import { url } from '../constants/Url'
import {useparams} from "react-router-dom"

export default function GlobalState(props) {
	const params = useParams()
const [restaurants , setrestaurants] = useState([]);
const [menu, setmenu] = useState([]);





useEffect(() => {
 getrestaurants(); 
 getrestaurantsDetails(); 

 }, []); 

const getrestaurants = () => {
 axios.get(url, {headers:{auth: "coloque seu token aqui"}})
 .then((response) => {
 setrestaurants(response.data.restaurants)
 })
 .catch((error) => console.log(error.message))
 }

const getrestaurantsDetails = () =>{ 

 axios.get( `${url}/futureEatsB/restaurants/${params.id}`, {headers: { auth: "token"} } 
)
 
.then((response)=>{setmenu(response.data.restaurants.products)} )

 .catch((error) => console.log(error.message))
 } 






const data = {
restaurant,
setrestaurants,
menu,
 setmenu
 
 };
											  useEffect(() => {
												const NovaList = [];
												restaurantes.forEach((item) => {
												  axios.get(`${url}/restaurants`)
												  .then((response) => {
													NovaList.push(response.data);
													if (NovaList.length === 10) {
													  const ListOrdern = NovaList.sort((a, b) => {
														return a.id - b.id;
													  });
													  setrestaurants(ListOrdern);
													}
												  })
												  .catch((error) => console.log(error.message));
												});
											  }, [restaurants]);
   

	
    const states = {   }
	const setters = {}
	const requests = {}
	const func = {}
	
    return (
		<GlobalStateContext.Provider value={{states,setters,requests,func, data}}>
			{props.children}
		</GlobalStateContext.Provider>
	)
}
