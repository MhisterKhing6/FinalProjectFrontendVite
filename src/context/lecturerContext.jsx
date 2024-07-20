import { createContext, useEffect, useState } from "react";
import { getFromBackend } from "../utils/backendCalls";
import { token } from "../utils/config";
import { getToken } from "../utils/localstorage";
import { useNavigate } from "react-router-dom";

const LecturerContext = createContext()

const  loadDetails = async (setData, setLoading) => {
    let data = await getFromBackend("/me",getToken(token.lecturerTokenKey))
    setLoading(false)
    if(data.status === 200)
        setData({...data})
    else {
        alert("res")
    }
    
}

const LecturerContextProvide = ({children}) => {
    const [lecturer, setLecturer] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        loadDetails(setLecturer, setLoading)
    }, [] )

    return (<LecturerContext.Provider value={{lecturer, setLecturer, loading, setLoading}}>
            {children}
            </LecturerContext.Provider>)
}