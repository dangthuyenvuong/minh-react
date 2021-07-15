import { createContext, useState, useContext } from 'react'
import authService from '../services/auth'


export let Context = createContext()


let user = JSON.parse(localStorage.getItem('auth'))

export default function AuthProvider({ children }) {
    let [auth, setAuth] = useState({
        login: !!user,
        user
    })

    async function loginHandle(form) {
        let result = await authService.login(form)

        if (result.error) {
            return { error: result.error }
        }

        localStorage.setItem('auth', JSON.stringify(result.data))
        localStorage.setItem('token', JSON.stringify(result.data.token))

        setAuth({
            login: true,
            user: result.data
        })

        return true;
    }

    function logoutHandle() {
        localStorage.removeItem('auth')
        localStorage.removeItem('token')
        setAuth({
            login: false,
            user: null
        })
    }


    return <Context.Provider value={{ ...auth, loginHandle, logoutHandle }}>{children}</Context.Provider>
}


export function useAuth(){
    return useContext(Context)
}