import { ArrowLeftOutlined, MessageOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'

const Topics = () => {
  return (
    <div className='relative w-full bg-white'>
 <div className='fixed bg-white shadow-2xl p-3 w-full  md:w-full med:w-[45%] z-50'>
        <div className='flex '>
        <Link to='/dashboard' className='text-xl text-slate-900 relative bottom-1 cursor-pointer'><ArrowLeftOutlined /></Link>
       <div className='relative left-10 font-extrabold text-xl'>Topics</div>
        </div>
        </div>


        <div className='relative top-[3.4rem] p-1 flex justify-between mx-auto'>
       <div className='underline underline-offset-20 cursor-pointer p-2 hover:bg-gray-300'> <Link to='' className='text-sm sm:text-lg text-slate-900 font-semibold hover:text-slate-700'>Followed</Link></div>
       <div className='cursor-pointer p-2 hover:bg-gray-300'> <Link to='' className='text-sm sm:text-lg text-slate-900 font-semibold hover:text-slate-700'>Suggested</Link></div>
       <div className='cursor-pointer p-2 hover:bg-gray-300'> <Link to='' className='text-[0.80rem] sm:text-lg text-slate-900 font-semibold hover:text-slate-700'>Not  Interested</Link></div>
       </div>

       <div className='relative top-[4rem] text-md sm:text-lg text-slate-600 p-3'>
       The Topics you follow are used to personalize the Tweets, events, and ads that you see, and show up publicly on your profile
       </div>


                <div className='relative top-[5.3rem] p-3 border-top border-slate-400 grid gap-2'>
                    <div className='flex justify-between'>
                    <div className='flex space-x-3'>
                   <div className='relative top-2'> <MessageOutlined className='p-[0.70rem] bg-midblue rounded-full' style={{color:'white'}}/></div>
                    <div className='relative left-1'>
                        <h1 className='relative font-semibold text-lg'>Apple</h1>
                        <h3 className='relative bottom-[0.73rem] text-gray-500 text-md'>Tech Brand</h3>
                    </div>
                    </div>

                    <div><button className='py-1 px-4 bg-white border border-slate-400 rounded-xl'>Follow</button></div>
                    </div>


                    <div className='flex justify-between'>
                    <div className='flex space-x-3'>
                   <div className='relative top-2'> <MessageOutlined className='p-[0.70rem] bg-midblue rounded-full' style={{color:'white'}}/></div>
                    <div className='relative left-1'>
                        <h1 className='relative font-semibold text-lg'>Afrobeats</h1>
                        <h3 className='relative bottom-[0.73rem] text-gray-500 text-md'>Music Genre</h3>
                    </div>
                    </div>

                    <div><button className='py-1 px-4 bg-white border border-slate-400 rounded-xl'>Follow</button></div>
                    </div>


                    <div className='flex justify-between'>
                    <div className='flex space-x-3'>
                   <div className='relative top-2'> <MessageOutlined className='p-[0.70rem] bg-midblue rounded-full' style={{color:'white'}}/></div>
                    <div className='relative left-1'>
                        <h1 className='relative font-semibold text-lg'>Movies</h1>
                        <h3 className='relative bottom-[0.73rem] text-gray-500 text-md'>All about Movies</h3>
                    </div>
                    </div>

                    <div><button className='py-1 px-4 bg-white border border-slate-400 rounded-xl'>Follow</button></div>
                    </div>


                    <div className='flex justify-between'>
                    <div className='flex space-x-3'>
                   <div className='relative top-2'> <MessageOutlined className='p-[0.70rem] bg-midblue rounded-full' style={{color:'white'}}/></div>
                    <div className='relative left-1'>
                        <h1 className='relative font-semibold text-lg'>Wight Training</h1>
                        <h3 className='relative bottom-[0.73rem] text-gray-500 text-md'>Fitness</h3>
                    </div>
                    </div>

                    <div><button className='py-1 px-4 bg-white border border-slate-400 rounded-xl'>Follow</button></div>
                    </div>



                    <div className='flex justify-between'>
                    <div className='flex space-x-3'>
                   <div className='relative top-2'> <MessageOutlined className='p-[0.70rem] bg-midblue rounded-full' style={{color:'white'}}/></div>
                    <div className='relative left-1'>
                        <h1 className='relative font-semibold text-lg'>Watches</h1>
                        <h3 className='relative bottom-[0.73rem] text-gray-500 text-md'>Fashion</h3>
                    </div>
                    </div>

                    <div><button className='py-1 px-4 bg-white border border-slate-400 rounded-xl'>Follow</button></div>
                    </div>

                    <div className='flex justify-between'>
                    <div className='flex space-x-3'>
                   <div className='relative top-2'> <MessageOutlined className='p-[0.70rem] bg-midblue rounded-full' style={{color:'white'}}/></div>
                    <div className='relative left-1'>
                        <h1 className='relative font-semibold text-lg'>Lionel Messi</h1>
                        <h3 className='relative bottom-[0.73rem] text-gray-500 text-md'>Football Player</h3>
                    </div>
                    </div>

                    <div><button className='py-1 px-4 bg-white border border-slate-400 rounded-xl'>Follow</button></div>
                    </div>

                    <div className='flex justify-between'>
                    <div className='flex space-x-3'>
                   <div className='relative top-2'> <MessageOutlined className='p-[0.70rem] bg-midblue rounded-full' style={{color:'white'}}/></div>
                    <div className='relative left-1'>
                        <h1 className='relative font-semibold text-lg'>Meek Mill</h1>
                        <h3 className='relative bottom-[0.73rem] text-gray-500 text-md'>Rapper</h3>
                    </div>
                    </div>

                    <div><button className='py-1 px-4 bg-white border border-slate-400 rounded-xl'>Follow</button></div>
                    </div>

                    <div className='flex justify-between'>
                    <div className='flex space-x-3'>
                   <div className='relative top-2'> <MessageOutlined className='p-[0.70rem] bg-midblue rounded-full' style={{color:'white'}}/></div>
                    <div className='relative left-1'>
                        <h1 className='relative font-semibold text-lg'>Dior</h1>
                        <h3 className='relative bottom-[0.73rem] text-gray-500 text-md'>Designer fasshion brand</h3>
                    </div>
                    </div>

                    <div><button className='py-1 px-4 bg-white border border-slate-400 rounded-xl'>Follow</button></div>
                    </div>


                    <div className='flex justify-between'>
                    <div className='flex space-x-3'>
                   <div className='relative top-2'> <MessageOutlined className='p-[0.70rem] bg-midblue rounded-full' style={{color:'white'}}/></div>
                    <div className='relative left-1'>
                        <h1 className='relative font-semibold text-lg'>Barcelona</h1>
                        <h3 className='relative bottom-[0.73rem] text-gray-500 text-md'>Football Team</h3>
                    </div>
                    </div>

                    <div><button className='py-1 px-4 bg-white border border-slate-400 rounded-xl'>Follow</button></div>
                    </div>
                </div>
    </div>
  )
}

export default Topics