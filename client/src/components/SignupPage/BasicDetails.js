import React, { useState } from 'react'
import { useSignup } from '../../Hooks/useSignup'
import Alert from '@mui/material/Alert';
import { EyeOutlined, LoadingOutlined } from '@ant-design/icons';


const BasicDetails = ({ name, setname, email, setemail, password, setpassword, dateOfBirth, setdateOfBirth}) => {
const {signupVerification, isLoading, error } = useSignup()
const [showPas, setshowPas] = useState(false)

  const submitHandler = async (e) =>{
  e.preventDefault()
  await signupVerification(name ,email, password,dateOfBirth)
  
  
}

  return (
    <div className=' w-full h-screen'>
    <div className='p-1 sm:p-3'>
    <div className='relative top-[2rem] max-w-xl mx-auto h-[35rem] overflow-y-auto bg-white rounded-2xl p-8 sm:p-20 shadow-2xl'>
       <div className='relative -top-[1.6rem] sm:-top-[4rem]'> <span className='text-slate-800 font-bold text-md sm:text-xl'>Step 1 of 3</span></div>

       <div className='relative -top-7 space-y-8'>
        <h1 className='text-xl sm:text-4xl font-bold text-slate-900'>Create your account</h1>
              {error && <Alert severity="error" style={{fontSize:'12px', fontWeight:'bold', fontFamily:'monospace'}}>{error}</Alert>}
            <input
             type='text' 
             placeholder='Name'
              className='w-full py-3 px-3 outline-none border-1 border-slate-300 text-md rounded-sm font-semibold' 
              value={name}
              onChange={e=>setname(e.target.value)}
              />
            <input 
            type='text'
             placeholder='Email' 
             className='w-full py-3 px-3 outline-none border-1 border-slate-300 text-md rounded-sm font-semibold'
             value={email}
             onChange={e=>setemail(e.target.value)}
             />

            
           <div className='relative'>
           <input 
            type={showPas ? 'text' : 'password'}
             placeholder='Password'
             className='w-full py-3 px-3 outline-none border-1 border-slate-300 text-md rounded-sm font-semibold'
             value={password}
             onChange={e=>setpassword(e.target.value)}
             />
             <EyeOutlined className='absolute text-slate-900 text-md right-5 top-4 cursor-pointer' onClick={e=>setshowPas(!showPas)}/>
           </div>

           

            <div>
                <h1 className='text-slate-800 text-md'>Date of birth</h1>
                <p className='text-slate-400 text-sm'>This will be shown publicly. Confirm your age, even if this account is for business, a pet , or something else</p>
           
           <div className=''>
            <input 
            type='date'
             className='w-full py-3 px-3 outline-none border-1 border-slate-300 text-md rounded-sm text-slate-700 font-semibold font-monospace'
             onChange={e=>setdateOfBirth(e.target.value)}
             />
           </div>

           <div className='hidden  '>
                <div>
                <select className='p-3 w-full bg-black text-white border-2 border-slate-100 rounded-sm w-[10rem] h-[4rem] text-xl'>
                <option value="">Month</option>
              <option value="1" className=''>1</option>
             <option value="2">2</option>
              <option value="3">3</option>
             <option value="4">4</option>
             <option value="1">5</option>
             <option value="2">6</option>
              <option value="3">7</option>
             <option value="4">8</option>
             <option value="1">9</option>
             <option value="2">10</option>
              <option value="3">11</option>
             <option value="4">12</option>
           </select>
                </div>

                <div>
                <select className='p-3 w-full bg-black text-white border-2 border-slate-100 rounded-sm w-[10rem] h-[4rem] text-xl'>
                <option value="">Day</option>
              <option value="1" className='text-bold'>1</option>
             <option value="2">2</option>
              <option value="3">3</option>
             <option value="4">4</option>
             <option value="1">5</option>
             <option value="2">6</option>
              <option value="3">7</option>
             <option value="4">8</option>
             <option value="1">9</option>
             <option value="2">10</option>
              <option value="3">11</option>
             <option value="4">12</option>
           </select>
                </div>

                <div>
                <select className='p-3 w-full bg-black text-white border-2 border-slate-100 rounded-sm w-[10rem] h-[4rem] text-xl'>
                <option value="">Year</option>
              <option value="1" className='text-bold'>2022</option>
             <option value="2">2021</option>
              <option value="3">2020</option>
             <option value="4">2019</option>
             <option value="1">2018</option>
             <option value="2">2017</option>
              <option value="3">2016</option>
             <option value="4">2015</option>
             <option value="1">2014</option>
             <option value="2">2013</option>
              <option value="3">2012</option>
             <option value="4">2011</option>
           </select>
                </div>
           </div>

            </div>

            <button type='submit' disabled={isLoading} className='w-full p-2 bg-gray-500 text-white text-lg rounded-xl' onClick={submitHandler}>{isLoading ? <LoadingOutlined style={{fontSize:'25px', color:'#fff'}} />: 'Next'}</button>

       </div>
     </div>
    </div>
 </div>
  )
}

export default BasicDetails