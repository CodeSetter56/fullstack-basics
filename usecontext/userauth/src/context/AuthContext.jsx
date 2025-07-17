import { createContext, useContext, useState } from "react";

//create a context for user authentication
//this will be used to provide the user context to all components
const userContext = createContext({
    user:null,
    login: () => {},
    logout: () => {},
})

//create a provider component
//this will be used to wrap the app and provide the user context to all components
export const UserProvider = ({children}) =>{
    const [user, setuser] = useState(null)
    const login = (user) => {
        setuser(user);
    }
    const logout = () => {
        setuser(null);
    }

    //return the provider component with the user context value
    //this value will be available to all components that use the useUser hook
    return (
        <userContext.Provider value={{ user, setUser: login, logout }}>
            {children}
        </userContext.Provider>
    )
}

//create a custom hook to use the user context
//this will allow us to access the user context in any component
export const useUser = () => {
    return useContext(userContext);
}