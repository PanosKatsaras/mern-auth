import { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios'

export const AppContext = createContext()

export const AppContextProvider = (props) => {

    axios.defaults.withCredentials = true

    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userData, setUserData] = useState(null)

    const getAuthState = async () => {
        try{
            const {data} = await axios.get(`${backendUrl}/api/auth/is-auth`)
            if(data.success) {
                setIsLoggedIn(true)
                getUserData(); 
            } else {
                setIsLoggedIn(false);
                setUserData(null); // Ensure userData is cleared if not authenticated
                toast.error(data.message);
            }
        } catch (error) {
            console.error(error)
            toast.error(data.message);
        }
    }

    const getUserData = async () => {
        try{
            const {data} = await axios.get(backendUrl + '/api/user/data')
            data.success ? setUserData(data.userData) : toast.error(data.message)
        } catch (error) {
            console.error(error)
            toast.error(error.message || 'Something went wrong')
        }
    }

    useEffect(() => {
        getAuthState()
    },[])

    const values = { 
        backendUrl,
        isLoggedIn, setIsLoggedIn,
        userData, setUserData,
        getUserData
    }

    return (
        <AppContext.Provider value={values}>
        {props.children}
        </AppContext.Provider>
    )
};