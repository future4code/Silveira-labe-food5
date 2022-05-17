import React from 'react'
// import axios from 'axios'
import { GlobalStateContext } from './GlobalStateContext'



export default function GlobalState(props) {
	
    
    
    
    const states = {   }
	const setters = {}
	const requests = {}
	const func = {}

    return (
		<GlobalStateContext.Provider value={{states,setters,requests,func}}>
			{props.children}
		</GlobalStateContext.Provider>
	)
}
