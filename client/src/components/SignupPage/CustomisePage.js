import { ArrowLeftOutlined } from '@ant-design/icons'
import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import SignupManagementContext from '../../Context/SignupManagementContext'


const CustomisePage = () => {
  const {setBasic,setcustomizeEx,setsummarize,setRegSuccess} = useContext(SignupManagementContext)
const submitHandler = (e) =>{
e.preventDefault()
setBasic(false)
setcustomizeEx(false)
setsummarize(true)
setRegSuccess(false)

}

const backHandler =(e) =>{
    setBasic(true)
    setcustomizeEx(false)
    setsummarize(false)
    setRegSuccess(false)
    console.log('back')
}

  return (
    <div className=' w-full h-screen'>
    <div className='p-3'>
    <div className='relative top-[2rem] max-w-xl mx-auto h-[35rem] overflow-y-auto bg-gray-50 rounded-2xl p-8 sm:p-20 shadow-2xl border-1 border-slate-200'>
       <div className='relative -top-[1.6rem] sm:-top-[4rem]'> <ArrowLeftOutlined style={{color:'black', fontSize:'1rem'}} className='relative -left-[1rem] bottom-1 cursor-pointer' onClick={backHandler}/> <span className='text-slate-900 font-bold text-sm sm:text-md'>Step 2 of 3</span></div>

       <div className='space-y-8 relative bottom-7'>
        <h1 className='text-xl sm:text-2xl font-bold text-slate-900'>Customise your experience</h1>
        <h3 className='text-lg font-semibold text-slate-800'>Track where you see Twitter content across the web</h3>
           <div className='flex justify-between relative bottom-4'>
            <span className='text-sm sm:text-md font-semibold text-slate-500'>Twitter uses this data to personalize your experience. This web browsing history will never be store with your name, email or phone number</span>
           <input type='checkbox' className='w-12 h-12 rounded-lg' checked />
           </div>

           <div className='relative bottom-5 mb-10'>
                  <span className='text-slate-600 text-sm  text-slate-500'>By signing up, you agree to our <Link to=''>Terms of Service</Link>  
                  <span className=''><Link to=''>Privacy Policy</Link>, 
                  and including <Link to=''>Cookie Use</Link>. Twitter may use your contact information, including email address and phone number for purposes outlined in our Privacy Policy. <Link to=''>Learn more</Link></span>
                  </span>
                </div>

            <button className='w-full p-2 bg-gray-500 text-white text-lg rounded-xl' onClick={submitHandler}>Next</button>

       </div>
     </div>
    </div>
 </div>
  )
}

export default CustomisePage