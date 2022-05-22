import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { GlobalStateContext } from './GlobalStateContext'
import { url } from '../Constants/Url'
// import {useparams} from "react-router-dom"

export default function GlobalState(props) {
	// const params = useParams()
	// const { id } = useParams()
	const [restaurants , setrestaurants] = useState([]);
	// const [menu, setmenu] = useState([]);
	// const [adress, setadress] = useState({});
	// const [profile, setprofile] = useState({});
	// const [updateprofile, setupdateprofile] =useState({});
	// const [order, setorder] = useState({});
	
	const [ nameHeader, setNameHeader ] = useState("");
	const [ buttonBack, setButtonBack ] = useState(false)
	const [ category, setCategory ] = useState("")

	// const getData = () => { 
	
	//         axios.get(`${url}${endpoint}`, {
	//                   headers: {auth: localStorage.getItem("token")}})
	//              .then((response) => setData(response.data))
	//              .catch((error) => alert(error.response.Data.message))
	//     return [data, getData]
	//                            } 
	
	//     useEffect(() => { getData() }, [endpoint]) 
	

	
	
	useEffect(() => {
		getrestaurants(); 
	//       getrestaurantsDetails(); 
	//       getaddEndereco();
	//       getEndereco();
	//       getprofile();
	//       getorder();
	
	}, []); 
	
	const getrestaurants = () => {
		axios.get(`${url}/restaurants`, {headers:{auth: localStorage.getItem("token")}})
		.then((response) => {
			setrestaurants(response.data.restaurants)
		})
		.catch((error) => console.log(error.message))
	};
	
	
	
	useEffect(() => {
		const NovaList = [];
		restaurants.forEach((item) => {
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
	
	// const getrestaurantsDetails = () =>{ 
	
	//            axios.get( `${url}/futureEatsB/restaurants/${params.id}`, {headers: { auth: "token"} } 
	//                              )
	//                      
	//                      .then((response)=>{setmenu(response.data.restaurants.products)} )
	//                      
	//                     .catch((error) => console.log(error.message));
	//     } 
	
	 
	
	// const getaddEndereco = () =>{ 
	
	//            axios.put( `${url}/futureEatsB/adress`, body, {headers: { auth: "token"} } 
	//                              )
	//                      
	//                      .then((response)=>{setadress(response.data.results)} )
	//                      
	//                     .catch((error) => console.log(error.message));
	//     }; 
	
	
	
	
	
	// const getEndereco = () =>{ 
	
	//            axios.get( `${url}/futureEatsB/profile/adress`, body, {headers: { auth: "token"} } 
	//                              )
	//                      
	//                      .then((response)=>{setadress(response.data.results)} )
	//                      
	//                     .catch((error) => console.log(error.message));
	//     }; 
	
	
	
	
	// const getprofile = () =>{ 
	
	//            axios.put( `${url}/futureEatsB/profile`, body, {headers: { auth: "token"} } 
	//                              )
	//                      
	//                      .then((response)=>{setprofile(response.data.results)} )
	//                      
	//                     .catch((error) => console.log(error.message));
	//     }; 
	
	
	
	// const getupdateprofile = (getprofile) => { 
	// axios.put(`${url}/futureEatsB/profile`, body, { headers: {auth: localStorage.getItem("token")} }) .then(() => { alert("Perfil atualizado") })  .catch((error) => alert(error.response.data.message))}
	
	
	// const foodOrder = (body,  clear) => {
	//     axios.post(`${url}/futureEatsB/restaurants/${restaurants.id}/order`, body)
	//          .then(() => {
	//             alert("Pedido feito")
	//             clear()
	//         })
	//          .catch((error) => alert(error.response.message))
	// } 
	
	// const getorder = () =>{ 
	
	//            axios.put( `${url}/futureEatsB/active-order`, body, {headers: { auth: "token"} } 
	//                              )
	//                      
	//                      .then((response)=>{order (response.data.results)} )
	//                      
	//                     .catch((error) => console.log(error.message))
	//     }
	
	
	
	// const getorders = () =>{ 
	
	//            axios.put( `${url}/futureEatsB/ordens/history`, {headers: { auth: "token"} } 
	//                              )
	//                      
	//                      .then((response)=>{order (response.data.results)} )
	//                      
	//                     .catch((error) => console.log(error.message))
	//     }
	
	
	const data = {
		restaurants,
		nameHeader,
		setNameHeader,
		buttonBack,
		setButtonBack,
		category,
		setCategory,
	// setrestaurants,
	// menu,
	//        setmenu
	//         
	};
	
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
