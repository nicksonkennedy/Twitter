import { useAuthContext } from "./useAuthContext"

const useLogout = () => {
  const {dispatch} = useAuthContext()

  const logout = () =>{
    //remove from localstorage
    localStorage.removeItem('user')
    //disptch
    dispatch({type:'LOGOUT'})
  }
  return { logout}
}

export default useLogout