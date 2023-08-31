import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

export const  useAuthContext =()=>{
    const context = useContext(AuthContext)

    if(!context){
        throw Error('must be used within the context')
    }
    return context
}

 