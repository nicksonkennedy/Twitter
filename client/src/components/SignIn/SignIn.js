import { TwitterOutlined,LoadingOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLogin } from '../../Hooks/useLogin'
import Alert from '@mui/material/Alert';

const SignIn = () => {
  const {signIn, isLoading, error} = useLogin()

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
    const [show, setshow] = useState(false)
  

    const handler= (e) =>{
        e.preventDefault()
        if(email === ''){
          setshow(false)
        }else{ setshow(true)}
       
    }
    const submitHandler = async(e) =>{
      e.preventDefault()
      await signIn(email, password)
    }
  return (
    <div className=' w-full h-screen bg-gray-200'>
       <div className='p-3'>
       <div className='relative  max-w-xl  bg-white h-[35rem] overflow-y-auto rounded-2xl mx-auto text-center p-6 sm:p-[7rem] shadow-2xl'>
            <div className='relative top-1 sm:-top-[6rem] grid space-y-9'>
            <img src='twit.png' alt='' className='h-[3rem] w-[3rem] mx-auto'/>
           <div className='relative -top-7'> <h1 className='text-md sm:text-2xl text-slate-800 font-bold'>Sign in to Twitter</h1></div>
            <div className='relative grid space-y-4 -top-10'>
            <Link to='' className='text-slate-900 bg-white p-2 w-full rounded-2xl flex justify-center border-1 border-slate-200'><img src='google.png' alt='googleLogo' className='h-[1.5rem]  w-[1.5rem] rounded-full ' /> <span className='relative left-4 text-sm sm:text-md font-semibold'>Sign up with Google</span></Link>
            <Link to='' className='text-slate-900 bg-white p-2 w-full rounded-2xl flex justify-center border-1 border-slate-200'><img src='apple.png' alt='apple' className='h-[1.2rem]  w-[1.2rem] rounded-full ' /> <span className='relative left-4 text-sm sm:text-md font-semibold'>Sign up with Apple</span></Link>
            </div>
            <div className='flex relative -top-10 '>
             <div className='bg-slate-300 w-full h-[0.03rem]'></div> <div className='text-slate-600 relative bottom-10 p-4 text-md'>Or</div> <div className='bg-slate-300 w-full h-[0.03rem]'></div>
                </div>

               <div className='relative -top-[8rem] space-y-6'>
               {error && <Alert severity="error" style={{fontSize:'14px', fontWeight:'bold', fontFamily:'monospace'}}>{error}</Alert>}

               <input
             type='text' 
             placeholder='Email or Phone Number'
              className='w-full py-3 px-3 outline-none border-1 border-slate-300 text-md rounded-sm ' 
              value={email}
              onChange={e=>setemail(e.target.value)}
              />

             <input
             type='password' 
             placeholder='Password'
              className={show ? 'w-full py-3 px-3 outline-none border-1 border-slate-300 text-md rounded-sm' : 'hidden'}
              value={password}
              onChange={e=>setpassword(e.target.value)}
             />
               </div>

                <div className='relative -top-[9rem]'>
                {
                  show ?
                  <button type='submit' disabled={isLoading} className='w-full p-[0.30rem] bg-black text-md rounded-xl font-bold text-white' onClick={submitHandler} >{isLoading ? <LoadingOutlined style={{fontSize:'18px', color:'#fff'}} /> : 'Submit'} </button>:
                  <button type='submit' className='w-full p-[0.30rem] bg-black text-md rounded-xl font-bold text-white' onClick={handler} > Next</button>
                  
                  }

                </div>

                

                <div className='relative -top-[8rem]'>
                 <span className='text-md text-slate-500'>Don't have account yet? <Link to='/'>Sign Up here</Link></span>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default SignIn