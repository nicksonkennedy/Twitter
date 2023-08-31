import { CheckOutlined,ArrowLeftOutlined, EyeOutlined,LoadingOutlined } from '@ant-design/icons'
import React,{useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import SignupManagementContext from '../../Context/SignupManagementContext'
import { useSignup } from '../../Hooks/useSignup'
import Alert from '@mui/material/Alert';



const SummaryPage = ({ name, email, password, dateOfBirth}) => {
  const {signup, isLoading, error } = useSignup()
  const {setBasic,setcustomizeEx,setsummarize,setRegSuccess} = useContext(SignupManagementContext)
  const [showPas, setshowPas] = useState(false)

const submitHandler = async (e) =>{
e.preventDefault()
await signup(name ,email, password,dateOfBirth)
}
const backHandler =(e) =>{
    setBasic(false)
    setcustomizeEx(true)
    setsummarize(false)
    setRegSuccess(false)
}
  return (
    <div className=' w-full h-screen'>
    <div className='p-3'>
    <div className='relative top-[2rem] max-w-xl mx-auto h-[35rem] overflow-y-auto bg-gray-50 rounded-2xl p-8 sm:p-20'>
    <div className='relative -top-[1.6rem] sm:-top-[4rem]'> <ArrowLeftOutlined style={{color:'black', fontSize:'1rem'}} className='relative -left-[1rem] bottom-1 cursor-pointer' onClick={backHandler}/> <span className='text-slate-900 font-bold text-sm'>Step 3 of 3</span></div>
       <div className='relative space-y-8'>
        <h1 className='text-xl sm:text-4xl font-bold text-slate-900'>Create your account</h1>
        {error && <Alert severity="error" style={{fontSize:'17px', fontWeight:'bold', fontFamily:'monospace'}}>{error}</Alert>}
           <div className='relative'>
           <input type='text'
            placeholder='Name' 
            className='w-full py-3 px-3 outline-none border-1 border-gray-400 text-xl  rounded-sm  relative'
            value={name}
             disabled
             />
           <CheckOutlined className='absolute p-[0.20rem] bg-green-700 rounded-full top-4 right-2 cursor-pointer' style={{color:'white', fontSize:'10px'}}/>
           </div>

           <div className='relative'>
           <input type='email'
            placeholder='Email'
             className='w-full py-3 px-3 outline-none border-1 border-gray-400 text-xl  rounded-sm  relative'
             value={email}
              disabled
              />
           <CheckOutlined className='absolute p-[0.20rem] bg-green-700 rounded-full top-4 right-2 cursor-pointer' style={{color:'white', fontSize:'10px'}}/>
           </div>

           <div className='relative'>
           <input type='text'
            placeholder='Date Of Birth'
             className='w-full py-3 px-3 outline-none border-1 border-gray-400 text-xl  rounded-sm  relative'
             value={dateOfBirth}
              disabled
              />
           <CheckOutlined className='absolute p-[0.20rem] bg-green-700 rounded-full top-4 right-2 cursor-pointer' style={{color:'white', fontSize:'10px'}}/>
           </div>

           <div className='relative'>
           <input type={showPas ? 'text' : 'password'}
            placeholder='Password'
             className='w-full py-3 px-3 outline-none border-1 border-gray-400 text-xl  rounded-sm  relative'
             value={password}
              disabled
              />
           <CheckOutlined className='absolute p-[0.20rem] bg-green-700 rounded-full top-4 right-2 cursor-pointer' style={{color:'white', fontSize:'10px'}} onClick={e=>setshowPas(!showPas)}/>
           </div>
          
           <div className='relative bottom-[1rem]'>
                  <span className='text-slate-700 text-md'>By signing up, you agree to our <Link to=''>Terms of Service</Link> and  
                  <span className=''><Link to=''> Privacy Policy</Link>, 
                   including <Link to=''>Cookie Use</Link>. Twitter may use your contact information, including email address and phone number for purposes outlined in our Privacy Policy. <Link to=''>Learn more</Link></span>
                  </span>
                </div>

                <button type='submit' disabled={isLoading} className='w-full p-3 bg-gray-200 text-xl rounded-xlw-full p-2 bg-gray-500 text-white text-lg rounded-xl' onClick={submitHandler}>{isLoading ? <LoadingOutlined style={{fontSize:'25px', color:'#145DA0'}} />: 'Submit'}</button>

       </div>
     </div>
    </div>
 </div>
  )
}

export default SummaryPage