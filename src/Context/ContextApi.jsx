import { createContext, useState } from "react";

//create Global Context

export const GlobalContext = createContext()

// create Gblobal state
export const GlobalState = ({children}) => {
     const [theme, setTheme] = useState('light-mode')

    return <GlobalContext.Provider value={{theme, setTheme}}>
         {children}
    </GlobalContext.Provider>
}