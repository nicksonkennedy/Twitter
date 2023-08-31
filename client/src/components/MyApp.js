import React,{useState} from 'react'
import SignupManagementContext from '../Context/SignupManagementContext'


const MyApp = (props) => {
    const [basic, setBasic] = useState(true)
    const [customizeEx, setcustomizeEx] = useState(false)
    const [summarize, setsummarize] = useState(false)
    const [RegSuccess, setRegSuccess] = useState(false)
  return (
    <SignupManagementContext.Provider
      value={{
        basic, setBasic,
        customizeEx,setcustomizeEx,
        summarize,setsummarize,
        RegSuccess,setRegSuccess
    }}
      >
        {props.children}
    </SignupManagementContext.Provider>
  )
}

export default MyApp