import { ArrowLeftOutlined, DashOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../Hooks/useAuthContext'

const Lists = () => {
    const {user} = useAuthContext()
  return (
    <div className='relative w-full bg-white'>
        <div className='fixed bg-white shadow-2xl p-3 w-full  md:w-full med:w-[45%] z-50'>
        <div className='flex justify-between'>
            <div className='flex space-x-7'>
            <Link to='/dashboard' className='text-xl text-slate-900 relative bottom-1 cursor-pointer'><ArrowLeftOutlined /></Link>
            <div className='relative bottom-2'>
        <h1 className='relative font-extrabold text-xl'>Lists</h1>
        {user &&<h3 className='relative bottom-2'>@{user.name}</h3>}
        </div>
            </div>
      
        <DashOutlined className='text-xl cursor-pointer'/>

        </div>
        </div>

        <div className='relative top-[7rem] p-6 mx-auto text-center'>
            <h1 className='text-lg sm:text-xl font-bold'>Pinned Lists</h1>
            <h3 className='text-sm sm:text-md text-gray-400'>Nothing to see here yet --- Pin your favourite lists to access them quickly</h3>
        </div>
    </div>
  )
}

export default Lists