import { CheckOutlined, DashOutlined, DownOutlined, GlobalOutlined, HeartFilled, HeartOutlined, MessageOutlined, PictureOutlined, RetweetOutlined, SendOutlined, SmileOutlined, TwitterOutlined, UngroupOutlined, UnorderedListOutlined, UploadOutlined, UsergroupAddOutlined } from '@ant-design/icons'
import { Button, Divider, Dropdown, Result, Space,Alert } from 'antd'
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import EventRepeatOutlinedIcon from '@mui/icons-material/EventRepeatOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import React, { useState } from 'react'
import SideNavDrawer from './SideNavDrawer';
import useFetch from '../../Hooks/useFetch';
import { Skeleton } from 'antd';
import { useAuthContext } from '../../Hooks/useAuthContext';
import LinearProgress from '@mui/material/LinearProgress';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {useQuery, useMutation} from 'react-query'
import { Link } from 'react-router-dom';
import ContentDropdown from '../UIComps/ContentDropdown';

const Content = () => {
  const PF = "http://localhost:5000/images/"
  const [switchContent, setswitchContent] = useState(false)
  //const {Data:tweets,setData,loading,error} = useFetch('/api/allTweets')

const fetchTweet = async () =>{
  const response =  await fetch('/api/allTweets')
  return response.json()
}
const {data,isLoading, isError,error, isFetching} = useQuery("allTweets", fetchTweet , {
  refetchInterval: 1000,
refetchIntervalInBackground:true
})

     

  const {user} = useAuthContext()
    const id = user.id
    
   
  const [body, setBody] = useState('')
  const [Success, setSuccess] = useState(false)
  const [Error, setError] = useState(null)
  const [Loading, setLoading] = useState(false)
  const [btn, setbtn] = useState(false)
  const [show, setshow] = useState(false)



  const btnhanler =() =>{
    if(body.trim().length !== 0){
      setbtn(true)
    }else{
      setbtn(false)
    }
  }
  

  const handler = async (e) =>{
    e.preventDefault()
    const user = id
    setLoading(true)
    try {
     await axios.post('/api/newTweet', {user:user , body:body})
     setBody('')
     setSuccess(true)
      setLoading(false)
      Error(null)
    
    } catch (err) {
      setLoading(false)
      Error(err.message)
      setSuccess(false)
    }
  }


  //likes
const likesHandler = async(id) =>{
 
  try {
    await axios.put('/api/likes', {id , user:user.id})
    console.log('liked')
  } catch (error) {
    console.log(error)
    
  }
}
  //unikes
  const unlikesHandler = async(id) =>{
 
    try {
      await axios.put('/api/unlikes', {id, user:user.id})
      console.log('unliked ')
    } catch (error) {
      console.log(error)
      
    }
  }

    //likes
const retweetHandler = async(id) =>{
 
  try {
    await axios.put('/api/retweets', {id , user:user.id})
  } catch (error) {
    console.log(error)
    
  }
}

  return (
    <div className='relative  '>
<div className='fixed z-50 bg-white w-full  md:w-full med:w-[45%] -top-3 shadow-sm '>
 <div className='flex justify-between p-3 '>
 <span className='text-left flex'> <span className='inline relative -left-6 sm:hidden'><SideNavDrawer /></span> <span className=' relative top-1 hidden sm:inline text-lg md:text-xl font-extrabold'>Home</span></span>
 <a href='#top' className=' relative -left-[3rem] inline sm:hidden top-1 text-lg md:text-xl font-semibold'><img src='twit.png' alt='logo' className='h-[2.5rem] w-[2.5rem]  object-cover' /></a>
  <span className='float-right relative  '></span>
 </div>
 <div className='relative -top-2 p-2 flex justify-around'>
<div onClick={()=>setswitchContent(false)} className={switchContent ? 'cursor-pointer' :'underline underline-offset-20 cursor-pointer  text-midnightblue font-extrabold'}><span className='font-bold text-md text-slate-900'>For you</span></div>
<div onClick={()=>setswitchContent(true)} className={switchContent ? 'underline underline-offset-20 cursor-pointer  text-midnightblue font-extrabold': 'cursor-pointer'}><span className='font-bold text-md text-slate-900'>Following</span></div>
 </div>
 {Loading &&  <LinearProgress />}
 {Error && <Alert message={Error} type="error" showIcon closable className='relative bottom-10' />}
  {Success && <Alert message={<span className='font-bold font-monospace text-blueblue'>New Tweet Added</span>} type="info" showIcon closable className='relative bottom-10'/> }
</div>

{data &&<div className='relative top-[7rem] -left-3 hidden sm:inline  '>
<div className='flex'>
  { user.userImage ?
    <span className='relative bottom-8'><img src={PF+user.userImage} alt='user' className=' object-cover p-3 rounded-full w-[6rem] h-[6rem]' /></span>:
    <span className='relative bottom-8'><img src='default.jpg' alt='user' className=' object-cover p-3 rounded-full w-[6rem] h-[6rem]' /></span>
  }


{show &&<Dropdown
    overlay={<div className='relative left-4 bg-white shadow-2xl p-2 w-[20rem] rounded-2xl'>
     <div className='grid gap-1 '>
      <div className='text-lg font-bold relative left-6 '>Choose Audience</div>
      
      <div className='mt-2'>
      <div className='text-xl font-semibold p-3 cursor-pointer hover:bg-slate-100 rounded-lg'><GlobalOutlined className='relative bottom-1 p-2 bg-orange-500 rounded-full' style={{color:'white'}} /> <span className='relative left-2'>Everyone</span> <CheckOutlined className='float-right relative top-2' style={{color:'blue'}}/></div>
      <div className='text-xl font-semibold p-3 cursor-pointer hover:bg-slate-100 rounded-lg'><UsergroupAddOutlined className='relative bottom-1 p-2 bg-green-500 rounded-full' style={{color:'white'}} /> <span className='relative left-2'>Twitter Circle</span> </div>
      <div className='text-xl font-semibold p-3 cursor-pointer hover:bg-slate-100 rounded-lg'><TwitterOutlined className='relative bottom-1 p-2 bg-blue-500 rounded-full' style={{color:'white'}} /> <span className='relative left-2'>Followers Only</span> </div>
      </div>
     </div>
      </div>}
    trigger={['click']}
    placement='bottom'
  >
    <span onClick={(e) => e.preventDefault()} className='cursor-pointer relative -left-3'>
      <Space className=' border-1 border-slate-300 px-2 py-[0.03rem] rounded-xl '>
     <span className='text-sm font-semibold text-blue-500'>Everyone</span>   <DownOutlined className='relative bottom-[0.20rem]' style={{fontSize:'10px'}}/>
      </Space>
    </span>
  </Dropdown>}
</div>
</div>}

    {data && <div className='hidden relative sm:inline top-[3rem]'>
        
        <textarea
         rows='1'  
         autoFocus maxLength='280 ' 
         className='w-full p-4 text-lg text-slate-600 outline-none border-none' 
         placeholder="What's Happening"
         value={body}
         onChange={e=>setBody(e.target.value)}
         onKeyDown={btnhanler}
         onClick={()=>setshow(true)}
         >

        </textarea>
       

    {show &&    <Dropdown
    overlay={<div className='relative left-3 bg-white shadow-2xl p-3 w-[20rem] rounded-2xl'>
     <div className='grid gap-1 '>
      <div className='text-lg font-bold '>Who Can Reply</div>
      <div className='text-sm  text-slate-500'>Choose who can reply to this Tweet. Anyone mentioned can  reply.</div>
      <div className='mt-2'>
      <div className='text-xl font-semibold p-3 cursor-pointer hover:bg-slate-100 rounded-lg'><GlobalOutlined className='relative bottom-1 p-2 bg-blue-500 rounded-full' style={{color:'white'}} /> <span className='relative left-2'>Everyone</span> <CheckOutlined className='float-right relative top-2' style={{color:'blue'}}/></div>
      <div className='text-xl font-semibold p-3 cursor-pointer hover:bg-slate-100 rounded-lg'><UsergroupAddOutlined className='relative bottom-1 p-2 bg-blue-500 rounded-full' style={{color:'white'}} /> <span className='relative left-2'>Twitter Circle</span> </div>
      <div className='text-xl font-semibold p-3 cursor-pointer hover:bg-slate-100 rounded-lg'><TwitterOutlined className='relative bottom-1 p-2 bg-blue-500 rounded-full' style={{color:'white'}} /> <span className='relative left-2'>Followers Only</span> </div>
      </div>
     </div>
      </div>}
    trigger={['click']}
    placement='bottom'
  >
    <span onClick={(e) => e.preventDefault()} className='cursor-pointer'>
      <Space className=' text-blue-900 relative left-6'>
     <span className='text-sm font-semibold text-blue-700'> <GlobalOutlined className='relative bottom-1' /> Everyone can reply</span>   
      </Space>
    </span>
  </Dropdown>}
{ show && <span className='font-extrabold text-lg relative left-[15rem] top-1 font-monospace'><span className='text-slate-500'>{body.length}</span>/<span >280</span></span>}        <Divider></Divider>
        <div className='relative -top-10 p-8 flex justify-between'>
        <div className='flex space-x-6'>
        <PictureOutlined style={{color:'#2E8BC0'}} className='text-lg cursor-pointer'/>
        <GifBoxOutlinedIcon style={{color:'#2E8BC0'}} className='relative bottom-1 text-lg cursor-pointer'/>
        <SmileOutlined style={{color:'#2E8BC0'}} className='text-lg cursor-pointer'/>
      <span className='hidden sm:inline'>  <UnorderedListOutlined style={{color:'#2E8BC0'}} className='relative bottom-1 text-lg cursor-pointer '/></span>
        <AddLocationAltOutlinedIcon style={{color:'#2E8BC0'}} className='relative bottom-1 text-lg cursor-pointer'/>
        <EventRepeatOutlinedIcon style={{color:'#2E8BC0'}} className='relative bottom-1 text-lg cursor-pointer'/>
        </div>

       <span className='float-right p-2 relative bottom-3'> <button className={btn ? 'px-5 bg-midnightblue py-2 text-white rounded-2xl' :'px-5 py-2 text-white rounded-2xl bg-blue-300'} disabled={!btn}  onClick={handler}>Tweet</button></span>
       </div>
       {show && <Divider className='relative bottom-16'></Divider>}


      </div>}
      {/*************************content */}
     <div className='mt-10 p-[0.40rem] '>
      {/***isFecthing */}
    
      {/**Loading */}
      {isLoading &&  
      <div className='relative top-16'>
        <Skeleton
      avatar
      paragraph={{
        rows: 5,
      }}
      active 
    />
      </div>
      }
       {/**error */}
      {isError && <Result status="500"  title="500"  subTitle={error.message} extra={<Button type="primary">Reload</Button>}/>}
      
       {/**when data is received */}
         {
          data && data.length === 0 ?
           <div className='relative top-[1rem] text-center mx-auto p-5'>
            <h1 className='text-2xl'>No Tweet Yet?</h1>
            <h3 className='text-md font-semibold font-monospace'>Create one now or follow to see contents here</h3>
            <img src='nodata.png' alt='empty' className=' w-[15rem] h-[15rem] mx-auto object-cover' />
            </div>
          :
          
            data && data.map(tweet =>
              <div className='cursor-pointer -left-4 relative bottom-16 top-[5.5rem] sm:-top-12 border-none sm:border-t-1  border-slate-100 w-full  hover:bg-gray-50'>
              <div className='flex justify-between'>
             <span className='flex'>
              {tweet.user.userImage ?
                 <img src={PF+tweet.user.userImage} alt='userImage' className=' object-cover p-3 rounded-full w-[5rem] h-[5rem]' /> :
                  <img src='default.jpg' alt='userImage' className=' object-cover p-3 rounded-full w-[5.5rem] h-[5.5rem]' />
              }
             <div className='relative top-1'>
             {tweet.user &&<div> <Link to={`/userprofile/${tweet.user._id}`} className='relative top-2 flex'><span className='font-bold text-slate-800 text-md'>{tweet.user.name}</span> {tweet.user.status && <span ><img src='bluecheck.png' alt='checklogo' className='relative top-[0.12rem]  h-[1.1rem] w-[1.1rem]'/> </span>} <span className='text-slate-700'>@{tweet.user.name}</span></Link></div>}
             <Link to={`/tweet/${tweet._id}`} className='relative top-1 text-md text-slate-700 hover:text-slate-700'>{tweet.body}</Link>
      
              <div className='flex justify-between mt-3 mb-4 w-full'>
                <span><MessageOutlined className='relative bottom-1 -left-2 text-md' /> {tweet.comments.length}</span>
                {tweet.likes.includes(id) ?
                <span className='text-red-800 font-semibold'><HeartFilled className='relative bottom-1 -left-2 text-md' style={{color:'red'}} onClick={()=>unlikesHandler(tweet._id)}/>{tweet.likes.length}</span>
                :
                <span><HeartOutlined className='relative bottom-1 -left-2 text-md' onClick={()=>likesHandler(tweet._id)}/> {tweet.likes.length}</span>
                }
               {
                tweet.retweets.includes(id) ?
                <span className='text-green-800 font-semibold '> <RetweetOutlined className='relative bottom-1 -left-2 text-md'/>{tweet.retweets.length}</span>
                :
                <span onClick={()=>retweetHandler(tweet._id)}> <RetweetOutlined className='relative bottom-1 -left-2 text-md'/>{tweet.retweets.length}</span>
               }
                
                <span><UploadOutlined className='relative bottom-2 -left-2 text-md'/></span>
              </div>
             </div>
             </span>
            <ContentDropdown tweet={tweet} id={id}/>
              </div>
      
             </div>
              )
          
         }

    

      {/**
       * 
       *  <div className='cursor-pointer relative bottom-16 top-[5rem] sm:-top-5 border-t-2 border-slate-100'>
        <div className='flex justify-between'>
       <span className='flex'>
       <img src='user1.jfif' alt='userImage' className=' object-cover p-3 rounded-full w-[5rem] h-[5rem]' />
       <div>
       <div className='relative top-2 flex'><span className='font-bold text-lg'>Nickson </span><img src='bluecheck.png' alt='checklogo' className='relative top-[0.30rem]  h-[1.2rem] w-[1.2rem]'/> <span className='relative top-1'>@niqxin</span></div>
       <div className='relative top-1 text-lg text-slate-700'> The emergence of computer science and software development has provided more jobs than the government can ever do. Much attention should be given to that sector to fight all unemployment issues</div>

        <div className='flex justify-between mt-3 mb-4'>
          <span><MessageOutlined className='relative bottom-1 -left-2' /> 300</span>
          <span><HeartOutlined className='relative bottom-1 -left-2'/> 1,200</span>
          <span><RetweetOutlined className='relative bottom-1 -left-2'/> 10K</span>
          <span><SendOutlined className='relative bottom-1 -left-2'/></span>
        </div>
       </div>
       </span>
       <DashOutlined  className='text-xl cursor-pointer'/>
        </div>

       </div>

       */}

       
     </div>

    </div>
  )
}

export default Content