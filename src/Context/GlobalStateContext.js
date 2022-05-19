import React, { useContext } from 'react'

const GlobalStateContext = React.createContext()

export default GlobalStateContext;

export const useGlobal = () => {
    return(
        useContext(GlobalStateContext)
    )
}