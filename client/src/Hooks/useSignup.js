import { useState, useContext } from "react";
import {useAuthContext} from './useAuthContext'
import SignupManagementContext from "../Context/SignupManagementContext";


export const  useSignup = () =>{
    const {setBasic,setcustomizeEx,setsummarize, setRegSuccess} = useContext(SignupManagementContext)
const [error, setError] = useState(null)
const [isLoading, setIsLoading] = useState(null)
const {dispatch} = useAuthContext()



const signup = async (name, email, password, dateOfBirth) =>{
    setIsLoading(true)
    setError(null)

    try {
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name, email, password, dateOfBirth})
        })
        const json = await response.json()
        if(!response.ok){
            setIsLoading(false)
            setError(json)
        }
        if(response.ok){
            
           
            setIsLoading(false)

            setBasic(false)
            setcustomizeEx(false)
            setsummarize(false)
           setRegSuccess(true)
        }
    } catch (error) {
        setIsLoading(false)
        setError('An Error Occurred, Try Again....')
    }
}
///

const signupVerification = async (name, email, password, dateOfBirth) =>{
    setIsLoading(true)
    setError(null)

    try {
        const response = await fetch('/api/signupVerification', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name, email, password, dateOfBirth})
        })
        const json = await response.json()
        if(!response.ok){
            setIsLoading(false)
            setError(json)

            
        }
        if(response.ok){
            setIsLoading(false)
            console.log('verified')
            setBasic(false)
            setcustomizeEx(true)
            setsummarize(false)
            setRegSuccess(false)
        }
    } catch (error) {
        setIsLoading(false)
        setError('An Error Occurred, Try Again')
       
    }
}

return {signup,signupVerification, isLoading, error}
}