import React, { useState , useContext } from 'react'
import SignupManagementContext from '../../Context/SignupManagementContext'
import BasicDetails from './BasicDetails'
import CustomisePage from './CustomisePage'
import SuccessRegistration from './SuccessRegistration'
import SummaryPage from './SummaryPage'
 
const SignupHome = () => {
  const {basic,customizeEx,summarize,RegSuccess} = useContext(SignupManagementContext)

const [name, setname] = useState('')
const [email, setemail] = useState('')
 const [password, setpassword] = useState('')
const [dateOfBirth, setdateOfBirth] = useState('')
  

  return (
    <>
    {basic && <BasicDetails  name={name} setname={setname} email={email} setemail={setemail} dateOfBirth={dateOfBirth} setdateOfBirth={setdateOfBirth} password={password} setpassword={setpassword}  />}
    {customizeEx && <CustomisePage />}
    {summarize && <SummaryPage name={name} setname={setname} email={email} setemail={setemail} dateOfBirth={dateOfBirth} setdateOfBirth={setdateOfBirth} password={password} setpassword={setpassword} />}
    {RegSuccess && <SuccessRegistration  name={name} setname={setname} email={email} setemail={setemail} dateOfBirth={dateOfBirth} setdateOfBirth={setdateOfBirth} password={password} setpassword={setpassword}/>}

    </>
  )
}

export default SignupHome