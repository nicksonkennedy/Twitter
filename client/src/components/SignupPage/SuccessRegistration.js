import React, { useContext } from 'react'
import { Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import SignupManagementContext from '../../Context/SignupManagementContext';

const SuccessRegistration = ({name , setname, setemail, setpassword,setdateOfBirth}) => {
    const navigate = useNavigate()

  const {setBasic,setcustomizeEx,setsummarize,setRegSuccess} = useContext(SignupManagementContext)

  const handler = (e) =>{
    e.preventDefault()
    setBasic(true)
    setcustomizeEx(false)
    setsummarize(false)
    setRegSuccess(false)
    
    //set textboxes empty
    setname('')
    setemail('')
    setpassword('')
    setdateOfBirth('')

    //navigate
    navigate('/user_signin')
  }

  return (
    <div className='p-2'>
        <div className='relative top-[4rem] max-w-xl mx-auto h-[30rem] overflow-y-auto bg-white shadow-2xl rounded-2xl p-8 sm:p-20'>
        <div className='relative bottom-6 sm:bottom-[4rem]'><img src='twit.png' alt='logo' className='h-[3.5rem] w-[3.5rem] mx-auto text-center  object-cover' /></div>

<div className='relative bottom-[3rem]'>
<Result
    status="success"
    title={<h1 className='text-slate-400 text-md sm:text-2xl'>Account  Created !</h1>}
    subTitle={<div className='text-slate-900 text-lg '>Hola <span className='text-blueblue'>@{name}</span></div>}
    extra={[
      <div  className='w-full p-2 bg-midblue text-white cursor-pointer rounded-lg' onClick={handler}>Login Here</div>
    ]}
  />
</div>
    </div>
    </div>
  )
}

export default SuccessRegistration