import { ArrowLeftOutlined, PictureOutlined, SmileOutlined, UserOutlined } from '@ant-design/icons'
import {  DashOutlined, HeartFilled, HeartOutlined, MessageOutlined, RetweetOutlined, SendOutlined } from '@ant-design/icons'
import { Alert, Avatar, Button,Divider,Result, Skeleton } from 'antd'
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {useQuery, useMutation} from 'react-query'
import axios from 'axios'
import { AddLocationAltOutlined, EventRepeatOutlined, GifBoxOutlined } from '@mui/icons-material'
import { useAuthContext } from '../../Hooks/useAuthContext'
import Slowloader from '../UIComps/Slowloader'
import TweetComments from './TweetComments'

const TweetDetails = ({id}) => {
    const {user} = useAuthContext()
    const userid = user.id
    const PF = "http://localhost:5000/images/"
    const [body, setBody] = useState('')
    const [show, setshow] = useState(false)
    const [btn, setbtn] = useState(false)
  const [commentsuccess, setcommentsuccess] = useState(false)
  const [commentError, setcommentError] = useState(null)
  const [commentLoading, setcommentLoading] = useState(false)
    //fetching data
    const fetchDetails = async () =>{
        const response =  await fetch(`/api/tweet/${id}`)
        return response.json()
      }
      const {data,isLoading, isError,} = useQuery("tweetDetails", fetchDetails,  {
        refetchInterval: 1000,
        refetchIntervalInBackground:true
      })
       
       //likes and unikes
const likesHandler = async(id) =>{
 
    try {
      await axios.put('/api/likes', {id})
    } catch (error) {
      console.log(error)
      
    }
  }
  
  
    //likes and unikes
    const unlikesHandler = async(id) =>{
   
      try {
        await axios.put('/api/unlikes', {id})
      } catch (error) {
        console.log(error)
        
      }
    }
    const btnhanler = () =>{
      if(body.trim().length !== 0){
        setbtn(true)
      }else{
        setbtn(false)
      }
    }
    const submitHandler = async(id) =>{
     setcommentLoading(true)
     const data ={_id:id ,  body:body,user:user.id }
      try {
        const res = await axios.put('/api/addComment',data)
        setcommentLoading(false)
        setcommentsuccess(true)
        setcommentError(null)
        setBody('')
      } catch (error) {
        setcommentLoading(false)
        setcommentsuccess(false)
        setcommentError(error)
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
    <div className='relative w-full bg-white'>
        <div className='fixed bg-white shadow-2xl p-3 w-full  md:w-full med:w-[45%] z-50'>
        {commentsuccess && <Alert message="Reply sent" type="info" className='absolute top-6 z-50 rounded-lg p-2' showIcon  closable/>}
        {commentError && <Alert message="Reply not sent" type="error" className='absolute top-6 z-50 rounded-lg p-3' showIcon  closable/>}
       {commentLoading && <Slowloader />}
        <div className='flex '>
        <Link to='/dashboard' className='text-xl text-slate-900 relative bottom-1 cursor-pointer'><ArrowLeftOutlined /></Link>
       <div className='relative left-10 font-extrabold text-xl'>Tweet</div>
        </div>
        </div>

        {/****content********************************************** */}
        <div className='relative top-[3rem] p-1 '>
{/**Loading */}
       {isLoading &&  
     <div className='relative top-7 p-2'>
       <Skeleton
      avatar
      paragraph={{
        rows: 4,
      }}
      active 
    />
     </div>
      }
       {/**error */}
      {isError && <Result status="500"  title="500"  subTitle={isError} extra={<Button type="primary">Reload</Button>}/>}
      
       {/**when data is received */}
      
          
         {data && <div className='relative top-[2rem] border-none sm:border-t-1  border-slate-100 w-full'>
          <div className='flex justify-between'>
         <span className='flex'>
          {data.user.userImage ?
             <img src={PF+data.user.userImage} alt='userImage' className=' object-cover p-3 rounded-full w-[5.5rem] h-[5.1rem]' /> :
             <div className='relative top-1 p-2 '><Avatar size={50} icon={<UserOutlined />} /></div>
          }
         <div className='relative top-1'>
         {data.user && <div className='relative top-2'><span className='font-bold text-md'>{data.user.name}</span> <span>@{data.user.name}</span></div>}
         <div className='relative top-1 text-md text-slate-700 hover:text-slate-700'>{data.body}</div>
            <div className='flex relative top-[1rem] '>
            <span className='text-slate-500 text-md'>{new Date (data.date).toDateString()}</span>
            </div>
            <Divider></Divider>
            <div className='relative top[1.6rem] flex space-x-6'>
              <div><span className='text-md font-bold'>{data.retweets.length}</span> <span className='text-md text-slate-500'>Retweets</span></div>
              <div><span className='text-md font-bold'>{data.retweets.length}</span> <span className='text-md text-slate-500'>Quote Tweets</span></div>
              <div><span className='text-md font-bold'>{data.likes.length}</span> <span className='text-md text-slate-500'>Likes</span></div>
            </div>
            <Divider></Divider>
          <div className='flex justify-between mt-3 mb-4 w-full'>
            <span><MessageOutlined className='relative bottom-1 -left-2 text-md' /> </span>
            {data.likes.includes(userid) ?
            <span className='text-red-800'><HeartFilled className='relative bottom-1 -left-2 text-md' style={{color:'red'}} onClick={()=>unlikesHandler(data._id)}/></span>
            :
            <span><HeartOutlined className='relative bottom-1 -left-2 text-md' onClick={()=>likesHandler(data._id)}/></span>
            }
           
           {
                data.retweets.includes(userid) ?
                <span className='bg-green-800 px-1 py-[0.03rem] rounded-2xl'> <RetweetOutlined className='relative bottom-1  text-md' style={{color:'white'}}/></span>
                :
                <span className='' onClick={()=>retweetHandler(data._id)}> <RetweetOutlined className='relative bottom-1 -left-2 text-md'/></span>
               }
            <span><SendOutlined className='relative bottom-1 -left-2 text-md'/></span>
          </div>
          <Divider></Divider>
         </div>
         </span>
         <DashOutlined  className='text-xl cursor-pointer relative right-4'/>
          </div>
  
         </div>}
          
         
        </div>
        {/*******************************end of content */}
            {show &&
            <div> {data && <div className='relative text-center top-[4.4rem]'><span className='text-slate-300'>Replying to </span>{data.user && <Link to='/'>@{data.user.name}</Link>}</div>}
            </div>
            }
        { user && <div className='relative top-[4rem] p-3'>
        <div className='flex'>
          <div>
          {user.userImage ?
                 <img src={PF+user.userImage} alt='userImage' className=' object-cover p-3 rounded-full w-[5.5rem] h-[5.1rem]' /> :
                 <div className='relative top-[1rem] '><Avatar size={50} icon={<UserOutlined />} /></div>
              }
          </div>

        <textarea
         rows='1'  
         maxLength='280 ' 
         className='w-full p-4 text-lg text-slate-600 outline-none border-none' 
         placeholder="What's Happening"
         value={body}
         onChange={e=>setBody(e.target.value)}
         onKeyDown={btnhanler}
         onClick={()=>setshow(true)}
         >

        </textarea>
        </div>


        {show && <div className='relative p-3 flex justify-between'>
        <div className='flex space-x-4 relative left-12'>
        <PictureOutlined style={{color:'#2E8BC0'}} className='text-lg cursor-pointer'/>
        <GifBoxOutlined style={{color:'#2E8BC0'}} className='relative bottom-1 text-lg cursor-pointer'/>
        <SmileOutlined style={{color:'#2E8BC0'}} className='text-lg cursor-pointer'/>
        <AddLocationAltOutlined style={{color:'#2E8BC0'}} className='relative bottom-1 text-lg cursor-pointer'/>
        <EventRepeatOutlined style={{color:'#2E8BC0'}} className='relative bottom-1 text-lg cursor-pointer'/>
        </div>

       <div className=' flex'>
{ show && <span className='font-extrabold text-[0.70rem] relative right-[1rem] top-3 font-monospace'><span className='text-slate-500'>{body.length}</span>/<span >280</span></span> } 
  {data && <button className={btn ? 'px-3 bg-midnightblue py-1 text-white rounded-2xl' :'px-3 py-1 text-white rounded-2xl bg-blue-300'} disabled={!btn}  onClick={()=>submitHandler(data._id)}>Tweet</button>}
         </div>
       </div>}
       <Divider></Divider>
        </div>}

        {/****Comments of users */}

       {data && <TweetComments data={data} likesHandler={likesHandler} />}
    </div>
  )
}

export default TweetDetails