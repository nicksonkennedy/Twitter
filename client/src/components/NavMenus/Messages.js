import { MailOutlined, SearchOutlined, SettingOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import SideNavDrawer from '../HomePage/SideNavDrawer'

const Messages = () => {
  return (
    <div className='relative w-full bg-white'>
         <div className='fixed bg-white p-3 w-full  md:w-full med:w-[45%] z-50'>
        <div className='flex justify-between'>
            <div className='flex -space-x-5'>
            <div className='relative -left-5 bottom-4 text-sm inline sm:hidden'><SideNavDrawer/></div>
            <div className='relative bottom-2'>
        <h1 className='relative font-bold text-md sm:text-lg top-3 '>Messages</h1>
        </div>
            </div>
      
        <div className='flex space-x-4'>
        <SettingOutlined className='text-xl cursor-pointer'/>
        <span className='hidden md:inline'><MailOutlined className='text-xl cursor-pointer relative bottom-1'/></span>
        </div>

        </div>
        </div>

        <div className='relative top-[6.4rem] p-3 mx-auto'>
      <input type='text' className='w-full p-[0.68rem] relative border-2 outline-none rounded-2xl' />
      <SearchOutlined className='absolute left-10 bottom-7 text-xl'/>
       </div>

       <div className='relative top-[9.4rem] p-3 text-center mx-auto'>
        <div className=''><img alt='notification' src='message.png' className='mx-auto object-cover p-3 rounded-full w-[7rem] h-[7rem]'/></div>
        <h1 className='text-xl font-semibold '>No Messages yet</h1>
        <h3 className='text-slate-400 text-md '>When you  get a message, they'll show up here</h3>
       </div>


       <div className='fixed md:hidden bottom-28 bg-midnightblue text-white shadow-2xl p-2 rounded-full right-5'>
       <MailOutlined className='text-xl relative  h-[2rem] w-[2rem] ' style={{color:'white'}}/>
       </div>
    </div>
  )
}

export default Messages