import { PlusOutlined } from '@ant-design/icons'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const CreateButton = () => {
  const location = useLocation()
  return (
    <>
    {location.pathname === '/dashboard' || location.pathname ==='/profile' ?
    <Link to='/compose/tweet' className='fixed bottom-28 bg-midnightblue text-white shadow-2xl p-2 rounded-full right-5'>
    <PlusOutlined className='text-xl relative  h-[2rem] w-[2rem] ' style={{color:'white'}}/>
</Link>: ''}
    </>
  )
}

export default CreateButton