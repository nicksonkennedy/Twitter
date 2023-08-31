import React, { useState } from 'react'
import { Dropdown, Space , Modal   } from 'antd';
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';
import NotificationsOffOutlinedIcon from '@mui/icons-material/NotificationsOffOutlined';
import GroupRemoveOutlinedIcon from '@mui/icons-material/GroupRemoveOutlined';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import HideSourceOutlinedIcon from '@mui/icons-material/HideSourceOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import { DashOutlined, LoadingOutlined } from '@ant-design/icons';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import QuickreplyOutlinedIcon from '@mui/icons-material/QuickreplyOutlined';

import axios from 'axios';
const ContentDropdown = ({tweet , id}) => {
  const [success, setsuccess] = useState(false)
  const [loading, setloading] = useState(false)
  const [error, seterror] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
   
  };
 
  const handleCancel = () => {
    setIsModalOpen(false);
  };
 //delete
 const tweetid = tweet._id
  const handler = async (e) =>{
    e.preventDefault()
    console.log(tweetid)
    setloading(true)
    try {
     await axios.post(`/api/removeTweet/${tweetid}`)
     handleCancel()
       setsuccess(true)
      setloading(false)
      seterror(null)
    
    } catch (err) {
      setloading(false)
      setsuccess(false)
      seterror(err)
    }
  }
  return (
    
    <div>
    {
    tweet.user._id === id ?
    <Dropdown
        overlay={
            <div className='relative right-[1rem] bottom-4 bg-white shadow-2xl p-3 w-[20rem] rounded-2xl space-y-5'>
<div onClick={showModal} className='flex cursor-pointer space-x-5 text-md font-bold'><DeleteForeverOutlinedIcon className='relative ' style={{color:'red'}} /> <span className='text-red-600'>Delete</span> </div>
    <div className='flex cursor-pointer space-x-5 text-md font-bold'><PushPinOutlinedIcon className='relative ' /> <span>Pin to your profile</span></div>
    {tweet.user && <div className='flex cursor-pointer space-x-5 text-md font-bold'><PostAddOutlinedIcon className='relative ' /> <span>Add/remove @{tweet.user.name}</span></div>}
    <div className='flex cursor-pointer space-x-5 text-md font-bold'><QuickreplyOutlinedIcon className='relative ' /> <span>Change who can reply</span></div>
    <div className='flex cursor-pointer space-x-5 text-md font-bold'><CodeOutlinedIcon className='relative ' /> <span>Embed Tweet</span></div>
    <div className='flex cursor-pointer space-x-5 text-md font-bold'><BarChartOutlinedIcon className='relative ' /> <span>View Tweetanalytics</span></div>
            </div>
        }
        placement='bottom'
    trigger={['click']}
  >
    <span onClick={(e) => e.preventDefault()}>
      <Space>
      <DashOutlined  className='text-xl cursor-pointer'/>
      </Space>
    </span>
  </Dropdown>
  

  :

  <Dropdown
        overlay={
            <div className='relative right-[1rem] bottom-4 bg-white shadow-2xl p-3 w-[20rem] rounded-2xl space-y-4'>
     <div className='flex cursor-pointer space-x-5 text-md font-bold'><SentimentDissatisfiedOutlinedIcon className='relative ' /> <span>Not interested in this tweet</span></div>
     {tweet.user && <div className='flex cursor-pointer space-x-5 text-md font-bold'><GroupRemoveOutlinedIcon className='relative ' /> <span>Unfollow @{tweet.user.name}</span></div>}
     {tweet.user && <div className='flex cursor-pointer space-x-5 text-md font-bold'><PostAddOutlinedIcon className='relative ' /> <span>Add/Remove @{tweet.user.name} from list</span></div>}
     {tweet.user && <div className='flex cursor-pointer space-x-5 text-md font-bold'><NotificationsOffOutlinedIcon className='relative ' /> <span>Mute @{tweet.user.name}</span></div>}
     {tweet.user && <div className='flex cursor-pointer space-x-5 text-md font-bold'><HideSourceOutlinedIcon className='relative ' /> <span>Block @{tweet.user.name}</span></div>}
    <div className='flex cursor-pointer space-x-5 text-md font-bold'><CodeOutlinedIcon className='relative ' /> <span>Embed Tweet</span></div>
    <div className='flex cursor-pointer space-x-5 text-md font-bold'><FlagOutlinedIcon className='relative ' /> <span>Report Tweet</span></div>

            </div>
        }
        placement='bottom'
    trigger={['click']}
  >
    <span onClick={(e) => e.preventDefault()}>
      <Space>
      <DashOutlined  className='text-xl cursor-pointer'/>
      </Space>
    </span>
  </Dropdown>
    }

       <Modal 
        visible={isModalOpen} 
        onCancel={handleCancel}
        width={320}
        footer={null}
        closable={false}
        className	={'rounded-2xl'}
        >
        <div className='p-2'>
          <h1 className='text-xl font-bold'>Delete Tweet?</h1>
          <span className='text-slate-600 text-sm'>This can’t be undone and it will be removed from your profile, the timeline of any accounts that follow you,
             and from Twitter search results</span>

             <div className='relative top-4 grid gap-3'>
             <button className='w-full p-2 bg-red-600 text-white rounded-xl' onClick={handler} disabled={loading}>Delete <span>{loading &&  <LoadingOutlined style={{color:'white', fontSize:'12px'}} className='relative bottom-1'/>}</span></button>
             <button className='w-full p-2 text-slate-900 bg-white rounded-xl border-1 border-slate-300 '  onClick={handleCancel}>Cancel</button>
             </div>
        </div>
      </Modal>
    </div>
  )
}

export default ContentDropdown