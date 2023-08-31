import { SettingOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import SideNavDrawer from '../HomePage/SideNavDrawer'

const Notifications = () => {
  return (
    <div className='relative w-full bg-white'>
         <div className='fixed bg-white p-3 w-full  md:w-full med:w-[45%] z-50'>
        <div className='flex justify-between'>
            <div className='flex -space-x-5'>
            <div className='relative -left-5 bottom-4 text-sm inline sm:hidden'><SideNavDrawer/></div>
            <div className='relative bottom-2'>
        <h1 className='relative font-bold text-md sm:text-lg top-3 '>Notifications</h1>
        </div>
            </div>
      
        <SettingOutlined className='text-xl cursor-pointer'/>

        </div>
        </div>

        <div className='relative top-[5.4rem] p-3 flex justify-between mx-auto'>
       <div className='underline underline-offset-20 cursor-pointer p-2 hover:bg-gray-300'> <Link to='' className='text-sm sm:text-md text-slate-900 font-bold hover:text-slate-700'>All</Link></div>
       <div className='cursor-pointer p-2 hover:bg-gray-300'> <Link to='' className='text-sm sm:text-md text-slate-900 font-semibold hover:text-slate-700'>Verified</Link></div>
       <div className='cursor-pointer p-2 hover:bg-gray-300'> <Link to='' className='ext-sm sm:text-md text-slate-900 font-semibold hover:text-slate-700'>Mentions</Link></div>
       </div>

       <div className='relative top-[7.4rem] p-3 text-center mx-auto'>
        <div className=''><img alt='notification' src='bell.jpg' className='mx-auto object-cover p-3 rounded-full w-[7rem] h-[7rem]'/></div>
        <h1 className='text-xl font-semibold '>No notifications yet</h1>
        <h3 className='text-slate-400 text-md '>When you  get notifications, they'll show up here</h3>
       </div>
    </div>
  )
}

export default Notifications