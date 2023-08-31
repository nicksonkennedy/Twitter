import { ArrowLeftOutlined, PlusCircleOutlined, SearchOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'


const Communities = () => {
  return (
    <div className='relative w-full bg-white'>
         <div className='fixed bg-white p-3 w-full  md:w-full med:w-[45%] z-50'>
        <div className='flex justify-between'>
            <div className='flex space-x-7'>
            <Link to='/dashboard' className='relative bottom-2 text-xl text-slate-900 cursor-pointer'><ArrowLeftOutlined /></Link>
            <div className='relative bottom-2'>
        <h1 className='relative font-bold text-md sm:text-lg top-3 '>Communities</h1>
        </div>
            </div>
      
        <div className='flex space-x-4'>
        <SearchOutlined className='text-xl cursor-pointer'/>
        <span className=''><PlusCircleOutlined className='text-xl cursor-pointer relative bottom-1'/></span>
        </div>

        </div>
        </div>


       <div className='relative top-[6.4rem] p-3 text-center mx-auto text-center'>
        <div className=''><img alt='notification' src='empty.png' className='mx-auto object-cover p-3 rounded-full w-[8rem] h-[8rem]'/></div>
        <h1 className='text-xl font-semibold '>Not following any community yet</h1>
        <h3 className='text-slate-400 text-md '>When you follow, they'll show up here</h3>
       </div>

       <div className='relative top-[6.9rem] p-3 mx-auto'>
        <h1 className='text-xl font-bold '>Discover new Communities </h1>
       <div className='flex'>
       <div className=''><img alt='notification' src='payments.png' className='mx-auto object-cover p-3 rounded-2xl w-[6rem] h-[6rem]'/></div>
       <div className='relative top-6'>
            <h1 className='text-[1rem] font-bold'>Money Talks - Global</h1>
            <h3><span className='font-bold'>1.2k</span> Members</h3>
       </div>

       </div>

       <div className='flex'>
       <div className=''><img alt='notification' src='epl.png' className='mx-auto object-cover p-3 rounded-2xl w-[6rem] h-[6rem]'/></div>
       <div className='relative top-6'>
            <h1 className='text-[1rem] font-bold'>Premier League - Fans</h1>
            <h3><span className='font-bold'>10.9k</span> Members</h3>
       </div>

       </div>

       <div className='flex'>
       <div className=''><img alt='notification' src='web.png' className='mx-auto object-cover p-3 rounded-2xl w-[6rem] h-[6rem]'/></div>
       <div className='relative top-6'>
            <h1 className='text-[1rem] font-bold'>Web Developers</h1>
            <h3><span className='font-bold'>5k</span> Members</h3>
       </div>

       </div>
            
            <div> <Link to=''>Show More</Link> </div>
       </div>

    </div>
  )
}

export default Communities