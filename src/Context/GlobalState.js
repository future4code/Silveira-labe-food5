import React from 'react'

import axios from 'axios'
import { GlobalStateContext } from './GlobalStateContext'
import { url } from '../constants/Url'
import {useparams} from "react-router-dom"

export default function GlobalState(props) {
	// const params = useParams()
	// const { id } = useParams()
	// const [restaurants , setrestaurants] = useState([]);
	// const [menu, setmenu] = useState([]);
	// const [adress, setadress] = useState({});
	// const [profile, setprofile] = useState({});
	// const [updateprofile, setupdateprofile] = useState({});
	// const [order, setorder] = useState({});
	
	
	
	// const getData = () => { 
	
	//  axios.get(`${url}${endpoint}`, {
	// headers: {auth: localStorage.getItem("token")}})
	//  .then((response) => setData(response.data))
	//  .catch((error) => alert(error.response.Data.message))
	// } 
	
	// useEffect(() => { getData() }, [endpoint]) 
	
	//  return [data, getData]
	
	const getFullAddress = async () => {
	   
		try {
			const response = await axios(`${url}/profile/address`, {auth: localStorage.getItem("token")} )
			console.log(response.data);
		} catch (err) {
			console.log('deu erro no getFullAddress');
			console.log(err.message);
		}
	}
	const getProfile = async () => {
	   
		try {
			const response = await axios(`${url}/profile`, {auth: localStorage.getItem("token")} )
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
			const response = await axios(`${url}/profile`, body, {auth: localStorage.getItem("token")} )
			console.log(response.data);
		} catch (err) {
			console.log('deu erro no putUpdateProfile');
			console.log(err.message);
		}
	}
	
	// useEffect(() => {
	//  getrestaurants(); 
	//  getrestaurantsDetails(); 
	//  getaddEndereco();
	//  getEndereco();
	// getprofile();
	// getorder();
	
	//  }, []); 
	
	// const getrestaurants = () => {
	//  axios.get(url, {headers:{auth: "coloque seu token aqui"}})
	//  .then((response) => {
	//  setrestaurants(response.data.restaurants)
	//  })
	// .catch((error) => console.log(error.message))
	// };
	
	
	
	// useEffect(() => {
	// 	const NovaList = [];
	// 	restaurantes.forEach((item) => {
	// 	  axios.get(`${url}/restaurants`)
	// 	  .then((response) => {
	// 		NovaList.push(response.data);
	// 		if (NovaList.length === 10) {
	// 		  const ListOrdern = NovaList.sort((a, b) => {
	// 			return a.id - b.id;
	// 		  });
	// 		  setrestaurants(ListOrdern);
	// 		}
	// 	  })
	// 	  .catch((error) => console.log(error.message));
	// 	});
	//   }, [restaurants]);
	
	// const getrestaurantsDetails = () =>{ 
	
	// axios.get( `${url}/futureEatsB/restaurants/${params.id}`, {headers: { auth: "token"} } )
	// 	.then((response)=>{setmenu(response.data.restaurants.products)} )
	// 	.catch((error) => console.log(error.message));
	// } 
	
	 
	
	// const getaddEndereco = () =>{ 
	
	// axios.put( `${url}/futureEatsB/adress`, body, {headers: { auth: "token"} } )
	// 	.then((response)=>{
	// 		setadress(response.data.results)}
	// 	)
	// 	.catch((error) => console.log(error.message));
	// }; 
	
	
	
	
	
	// const getEndereco = () =>{ 
	
	// 	axios.get( `${url}/futureEatsB/profile/adress`, body, {headers: { auth: "token"} } )
	// 		.then((response)=>{setadress(
	// 			response.data.results)} 
	// 		)
	// 		.catch((error) => console.log(error.message));
	//  }; 
	
	
	
	
	// const getprofile = () =>{ 
	

			
	// 	axios.put( `${url}/futureEatsB/profile`, body, {headers: { auth: "token"} } )
	// 		.GlobalStatethen((response)=>{
	// 			setprofile(response.data.results)} 
	// 			)
	// 		.catch((error) => console.log(error.message));
	// }; 
	
	
	
	// const getupdateprofile = (getprofile) => { 
	// axios.put(`${url}/futureEatsB/profile`, body, { headers: {auth: localStorage.getItem("token")} }) .then(() => { alert("Perfil atualizado") })  .catch((error) => alert(error.response.data.message))}
	
	
	// const orders = (body, clear) => {
	// axios.post(`${url}/futureEatsB/restaurants/${restaurants.id}/order`, body)
	// 	.then(() => {
	// 		alert("Pedido feito")
	// 		clear()
	// 	})
	// 	.catch((error) => alert(error.response.message))
	// } 
	
	// const getorder = () =>{ 
	// axios.put( `${url}/futureEatsB/active-order`, body, {headers: { auth: "token"} } )
	// 	.then((response)=>{order (response.data.results)} )
	// 	.catch((error) => console.log(error.message))
	// }
	
	
	
	// const getorders = () =>{ 
	
	// 	axios.put( `${url}/futureEatsB/ordens/history`, {headers: { auth: "token"} } )
	// 		.then((response)=>{
	// 			order (response.data.results)
	// 		} )
	// 		.catch((error) => 
	// 		console.log(error.message))
	// }
	
	
	// const data = {restaurant,setrestaurants,menu,setmenu};
	
    const states = {   }
	const setters = {}
	const requests = {}
	const func = {}
	//  data
    return (
		<GlobalStateContext.Provider value={{states,setters,requests,func,}}>
			{props.children}
		</GlobalStateContext.Provider>
	)
}
