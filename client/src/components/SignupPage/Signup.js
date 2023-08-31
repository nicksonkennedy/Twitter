import { TwitterOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <div className=' w-full h-screen'>
       <div className='p-3'>
       <div className='relative -top-2 max-w-xl  bg-gray-50 h-[35rem] rounded-2xl mx-auto text-center p-6 sm:p-[7rem] shadow-2xl'>
            <div className='relative -top-[2rem] sm:-top-[5rem] grid space-y-9'>
            <img src='twit.png' alt='' className='h-[3rem] w-[3rem] mx-auto'/>
            <h1 className='text-xl sm:text-2xl  font-bold'>Join Twitter today</h1>

            <Link to='' className='text-slate-900 bg-white p-1 w-full rounded-2xl flex justify-center border-1 border-slate-200'><img src='google.png' alt='googleLogo' className='h-[1.5rem]  w-[1.5rem] rounded-full ' /> <span className='relative left-4 text-sm sm:text-md font-semibold'>Sign up with Google</span></Link>
            <Link to='' className='text-slate-900 bg-white p-2 w-full rounded-2xl flex justify-center border-1 border-slate-200'><img src='apple.png' alt='apple' className='h-[1.2rem]  w-[1.2rem] rounded-full ' /> <span className='relative left-4 text-sm sm:text-md font-semibold'>Sign up with Apple</span></Link>

                <div className='flex '>
             <div className='bg-slate-300 w-full h-[0.03rem]'></div> <div className='text-slate-600 relative bottom-10 p-4 text-md'>Or</div> <div className='bg-slate-300 w-full h-[0.03rem]'></div>
                </div>

                <Link to='/user_signup' className='text-slate-900 bg-black p-2 w-full rounded-2xl flex justify-center relative -top-[5.4rem] border-1 '><span className='relative left-4 text-sm sm:text-md font-semibold text-white'>Sign up with Phone or Email </span></Link>

                <div className='relative -top-[6rem]'>
                  <span className='text-sm xsm:text-md font-semibold text-slate-500'>By signing up, you agree to the <Link to='' className='text-sm'>Terms of Service</Link> and <Link to=''>Privacy Policy</Link>, 
                  including <Link to=''>Cookie Use</Link></span>
                </div>

                <div className='relative -top-[5rem]'>
                 <span className='text-md text-slate-600'>Have an account already? <Link to='/user_signin'>Login</Link></span>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Signup