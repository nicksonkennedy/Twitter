import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BellFilled, BellOutlined, BorderlessTableOutlined, ContainerOutlined, EllipsisOutlined, HeartOutlined, HomeFilled, HomeOutlined, MailFilled, MailOutlined, MessageOutlined, PlusOutlined, SearchOutlined, UsergroupAddOutlined, UserOutlined} from '@ant-design/icons';
import PersonIcon from '@mui/icons-material/Person';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { Divider, Dropdown, Space ,Collapse} from 'antd';
import { useAuthContext } from '../../Hooks/useAuthContext';
import useLogout from '../../Hooks/useLogout';

const { Panel } = Collapse;

const SideNav = () => {
  const {user} = useAuthContext()
  const PF = "http://localhost:5000/images/"
const {logout} = useLogout()
  
//useLocation
const location = useLocation()

 const handler = () =>{
  logout()
 }
  return (
    <div className='bg-white w-full max-h-screen p-10 -top-8 fixed '>
     <div className='h-full'>
     <div className='relative  left-4'><img src='twit.png' alt='logo' className='h-[2.5rem] w-[2.5rem]  object-cover' /></div>

<div className='relative -top-5 p-3  grid gap-[0.05rem]  '>
<div className='text-[1.4rem] p-2'>
   <Link to='/dashboard' className={location.pathname === '/dashboard' ? 'text-slate-900 font-bold hover:text-slate-900': 'text-slate-900 hover:text-slate-900 hover:font-semibold'}> {location.pathname ==='/dashboard' ? <HomeFilled className='relative bottom-1' />: <HomeOutlined className='relative bottom-1' />} <span className='text-[1.2rem] relative left-4 hidden xl:inline'>Home</span> </Link> 
</div>

<div className='text-[1.4rem] p-2  hidden med:inline'> <Link to='/search' className={location.pathname === '/search' ? 'text-slate-900 font-bold hover:text-slate-900': 'text-slate-900 hover:text-slate-900 hover:font-semibold'}> <BorderlessTableOutlined className='relative bottom-1' /> <span className='text-[1.2rem] relative left-4 hidden xl:inline'>Explore</span> </Link> </div>
<div className='text-[1.4rem] p-2  inline med:hidden'> <Link to='/search' className={location.pathname === '/search' ? 'text-slate-900 font-bold hover:text-slate-900': 'text-slate-900 hover:text-slate-900 hover:font-semibold'}> <SearchOutlined className='relative bottom-1' /> <span className='text-[1.2rem] relative left-4 hidden xl:inline'></span> </Link> </div>
<div className='text-[1.4rem] p-2 '> <Link to='/communities' className={location.pathname === '/communities' ? 'text-slate-900 font-bold hover:text-slate-900': 'text-slate-900 hover:text-slate-900 hover:font-semibold'}> {location.pathname==='/communities' ? <GroupAddIcon className='relative ' />:<UsergroupAddOutlined className='relative bottom-1' />} <span className='text-[1.2rem] relative left-4 hidden xl:inline'>Communities</span> </Link> </div>
<div className='text-[1.4rem] p-2 '> <Link to='/notifications' className={location.pathname === '/notifications' ? 'text-slate-900 font-bold hover:text-slate-900': 'text-slate-900 hover:text-slate-900 hover:font-semibold'}> {location.pathname ==='/notifications' ? <BellFilled className='relative bottom-1' />: <BellOutlined className='relative bottom-1' />} <span className='text-[1.2rem] relative left-4 hidden xl:inline'>Notifications</span> </Link> </div>
<div className='text-[1.4rem] p-2 '> <Link to='/messages' className={location.pathname === '/messages' ? 'text-slate-900 font-bold hover:text-slate-900': 'text-slate-900 hover:text-slate-900 hover:font-semibold'}> {location.pathname==='/messages' ? <MailFilled className='relative bottom-1' />:<MailOutlined className='relative bottom-1' />} <span className='text-[1.2rem] relative left-4 hidden xl:inline'>Messages</span> </Link> </div>
<div className='text-[1.4rem] p-2 '> <Link to='/bookmarks' className={location.pathname === '/bookmarks' ? 'text-slate-900 font-bold hover:text-slate-900': 'text-slate-900 hover:text-slate-900 hover:font-semibold'}> {location.pathname==='/bookmarks' ? <BookmarkIcon className='relative -left-2' style={{fontSize:'35px'}} />:<BookmarkBorderOutlinedIcon className='relative -left-2' style={{fontSize:'35px'}} />} <span className='text-[1.2rem] relative left-1 hidden xl:inline'>Bookmarks</span> </Link> </div>
<div className='text-[1.4rem] p-2 '> <Link to='/profile' className={location.pathname === '/profile' ? 'text-slate-900 font-bold hover:text-slate-900': 'text-slate-900 hover:text-slate-900 hover:font-semibold'}> {location.pathname ==='/profile' ? <PersonIcon className='relative' />:<UserOutlined className='relative bottom-1' />} <span className='text-[1.2rem] relative left-4 hidden xl:inline'>Profile</span> </Link> </div>
<Dropdown
overlay={<div className='bg-slate-50 shadow-2xl p-3 w-[21rem]'>
<div className='grid gap-3'>
<Link to='/topics' className='p-2 text-xl text-slate-900 font-bold cursor-pointer'><MessageOutlined className='relative bottom-1 ' />  <span className='relative sm:left-2 xl:left-6'>Topics</span></Link>
<Link to='/lists' className='p-2 text-xl text-slate-900 font-bold cursor-pointer'><ContainerOutlined className='relative bottom-1' />  <span className='relative sm:left-2 xl:left-6'>Lists</span></Link>
<div className='p-2 text-xl font-bold cursor-pointer'><HeartOutlined className='relative bottom-1' />  <span className='relative sm:left-2 xl:left-6'>Twitter Circle</span></div>
<Divider></Divider>


</div>
</div>}
trigger={['click']}
placement='topCenter'
>
<span onClick={(e) => e.preventDefault()} className='p-2  cursor-pointer '>
<Space>
<EllipsisOutlined className='text-[1rem] border-2 border-slate-800 p-1 rounded-full'/>
 <span className='text-[1.2rem] relative left-3 hidden xl:inline'>More</span>
 
</Space>
</span>
</Dropdown>

<div className='mt-1'> <button className='w-[15rem] py-2 bg-blue-500 text-white rounded-2xl text-lg font-bold hidden xl:inline'>Tweet</button></div>
<div className='mt-3 relative left-2 inline xl:hidden'> <button className='p-2 bg-blue-500 text-white rounded-full '><PlusOutlined className='text-lg relative bottom-1 font-bold' /></button></div>


<div className='mt-2 relative -left-6'>
<Dropdown
overlay={<div className='bg-white shadow-2xl p-2 w-full'>
<div className='grid gap-1 '>
<div className='text-lg font-semibold p-3 cursor-pointer '>Add An Existing Account</div>
{user &&<div className='text-lg font-semibold p-3 cursor-pointer' onClick={handler}>Logout @{user.name}</div>}
</div>
</div>}
trigger={['click']}
placement='topCenter'
>
<span onClick={(e) => e.preventDefault()} className='p-2 cursor-pointer'>
<Space>
{user.userImage ?
  <img src={PF+user.userImage} alt='user' className='p-3 rounded-full w-[5.5rem] h-[5.5rem]  object-cover' />:
  <img src='default.jpg' alt='user' className='p-3 rounded-full w-[5.5rem] h-[5.5rem]  object-cover' />
  }
 <span className='hidden xl:inline relative -left-2'>
 {user &&
 <div className='flex'>
 <div className='text-[1rem] font-semibold'>{user.name}</div> 
{user.status &&  <img src='bluecheck.png' alt='checklogo' className='relative left-1 top-[0.24rem] h-[1.2rem] w-[1.2rem]'/>}
</div>
 }
{user && <div className='text-[1rem] relative bottom-2'>@{user.name}</div>}
 </span>
 
</Space>
</span>
</Dropdown>
</div>
</div>
     </div>
    </div>
  )
}

export default SideNav