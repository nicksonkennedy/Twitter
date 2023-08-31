import { ArrowLeftOutlined, CalendarOutlined, LinkOutlined } from '@ant-design/icons'
import { LocationOnOutlined } from '@mui/icons-material'
import { Empty } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../Hooks/useAuthContext'
import ProfileSettings from './ProfileSettings'

const Profile = () => {
    const {user} = useAuthContext()
     const PF = "http://localhost:5000/images/"
  return (
    <div className='relative w-full bg-white'>
        <div className='fixed bg-white shadow-2xl p-1 w-full   md:w-full med:w-[45%] z-50'>
        <div className='flex mt-2'>
        <Link to='/dashboard' className='text-lg text-slate-900 cursor-pointer'><ArrowLeftOutlined /></Link>
        <div className='grid relative left-10 bottom-3'>
       {user && <span className='font-extrabold text-xl'>{user.name}</span>}
        <span>9.8K Tweets</span>
        </div>
        </div>
        </div>

        <div className='relative top-[4.2rem]  '>
        <div className='relative'><div className='bg-blueblue py-5 sm:py-28  '>.</div></div>
       <div className='flex justify-between'>
        {user.userImage ?  <div className='relative left-5 bottom-[5rem] border border-slate-200 rounded-full'><img src={PF+user.userImage} alt='' className='w-[6.5rem] h-[6.5rem] sm:w-[7.5rem] sm:h-[7.5rem] rounded-full cursor-pointer ' /></div>:
         <div className='relative left-5 bottom-[5rem] border border-slate-200 rounded-full'><img src='default.jpg' alt='' className='w-[6.5rem] h-[6.5rem] sm:w-[7.5rem] sm:h-[7.5rem] rounded-full cursor-pointer ' /></div>
        }
      
      <div className='relative hidden sm:inline-block top-4 right-1 cursor-pointer'><ProfileSettings /> </div>
      <div  className=' inline-block sm:hidden  top-4 right-1 cursor-pointer'>
        <Link to='/profile_settings'   className='border border-slate-400 px-3 py-1 rounded-xl text-md font-semibold'>Edit Profile</Link>
        </div>
       </div>
        </div>

         <div className='relative -top-5 p-3'>
      {user &&<div className='flex'>
        <div className='text-xl font-bold'>{user.name}</div>
        {user.status && <img src='bluecheck.png' alt='checklogo' className='relative top-[0.35rem]  h-[1.2rem] w-[1.2rem]'/>}
      </div> }
        {user &&<div className='text-lg'>@{user.name}</div>}
        </div>

        <div className='relative -top-10  p-3'>
        {user && <div className='text-md text-slate-600'>{user.bio}</div>}
        </div>

        <div className='relative -top-[3.7rem] p-2 flex space-x-5'>
        {user && <div className='text-md text-slate-600 font-semibold'><LocationOnOutlined className='relative bottom-[0.20rem]' style={{fontSize:'16px'}}/> <span>{user.location}</span></div>}
        {user.website && <Link to='/' className='text-md  font-semibold'><LinkOutlined className='relative bottom-[0.20rem]' style={{fontSize:'16px'}}/> <span>{user.website}</span></Link>}

        {user && <div className='text-md text-slate-600 font-semibold'><CalendarOutlined className='relative bottom-1'/> <span>{new Date (user.date).toDateString()}</span></div>}

        </div>


        <div className='relative -top-[4.5rem] p-3 flex space-x-12'>
        {user && <div className='text-md font-semibold'>{user.following.length} <span className='text-slate-500'>following</span></div>}
        {user &&<div className='text-md font-semibold'>{user.followers.length} <span className='text-slate-500'>followers</span></div>}
        </div>
        <div className='relative -top-[4.9rem] p-2 flex justify-between '>
       <div className='underline underline-offset-20 cursor-pointer p-3 hover:bg-gray-300'> <Link to='' className='text-lg text-slate-600 font-bold hover:text-slate-700'>Tweets</Link></div>
       <div className='cursor-pointer p-3 hover:bg-gray-300'> <Link to='' className='text-lg text-slate-600 font-bold hover:text-slate-700'>Replies</Link></div>
       <div className='cursor-pointer p-3 hover:bg-gray-300'> <Link to='' className='text-lg text-slate-600 font-bold hover:text-slate-700'>Media</Link></div>
       <div className='cursor-pointer p-3 hover:bg-gray-300'> <Link to='' className='text-lg text-slate-600 font-bold hover:text-slate-700'>Likes</Link></div>
       </div>
        
      <div className='relative mb-[10rem]'>
      <Empty />
      </div>

    </div>
  )
}

export default Profile