import React from 'react'
// import axios from 'axios'
import { GlobalStateContext } from './GlobalStateContext'
import { url } from '../constants/Url'


export default function GlobalState(props) {
	const [restaurants , setrestaurants] = useState([]);
    
     const login = (body, Navigate) => {
		axios.post(`${url}/login`, body)
			 .then((response) => {
				  localStorage.setItem("token", response.data.token)
				  goToAdminPage(Navigate)
								 })
			 .catch((error) => alert(error.response.data.message))
			 
											 };

											  const logout = (Navigate) => {
												                localStorage.removeItem("token")
																             goToLogin(Navigate)
																			                                     }
											 
											 useEffect(() => {
												getrestaurants(); 
											  }, []);
											

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
    const getrestaurants = () => {
		    axios.get(`${url}/restaurant`)
			    .then((response) => {
				      setrestaurants(response.data.results);
					      })
						      .catch((error) => console.log(error.message));
							    };

	
    const states = {   }
	const setters = {}
	const requests = {}
	const func = {}
	const data = {
		restaurant,
		setrestaurants,
		
	  };
    return (
		<GlobalStateContext.Provider value={{states,setters,requests,func, data}}>
			{props.children}
		</GlobalStateContext.Provider>
	)
}
