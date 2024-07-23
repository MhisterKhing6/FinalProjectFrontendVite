import { createContext, useState } from "react";
import { getFromBackend } from "../utils/backendCalls";
import { token } from "../utils/config";
import { getToken } from "../utils/localstorage";

const LecturerContext = createContext()

const  loadDetails = async (setData, lecturer, setLoading, setAuth, redirect) => {
    let userToken = getToken(token.lecturerTokenKey)
    if(lecturer.name) {
        setLoading(false)
        return true
    }
    if(userToken){
        let response = await getFromBackend("/user/lecturer/me",userToken)
        if(response.status === 403) {
            response = await postToBackend("/auth/lecturer/refresh/token",{refresh_token: getToken(token.lecturerRefresh)})
            //save new tokens
            if(response.status === 200) {
            saveToken(token.lecturerTokenKey, response.data.token)
            saveToken(token.lecturerRefresh, response.data.refresh_token)
            //use token to get new data
            response = await getFromBackend("/user/lecturer/me",getToken(token.lecturerTokenKey))
            }
        }
        if(response.status === 200) {
            setData({...response.data})
            setAuth(true)
            setLoading(false)
            console.log(lecturer)
            return true
        }
         else {
            setLoading(false)
            return redirect("/auth/login/lecturer")
         }
         
    }else {
        setLoading(false)
        return redirect("/auth/login/lecturer")
    }
    
}

const LecturerContextProvider = ({children}) => {
    let [lecturer, setLecturer] = useState({})
    let [authenticated, setAuthenticated] = useState(getToken(token.lecturerTokenKey)? true : false)


    return (<LecturerContext.Provider value={{lecturer,authenticated, setAuthenticated, loadDetails, setLecturer}}>
            {children}
            </LecturerContext.Provider>)
}

export { LecturerContext, LecturerContextProvider };
