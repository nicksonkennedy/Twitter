import React from 'react'
import { Link } from 'react-router-dom'
import {useQuery, useMutation} from 'react-query'
import { Skeleton } from 'antd'

const WhoToFollowSm = () => {
  const PF = "http://localhost:5000/images/"

  const fetchUser = async () =>{
    const response =  await fetch('/api/users')
    return response.json()
  }
  const {data:users,isLoading, isError,} = useQuery("allUser", fetchUser)

  return (
    <div className='p-1'>
        <div className='p-3 bg-white rounded-2xl'>
        <h1 className='text-xl font-extrabold'>Who to follow</h1>
        {isLoading && 
        <Skeleton
        avatar
        paragraph={{
          rows: 4,
        }}
        active 
      />
        }
              {
                users && users.map(user =>
                  <div className='flex justify-between'>
                    <div className='flex space-x-3'>
                   <div className='relative '> 
                   {user.userImage ?
                   <img src={PF+user.userImage} alt='userImage' className=' object-cover p-3 rounded-full w-[5.5rem] h-[5.1rem]' /> :
                   <img src='default.jpg' alt='userImage' className=' object-cover p-3 rounded-full w-[5.5rem] h-[5.5rem]' />
                  }
                   </div>
                    <Link to={`/userprofile/${user._id}`} className='relative top-5 -left-3'>
                    <div className='flex'>
                       <h1 className='relative font-semibold text-md'>{user.name}</h1>
                        {user.status && <img src='bluecheck.png' alt='checklogo' className='relative left-1  h-[1.2rem] w-[1.2rem]'/>}
                       </div>
                        <h3 className='relative bottom-[0.73rem] text-gray-500 text-sm'>@{user.name}</h3>
                    </Link>
                    </div>

                    <div><button className='relative top-6 py-[0.19rem] px-4 bg-white border border-slate-400 rounded-xl'>Follow</button></div>
                    </div>
                  )
              }


                  

                    <div><Link to='' className='text-md'>Show More</Link></div>
        </div>

        <div className='relative -top-5  text-center p-5'>Terms of Service Privacy Policy Cookie Policy Accessibility Ads info More © 2022 Twitter, Inc.</div>
    </div>
  )
}

export default WhoToFollowSm