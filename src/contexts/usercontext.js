import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext()

export const useAuth = ()=>{
    return useContext(UserContext)
}
export const UserState = ({children})=>{
    const [user, setUser] = useState(localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):{})
    useEffect(()=>{
        localStorage.setItem('user', JSON.stringify(user))
    },[user])
    const value = {
        user,
        setUser
    }

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}