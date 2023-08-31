import { ArrowLeftOutlined, BellOutlined, CalendarOutlined, DashOutlined, LinkOutlined, MailOutlined } from '@ant-design/icons'
import { LocationOnOutlined } from '@mui/icons-material'
import { Empty, Result, Skeleton } from 'antd'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useQuery, useMutation} from 'react-query'
import { useAuthContext } from '../../Hooks/useAuthContext'
import ProfileSettings from './ProfileSettings'
import axios from 'axios'

const UserProfile = ({id}) => {
    const {user} = useAuthContext()
     const PF = "http://localhost:5000/images/"

     //naviaget
     const navigate = useNavigate()

     const [FollowHover, setFollowHover] = useState(false)

     const userFetch = async () =>{
      const response =  await fetch(`/api/userprofile/${id}`)
        return response.json()
      }
      const {data,isLoading, isError,} = useQuery("specificUser", userFetch,{
        refetchInterval: 1000,
      refetchIntervalInBackground:true
      })

//foloow
      const followHandler = async() =>{
       
        try {
          await axios.put('/api/userFollow', {id , user:user.id})
          console.log('followed')
        } catch (error) {
          console.log(error)
          
        }
      }
      //foloow
      const unfollowHandler = async() =>{
       
        try {
          await axios.put('/api/userUnFollow', {id , user:user.id})
          console.log('unfollowed')
        } catch (error) {
          console.log(error)
          
        }
      }
  return (
    <>
    {isError &&
     <Result
     status="500"
     title="500"
     subTitle="Sorry, something went wrong."
     extra={<Link to='/dashboard' className='border-1 border-slate-400 px-5 py-1'>Back Home</Link>}
   />
    }
    {isLoading &&
      <div className='relative top-5'>
        <Skeleton
      avatar
      paragraph={{
        rows: 5,
      }}
      active 
    />
      </div>
    }

    {data &&
    <div className='relative w-full bg-white'>
    <div className='fixed bg-white shadow-2xl p-1 w-full   md:w-full med:w-[45%] z-50'>
    <div className='flex mt-2'>
    <div onClick={()=>navigate(-1)} className='text-lg text-slate-900 cursor-pointer'><ArrowLeftOutlined /></div>
    <div className='grid relative left-10 bottom-3'>
   {data && <span className='font-extrabold text-xl'>{data.name}</span>}
    <span>9.8K Tweets</span>
    </div>
    </div>
    </div>

    <div className='relative top-[4.2rem]  '>
    <div className='relative'><div className='bg-blueblue py-5 sm:py-28  '>.</div></div>
   <div className='flex justify-between'>
    {data.userImage ?  <div className='relative left-5 bottom-[5rem] border border-slate-200 rounded-full'><img src={PF+data.userImage} alt='' className='w-[6.5rem] h-[6.5rem] sm:w-[7.5rem] sm:h-[7.5rem] rounded-full cursor-pointer ' /></div>:
     <div className='relative left-5 bottom-[5rem] border border-slate-200 rounded-full'><img src='default.jpg' alt='' className='w-[6.5rem] h-[6.5rem] sm:w-[7.5rem] sm:h-[7.5rem] rounded-full cursor-pointer ' /></div>
    }
  
  <div className='relative top-3 flex space-x-3'>
    <div className=''><DashOutlined className='rounded-full bg-white shadow-2xl border-1 border-slate-400 p-2'/></div>
    <div className=''><MailOutlined className='rounded-full bg-white shadow-2xl border-1 border-slate-400 p-2'/></div>
   {data && data.followers.includes(user.id) &&  <div className=''><BellOutlined className='rounded-full bg-white shadow-2xl border-1 border-slate-400 p-2'/></div>}
   <div>
    {data && 
    data.followers.includes(user.id) ?
    <button type='submit' onClick={unfollowHandler}  className='px-4 py-1 text-slate-600 bg-white border-1 border-slate-400 rounded-xl hover:bg-red-700' onMouseOver={e=>setFollowHover(true)} onMouseLeave={e=>setFollowHover(false)}>{FollowHover ? 'Unfollow': 'Following'}</button>:
    <button type='submit' onClick={followHandler} className='px-4 py-1 text-white bg-black rounded-xl '>Follow</button>
    }
    
   
   </div>
  </div>
  
   </div>
    </div>

     <div className='relative -top-5 p-3'>
  {data &&
  <div className='flex'>
    <div className='text-xl font-bold'>{data.name}</div>
  {data.status && <img src='bluecheck1.png' alt='checklogo' className='relative top-[0.35rem]  h-[1.2rem] w-[1.2rem]'/>}
  </div>
  }
    {data &&<div className='text-lg'>@{data.name}</div>}
    </div>

    <div className='relative -top-10  p-3'>
    {data && <div className='text-md text-slate-600'>{data.bio}</div>}
    </div>

    <div className='relative -top-[3.7rem] p-2 flex space-x-5'>
    {data && <div className='text-md text-slate-600 font-semibold'><LocationOnOutlined className='relative bottom-[0.20rem]' style={{fontSize:'16px'}}/> <span>{user.location}</span></div>}
    {data.website && <Link to='/' className='text-md  font-semibold'><LinkOutlined className='relative bottom-[0.20rem]' style={{fontSize:'16px'}}/> <span>{data.website}</span></Link>}

    {data && <div className='text-md text-slate-600 font-semibold'><CalendarOutlined className='relative bottom-1'/> <span>{new Date (data.date).toDateString()}</span></div>}

    </div>


    <div className='relative -top-[4.5rem] p-3 flex space-x-12'>
    {data && <div className='text-md font-semibold'>{data.following} <span className='text-slate-500'>following</span></div>}
    {data &&<Link to={`/allFollowers/${id}`}><div className='text-md text-slate-900 font-semibold'>{data.followers.length} <span className='text-slate-500'>followers</span></div></Link>}
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
    }
    </>
  )
}

export default UserProfile