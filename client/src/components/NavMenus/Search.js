import { DashOutlined, SettingOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import SideNavDrawer from '../HomePage/SideNavDrawer'
import WhoToFollowSm from '../HomePage/WhoToFollowSm'

const Search = () => {
  return (
    <div className='relative w-full bg-white'>
         <div className='fixed bg-white p-3 w-full  md:w-full med:w-[45%] z-50'>
        <div className='flex space-x-4 justify-between'>
            <div className='relative -left-5 bottom-4 text-sm w-[20%] inline sm:hidden '><SideNavDrawer/></div>
            <div className='relative -left-5 w-[75%]'>
            <input type='text' className='w-full p-[0.35rem] relative border-2 outline-none rounded-2xl' placeholder='Search Twitter'/>
            </div>
       <div className='w-[5%] '> <SettingOutlined className='text-lg cursor-pointer'/></div>
        </div>
        </div>

        <div className='relative top-[5.6rem] p-3'>
            <h1 className='text-lg font-extrabold'>Global Trends</h1>

            <div className='flex justify-between mt-3'>
           <div className='grid cursor-pointer'>
           <span className='text-slate-500'>Music. Trending</span>
            <span className='text-md font-bold'>Roc Nation</span>
            <span className='text-slate-500'>43.56K Tweets</span>
           </div>
           <DashOutlined className='text-sm cursor-pointer'/>
            </div>

            <div className='flex justify-between mt-3'>
           <div className='grid cursor-pointer'>
           <span className='text-slate-500'>Sports. Trending</span>
            <span className='text-md font-bold'>Barcelona</span>
            <span className='text-slate-500'>20.56 Tweets</span>
           </div>
           <DashOutlined className='text-sm cursor-pointer'/>
            </div>

            <div className='flex justify-between mt-3'>
           <div className='grid cursor-pointer'>
           <span className='text-slate-500'>Inventions. Trending</span>
            <span className='text-md font-bold'>Tesla</span>
            <span className='text-slate-500'>10.16K Tweets</span>
           </div>
           <DashOutlined className='text-sm cursor-pointer'/>
            </div>

            

            <div className='flex justify-between mt-3'>
           <div className='grid cursor-pointer'>
           <span className='text-slate-500'>Movies. Trending</span>
            <span className='text-md font-bold'>The House Of Dragons</span>
            <span className='text-slate-500'>12.56K Tweets</span>
           </div>
           <DashOutlined className='text-sm cursor-pointer'/>
            </div>
    <div className='relative top-4'><Link to='' className=''>Show more</Link></div>
           


        </div>

{/*****peopele to follow */}
<div className='relative block sm:hidden top-[5rem]'>
<WhoToFollowSm />
</div>
    </div>
  )
}

export default Search