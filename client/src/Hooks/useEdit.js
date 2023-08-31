import { useState } from "react";
import {useAuthContext} from './useAuthContext'



export const  useEdit = () =>{
const [error, setError] = useState(null)
const [isLoading, setIsLoading] = useState(null)
const {dispatch, user} = useAuthContext()

const {name, email, followers, following, date} = user


const editUser = async (name,dateOfBirth,bio, location,website, userImage) =>{
    setIsLoading(true)
    setError(null)

    try {
        const response = await fetch('/api/edituser', {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ name,dateOfBirth,bio, location,website, userImage})
        })
        const json = await response.json()
        if(!response.ok){
            setIsLoading(false)
            setError(json)
        }
        if(response.ok){
            //saving to localstorage
            localStorage.setItem('user', JSON.stringify(json))
                console.log(json)
            dispatch({type: 'LOGIN', payload:json})
            setIsLoading(false)
        }
    } catch (error) {
        setIsLoading(false)
        setError('An Error Occurred, Try Again....')
    }
}
///



return {editUser, isLoading, error}
}