import { useState } from "react";
import {useAuthContext} from './useAuthContext'



export const  useLikes = () =>{
const [error, setError] = useState(null)
const [isLoading, setIsLoading] = useState(null)
const {dispatch} = useAuthContext()
const [liked, setliked] = useState(false)


const likes = async (_id) =>{
    setIsLoading(true)
    setError(null)

    try {
        const response = await fetch('/api/likes', {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({_id})
        })
        const json = await response.json()
        if(!response.ok){
            setIsLoading(false)
            setError(json)
        }
        if(response.ok){
             //saving to localstorage
             localStorage.setItem('liked', JSON.stringify(json))
             dispatch({type: 'LOGIN', payload:json})
             setliked(true)
            setIsLoading(false)
            console.log('liked successfully')          
        }
    } catch (error) {
        setIsLoading(false)
        setError('An Error Occurred, Try Again....')
    }
}
///



return {likes, isLoading, error, liked}
}