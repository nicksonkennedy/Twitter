import React ,{useState} from 'react'
import { ArrowLeftOutlined, CameraOutlined } from '@ant-design/icons';
import { useAuthContext } from '../../Hooks/useAuthContext'
import TextField from '@mui/material/TextField';
import {Link, Navigate, useNavigate} from 'react-router-dom'
import axios from 'axios'

const ProfileSettingSm = () => {
    const {user, dispatch} = useAuthContext()
    const [showDob, setshowDob] = useState(false)
   const {name, bio, location, website , id } = user
 console.log(id)

    const [Bio, setBio] = useState(bio)
const [Location, setLocation] = useState(location)
const [Website, setWebsite] = useState(website)
const [Name, setName] = useState(name)
const [file, setFile] = useState('')

const [Loading, setLoading] = useState(false)
const [Error, setError] = useState(null)
const [Success, setSuccess] = useState(false)

const navigate = useNavigate()

  //save button
  
  const saveHandler = async (e) =>{
    e.preventDefault()
    const newData ={name:Name, bio:Bio , location:Location,file , website:Website }
    if(file){
      const data = new FormData()
      const filename = Date.now() + file.name
      data.append("name", filename)
      data.append("file", file)
      newData.userImage = filename
      try {
        setLoading(true)
        await axios.post('/uploads', data)
      } catch (error) {
        setError(error)
      }
    }

    //input data
    console.log(newData)
    try {
      const res =  await axios.put(`/api/edituser/${id}`, newData)
      //saving to localstorage 
      localStorage.setItem('user', JSON.stringify(res.data))
      dispatch({type: 'LOGIN', payload:res.data})
      navigate(-1)
    } catch (error) {
      setLoading(false)
      setError(error)
    }
 
  }
  return (
    <form onSubmit={saveHandler}>
          
       <div className='fixed w-full  bg-white shadow-lg z-50 p-3'>
       <div className='flex justify-between'>
        <div className='flex space-x-7'>
        <Link to='/profile' className='text-xl font-bold relative bottom-1 text-slate-900 cursor-pointer' ><ArrowLeftOutlined /></Link>
        <span className='text-xl font-bold'>Edit Profile</span>
        </div>
        <button type='submit' className='px-6 py-2 text-white bg-slate-900 rounded-xl'>Save</button>
        </div>
       </div>

        <div className='relative top-[4.6rem] bg-gray-300 w-full h-[10rem] p-3'>
            <div className='relative mx-auto text-center top-[30%] text-2xl cursor-pointer'><CameraOutlined className='p-2 bg-gray-600 rounded-full' style={{color:'white'}}/></div>

        </div>

        <div className='relative'>
        <div className='relative'>
        {/***/}
        <input type='file'  accept='image/*' className={file ?'hidden' : 'block'} onChange={e =>setFile(e.target.files[0])}  />
        {file && (
          <img 
            className='relative left-2 w-[7rem] h-[7rem] sm:w-[7.5rem] sm:h-[7.5rem] rounded-full object-cover mt-1'
            src={URL.createObjectURL(file)}
            alt='userImage'
          />
        )}
     {/***
      * 
      *    <div className='relative inline-block'>
        <img src='default.jpg' alt='' className='w-[6.5rem] h-[6.5rem] sm:w-[7.5rem] sm:h-[7.5rem] rounded-full cursor-pointer ' /> 
        <div className='absolute top-0 h-full w-full bg-black rounded-full bg-opacity-25 flex items-center justify-center'>
          <button>Browse</button>
        </div>
        </div>
      */}
        </div>
        </div>


        <div className='p-[1rem] relative top-[4rem]'>
        {user &&<div className='relative  grid gap-5'>
        <TextField 
        id="outlined-basic"
         label="Name" 
         variant="outlined" 
         value={Name}
         onChange={e=>setName(e.target.value)}
         className='w-full outline-none border-1 border-slate-300 rounded-lg'
         />

       <textarea
         rows='4'  
         autoFocus maxLength='280 ' 
         className='w-full text-md outline-none border-1 border-slate-300 text-lg' 
         placeholder="Edit Bio #Twitter"
         value={Bio}
         onChange={e=>setBio(e.target.value)}
         >

        </textarea>

        <TextField 
        id="outlined-basic"
         label="Location" 
         variant="outlined" 
         value={Location}
         onChange={e=>setLocation(e.target.value)}
         className='w-full outline-none border-1 border-slate-300 rounded-lg'
         />

        <TextField 
        id="outlined-basic"
         label="Website" 
         variant="outlined" 
         value={Website}
         onChange={e=>setWebsite(e.target.value)}
         className='w-full outline-none border-1 border-slate-300 rounded-lg'
         />

         <div className='flex space-x-2 mt-3'>
            <span className={showDob ? 'text-lg font-bold' : 'text-lg text-slate-400'}>Birth date</span>
            <span className='text-midblue text-lg cursor-pointer' onClick={()=>setshowDob(!showDob)}>{showDob ?'Cancel' : 'Edit'}</span>
         </div>

         {/**show date of birth when state is true */}
         {showDob && <div className='grid gap-4'>
        <span className='relative bottom-8 text-md text-slate-500'>
        This should be the date of birth of the person using the account.
        Even if you’re making an account for your business,event, or cat.Twitter uses your age to customize your experience, 
        including ads, as explained in our <Link to='/'>Privacy Policy</Link>.
        </span>
           <div className='relative bottom-5'>
                <input type='date' className='w-full p-3 border border-slate-800 text-xl font-monospace'/>
           </div>

           <div className='relative bottom-3'>
            <h1 className='text-xl font-semibold'>Who sees this?</h1>
            <h3 className='text-md text-slate-600 relative bottom-2 '>You can control who sees your birthday on Twitter. <Link to=''>Learn more</Link></h3>

            <select className='p-3 w-full  border-2 border-slate-100 rounded-sm  h-[4rem] text-md font-monospace relative'>
            <option value="" className='text-slate-400 text-md'>Mont & Day</option>
                <option value="">Public</option>
              <option value="1" className='text-bold'>2022</option>
             <option value="2">Your Followers</option>
              <option value="3">People You Follow</option>
             <option value="4">You Follow Each Other</option>
             <option value="1">Only You</option>
           
           </select>
           </div>
           <select className='p-3 w-full  border-2 border-slate-100 rounded-sm  h-[4rem] text-md font-monospace relative'>
           <option value="" className='text-slate-400'>Year</option>
                <option value="">Public</option>
              <option value="1" className='text-bold'>2022</option>
             <option value="2">Your Followers</option>
              <option value="3">People You Follow</option>
             <option value="4">You Follow Each Other</option>
             <option value="1">Only You</option>
           
           </select>

         </div>}

        



        </div>}
        </div>
    </form>
  )
}

export default ProfileSettingSm