import React, { useState } from 'react';
import { Drawer,Collapse } from 'antd';
import { BarChartOutlined, CloseOutlined, ContainerOutlined, DashboardOutlined, DollarOutlined, HeartOutlined, MessageOutlined, PlusOutlined, QuestionCircleOutlined, RiseOutlined, RocketOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import BookmarkBorderOutlined from '@mui/icons-material/BookmarkBorderOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
import InstallDesktopOutlinedIcon from '@mui/icons-material/InstallDesktopOutlined';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import AccessibilityNewRoundedIcon from '@mui/icons-material/AccessibilityNewRounded';
import { useAuthContext } from '../../Hooks/useAuthContext';
import useLogout from '../../Hooks/useLogout'

const { Panel } = Collapse;


const SideNavDrawer = () => {
  const PF = "http://localhost:5000/images/"
  const {logout} = useLogout()
  const {user} = useAuthContext()
    const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const handler = () =>{
    logout()
  }
  
  return (
    <div className=''>
          {user.userImage ?
   <div className='relative bottom-3'><img src={PF+user.userImage} alt='user' className='p-3  object-cover rounded-full w-[5rem] h-[5rem] text-xl cursor-pointer ' onClick={showDrawer} /></div>
              :
    <div className='relative bottom-3'><img src='default.jpg' alt='user' className='p-3  object-cover rounded-full w-[5rem] h-[5rem] text-xl cursor-pointer ' onClick={showDrawer} /></div>

        }

      <Drawer 
      title={<div className='fixed '><span className='relative bottom-2 -left-6 font-bold text-lg '>Account Info</span></div>}
       placement="left"
        onClose={onClose} 
        open={open}
        getContainer={false}
       visible={open}
       width='300'
       closeIcon={<div className='relative -right-[15rem] font-bold text-md'><CloseOutlined style={{color:'black', fontWeight:'bolder'}} /></div>}
        >
       <div className='relative bottom-4'>
   <div className='flex justify-between'>
   <div>
  <div className='relative -left-5 bottom-4'> 
  {user.userImage ? 
  <img src={PF+user.userImage} alt='user' className='p-3 rounded-full w-[5.5rem] h-[5.5rem]  object-cover' />:
  <img src='default.jpg' alt='user' className='p-3 rounded-full w-[5.5rem] h-[5.5rem]  object-cover' />
}
  </div>
        <span className='relative bottom-6'>
        {user &&
       <div className='flex'>
         <div className='text-[1rem] font-semibold'>{user.name}</div> 
       {user.status &&  <img src='bluecheck.png' alt='checklogo' className='relative left-1 top-[0.24rem] h-[1.2rem] w-[1.2rem]'/>}
       </div>
        }
        {user && <div className='text-[1rem] relative bottom-2'>@{user.name}</div>}
        </span>
   </div>
   <span className=' bg-white shadow-2xl rounded-full border-1 border-slate-300 h-8 p-1 relative top-2 cursor-pointer'><PlusOutlined className='relative bottom-1 text-xl' /></span>
    </div>



      <div className='relative flex justify-between'>
  <div>{user &&<span className='font-bold'>{user.following.length}</span>} <span>Following</span></div>
   <div>{user &&<span className='font-bold'>{user.followers.length}</span>} <span>Followers</span></div>
      </div>

      <div className='relative top-8  grid gap-4'>
      <Link to='/profile' className='text-slate-900 hover:text-slate-900 hover:font-semibold'> <UserOutlined className='relative bottom-2 text-xl' /> <span className='text-[1.3rem] relative left-3 font-semibold'>Profile</span> </Link> 
      <Link to='/topics' className='text-slate-900 hover:text-slate-900 hover:font-semibold'> <MessageOutlined className='relative bottom-1 text-xl' /> <span className='text-[1.3rem] relative left-3 semibold-bold'>Topics</span> </Link> 
      <Link to='/bookmarks' className='text-slate-900 hover:text-slate-900 hover:font-semibold'> <BookmarkBorderOutlined className='relative bottom-1 text-xl' /> <span className='text-[1.3rem] relative left-3 font-semibold'>Bookmarks</span> </Link> 
      <Link to='/lists' className='text-slate-900 hover:text-slate-900 hover:font-semibold'> <ContainerOutlined className='relative bottom-1 text-xl' /> <span className='text-[1.3rem] relative left-3 font-semibold'>Lists</span> </Link> 
      <Link to='/tweeter_circle' className='text-slate-900 hover:text-slate-900 hover:font-semibold'> <HeartOutlined className='relative bottom-1 text-xl' /> <span className='text-[1.3rem] relative left-3 font-semibold'>Twitter Circle</span> </Link> 
      </div>
      
      <div className='relative top-12  mb-10'>
      <Collapse defaultActiveKey={['']} ghost>
    <Panel header={<div className='font-semibold relative top-1 text-[1rem]'>Creator Studio</div>}
     key="1">
    
    <div className='grid gap-3'>
      <Link to='' className='text-slate-600 text-md font-semibold'> <RiseOutlined /> <span className='relative left-2'>Moments</span></Link>
      <Link to='' className='text-slate-600 text-md font-semibold'> <NewspaperOutlinedIcon style={{fontSize:'19px'}} /> <span className='relative left-2'>Newsletters</span></Link>
      <Link to='' className='text-slate-600 text-md font-semibold'> <BarChartOutlined /> <span className='relative left-2'>Analytics</span></Link>

    </div>
    </Panel>

    <Panel header={<div className='font-semibold relative top-1 text-[1rem]'>Twitter For Professionals</div>}
     key="2">
    
    <div className='grid gap-3'>
      <Link to='' className='text-slate-600 text-md font-semibold'> <RocketOutlined /> <span className='relative left-2'>Twitter for Professionals</span></Link>
      <Link to='' className='text-slate-600 text-md font-semibold'> <LaunchOutlinedIcon style={{fontSize:'15px'}}/> <span className='relative left-2'>Twitter Ads</span></Link>
      <Link to='' className='text-slate-600 text-md font-semibold'> <DollarOutlined /> <span className='relative left-2'>Monitization</span></Link>

    </div>
    </Panel>
   
    <Panel header={<div className='font-semibold relative top-1 text-[1rem]'>Settings  And Support</div>}
     key="3">
    
    <div className='grid gap-3'>
      <Link to='' className='text-slate-600 text-md font-semibold'> <SettingOutlined /> <span className='relative left-2'>Settings and Privacy</span></Link>
      <Link to='' className='text-slate-600 text-md font-semibold'> <QuestionCircleOutlined /> <span className='relative left-2'>Help Center</span></Link>
      <Link to='' className='text-slate-600 text-md font-semibold'> <DashboardOutlined /> <span className='relative left-2'>Data Saver</span></Link>
      <Link to='' className='text-slate-600 text-md font-semibold'> <InstallDesktopOutlinedIcon style={{fontSize:'15px'}} /> <span className='relative left-2'>Display</span></Link>
      <Link to='' className='text-slate-600 text-md font-semibold'> <AccessibilityNewRoundedIcon style={{fontSize:'15px'}} /> <span className='relative left-2'>Keyboard shotcuts</span></Link>
      <Link to='' className='text-slate-600 text-md font-semibold'> <ExitToAppRoundedIcon style={{fontSize:'15px'}} /> <span className='relative left-2 cursor-pointer' onClick={handler}>Logout</span></Link>

    </div>
    </Panel>
   
   
  </Collapse>
      </div>

       </div>
      </Drawer>
    </div>
  )
}

export default SideNavDrawer