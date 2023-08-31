import { DashOutlined, SearchOutlined } from '@ant-design/icons'
import React from 'react'

const TrendingPage = () => {
  return (
    <div className='p-3 top-[1rem] fixed w-[35%] md:w-[39%] xl:w-[28%] z-50'>
       <div className='relative bottom-4'>
       <input type='search' placeholder='Search Twitter' className='w-full p-2 relative rounded-2xl outline-none bg-slate-100' />
       <SearchOutlined className='relative bottom-8 left-3 text-xl' />
       </div>

       {/*************************************************************************/ }
        <div className='p-3 bg-gray-50 rounded-2xl'>
            <h1 className='text-xl font-extrabold'>Trends for you</h1>

            <div className='flex justify-between mt-3'>
           <div className='grid cursor-pointer'>
           <span className='text-slate-500'>Trending in the world</span>
            <span className='text-md font-bold'>Qatar2022 World Cup</span>
            <span className='text-slate-500'>43.56K Tweets</span>
           </div>

           <DashOutlined className='text-xl cursor-pointer'/>
            </div>

        </div>

    </div>
  )
}

export default TrendingPage