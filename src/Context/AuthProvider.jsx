import { useState } from "react";
import AuthContext from "./AuthContext";
export const AuthProvider = ({children}) => {
    const [isLoged, setIsLoged] = useState(false)
    const [user, setUser] = useState('')
    
    const setLogin = (value) => {
        setIsLoged(value)
    }

    const setPerson = (login) => {
        setUser(login)
    }

return (
    <AuthContext.Provider value={{isLoged, setLogin, user, setPerson}}>
{children}
    </AuthContext.Provider>
)

}