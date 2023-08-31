import { DashOutlined, HeartOutlined, MessageOutlined, RetweetOutlined, SendOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const TweetComments = ({data, likesHandler}) => {
  const PF = "http://localhost:5000/images/"
  
  return (
   <>
   {data.comments &&
    <div className='relative top-10'>
        {
            data.comments.map(comment =>
                <div className='flex justify-between'>
                    <div className='flex'>
                    {comment.user.userImage ?
             <img src={PF+comment.user.userImage} alt='userImage' className=' object-cover p-3 rounded-full w-[5.5rem] h-[5.1rem]' /> :
             <div className='relative top-1 p-2 '><Avatar size={50} icon={<UserOutlined />} /></div>
          }

<div className='relative top-1'>
             {comment.user && <Link to={`/userprofile/${comment.user._id}`} className='relative top-2'><span className='font-bold text-slate-800 text-md'>{comment.user.name}</span> <span className='text-slate-500'>@{comment.user.name}</span></Link>}
             {data && <div className='relative top-1'><span className='text-slate-400 text-sm'>Replying to </span>{data.user && <Link to={`/userprofile/${data.user._id}`} className='text-[0.800rem]'>@{data.user.name}</Link>}</div>}
             <Link to='/' className='relative top-1 text-md text-slate-700 hover:text-slate-700'>{comment.body}</Link>
      
              <div className='flex justify-between mt-3 mb-4 w-full'>
                <span><MessageOutlined className='relative bottom-1 -left-2 text-md' /> 0</span>
                <span><HeartOutlined className='relative bottom-1 -left-2 text-md' onClick={likesHandler}/></span>
                <span><RetweetOutlined className='relative bottom-1 -left-2 text-md'/> </span>
                <span><SendOutlined className='relative bottom-1 -left-2 text-md'/></span>
              </div>
             </div>
                    </div>
                    <DashOutlined  className='text-xl cursor-pointer relative right-4'/>
                </div>
            )
        }
    </div>
    }
   </>
  )
}

export default TweetComments