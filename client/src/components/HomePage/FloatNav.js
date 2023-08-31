import { BellFilled, BellOutlined, HomeOutlined, MailFilled, MailOutlined, SearchOutlined, UsergroupAddOutlined } from '@ant-design/icons'
import { Group } from '@mui/icons-material'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const FloatNav = () => {
  const location = useLocation()
  return (
   <>
   {location.pathname === '/dashboard' || location.pathname ==='/profile' || 
   location.pathname ==='/topics' || location.pathname ==='/bookmarks' 
   || location.pathname ==='/notifications' || location.pathname ==='/messages' 
   || location.pathname ==='/communities' || location.pathname ==='/search'  ?
     <div className='fixed bg-white shadow-2xl p-2 bottom-0 w-full border-1 border-t-slate-300 mt-12'>
     <div className='relative flex justify-between top-2 '>
          <Link to='/dashboard' className='text-slate-900 hover:text-slate-900 hover:font-semibold'> <HomeOutlined className='relative bottom-2 text-2xl' /><span className='p-[0.01rem] text-[0.30rem] bg-midblue text-midblue rounded-full relative bottom-6 -left-3'>00</span></Link> 
          <Link to='/search' className='text-slate-900 hover:text-slate-900 hover:font-semibold'> <SearchOutlined className='relative bottom-1 text-2xl' /></Link> 
          {location.pathname==='/communities' ? <Link to='/communities' className='text-slate-900 hover:text-slate-900 hover:font-semibold'> <Group className='relative bottom-1 text-2xl' style={{fontSize:'30px'}}/> </Link>: <Link to='/communities' className='text-slate-900 hover:text-slate-900 hover:font-semibold'> <UsergroupAddOutlined className='relative bottom-1 text-2xl' /> <span className='p-[0.01rem] text-[0.30rem] bg-midblue text-midblue rounded-full relative bottom-4 -left-3'>00</span></Link> }
          {location.pathname ==='/notifications' ?<Link to='/notifications' className='text-slate-900 hover:text-slate-900 hover:font-semibold'> <BellFilled className='relative bottom-1 text-2xl' /> </Link> : <Link to='/notifications' className='text-slate-900 hover:text-slate-900 hover:font-semibold'> <BellOutlined className='relative bottom-1 text-2xl' />  <span className='p-[0.15rem] text-[0.60rem] bg-midblue text-white rounded-full relative bottom-2 -left-3'>01</span></Link> }
          {location.pathname==='/messages' ? <Link to='/messages' className='text-slate-900 hover:text-slate-900 hover:font-semibold'> <MailFilled className='relative bottom-1 text-2xl' /> </Link>:<Link to='/messages' className='text-slate-900 hover:text-slate-900 hover:font-semibold'> <MailOutlined className='relative bottom-1 text-2xl' /> <span className='p-[0.17rem] text-[0.70rem] bg-midblue text-white rounded-full relative bottom-2 -left-3'>01</span>  </Link> }
          </div>
        </div> :
        ''
   }
   </>
  )
}

export default FloatNav