import { CheckOutlined,ArrowLeftOutlined , DownOutlined, GlobalOutlined, PictureOutlined, TwitterOutlined, UsergroupAddOutlined } from '@ant-design/icons'
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import EventRepeatOutlinedIcon from '@mui/icons-material/EventRepeatOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import { Alert, Divider, Dropdown, Space } from 'antd'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../Hooks/useAuthContext';
import LinearProgress from '@mui/material/LinearProgress';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

const NewTweet = () => {
  const {user} = useAuthContext()
    const id = user.id
    console.log(id)
    //useNavigate
    const navigate = useNavigate()
  const [body, setBody] = useState('')
  const [Success, setSuccess] = useState(false)
  const [Error, setError] = useState(null)
  const [Loading, setLoading] = useState(false)
  const [btn, setbtn] = useState(false)

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
    console.log(user)
    setLoading(true)
    try {
     await axios.post('/api/newTweet', {user:user , body:body})
     setSuccess(true)
     setBody('')
    setLoading(false)
    setError(null)
    navigate('/dashboard')
    } catch (error) {
      setLoading(false)
      setError(error)
      setSuccess(false)
    }
  }
  return (
    <>
     {Loading &&  <LinearProgress />}
     {Error && <Alert message={Error} type="error" showIcon closable className='relative bottom-10' />}
  {Success && <Alert message={<span className='font-bold font-monospace text-blueblue'>New Tweet Added</span>} type="info" showIcon closable className='relative bottom-10'/> }
      <div className='fixed w-full p-3 bg-white shadow-lg'>
    <div className='flex justify-between'> 
    <Link to='/dashboard' className='text-slate-900'><ArrowLeftOutlined className='text-2xl relative top-1'  /></Link>
     <button type='submit' className={btn ? 'px-4 py-1 rounded-2xl bg-midnightblue text-white text-xl' : 'px-4 py-1 rounded-2xl bg-blue-300 text-white text-xl'} onClick={handler} disabled={!btn}>Tweet</button>
      </div>
    </div>
    <div className='w-full relative top-[3rem] p-3'>
      <div className='relative top-8 '>

<div className=''>
<Dropdown
className='relative left-3'
    overlay={<div className='relative left-2 bg-white shadow-2xl p-4 w-[20rem] rounded-2xl'>
     <div className='grid gap-1 '>
      <div className='text-2xl font-bold '>Choose Audience</div>
      
      <div className='mt-5'>
      <div className='text-xl font-semibold p-3 cursor-pointer hover:bg-slate-100 rounded-lg'><GlobalOutlined className='relative bottom-1 p-2 bg-orange-500 rounded-full' style={{color:'white'}} /> <span className='relative left-2'>Everyone</span> <CheckOutlined className='float-right relative top-2' style={{color:'blue'}}/></div>
      <div className='text-xl font-semibold p-3 cursor-pointer hover:bg-slate-100 rounded-lg'><UsergroupAddOutlined className='relative bottom-1 p-2 bg-green-500 rounded-full' style={{color:'white'}} /> <span className='relative left-2'>Twitter Circle</span> </div>
      <div className='text-xl font-semibold p-3 cursor-pointer hover:bg-slate-100 rounded-lg'><TwitterOutlined className='relative bottom-1 p-2 bg-blue-500 rounded-full' style={{color:'white'}} /> <span className='relative left-2'>Followers Only</span> </div>
      </div>
     </div>
      </div>}
    trigger={['click']}
    placement='bottom'
  >
    <span onClick={(e) => e.preventDefault()} className='cursor-pointer'>
      <Space className=' border-2 border-slate-300 p-1 rounded-xl '>
     <span className='text-md font-semibold text-blue-500'>Everyone</span>   <DownOutlined className='relative  left-1 p-1'/>
      </Space>
    </span>
  </Dropdown>
  <span className='font-extrabold text-lg relative left-[10rem] top-1 font-monospace p-2'><span className='text-slate-500'>{body.length}</span>/<span >280</span></span>

</div>
</div>

<div className='relative -top-2 p-5'>
<textarea
   rows='2'
   autoFocus
    maxLength='280 ' 
    className='w-full p-3 text-xl outline-none' 
    placeholder="What's Happening"
    value={body}
    onChange={e=>setBody(e.target.value)}
    onKeyDown={btnhanler}
    >
</textarea>
       

       
       
        <Dropdown className='relative top-[6rem]'
    overlay={<div className='relative left-2 bg-white shadow-2xl p-4 w-[20rem] rounded-2xl'>
     <div className='grid gap-1 '>
      <div className='text-2xl font-bold '>Who Can Reply</div>
      <div className='text-lg  text-slate-500'>Choose who can reply to this Tweet. Anyone mentioned can  reply.</div>
      <div className='mt-5'>
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
      <Space className=' text-blue-900 relative '>
     <span className='text-lg font-bold text-midblue'> <GlobalOutlined className='relative bottom-1' /> Everyone can reply</span>   
      </Space>
    </span>
  </Dropdown>
  <Divider></Divider>
        <div className='relative top-[5rem]  flex justify-between'>
        <div className='flex space-x-8'>
        <PictureOutlined style={{color:'#2E8BC0'}} className='text-2xl cursor-pointer'/>
        <GifBoxOutlinedIcon style={{color:'#145DA0'}} className='text-2xl cursor-pointer'/>
        <AddLocationAltOutlinedIcon style={{color:'#145DA0'}} className='text-2xl cursor-pointer'/>
        <EventRepeatOutlinedIcon style={{color:'#145DA0'}} className='text-2xl cursor-pointer'/>
        </div>
       </div>
      


      </div>
    </div></>
  )
}

export default NewTweet