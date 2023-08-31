import { useLocation, useParams } from 'react-router-dom'
import Content from './Content'
import SideNav from './SideNav'
import TrendingPage from './TrendingPage'
import Profile from '../NavMenus/Profile'
import Topics from '../NavMenus/Topics'
import Bookmarks from '../NavMenus/Bookmarks'
import Lists from '../NavMenus/Lists'
import Notifications from '../NavMenus/Notifications'
import Messages from '../NavMenus/Messages'
import Communities from '../NavMenus/Communities'
import Search from '../NavMenus/Search'
import WhoToFollow from './WhoToFollow'
import TweetDetails from '../Tweets/TweetDetails'
import UserProfile from '../NavMenus/UserProfile'

const Dashboard = () => {
  const {id} = useParams()
 const location = useLocation()
  return (
   <>
   <div className='bg-white flex  max-w-full mx-auto '>
        <div className='hidden sm:inline w-[10rem] xl:w-[25%] '>
        <SideNav />
        </div>

        <div className='relative w-full   md:w-full med:w-[45%]'>
          {location.pathname ==='/dashboard' &&  <Content />}
          {location.pathname ==='/profile' &&  <Profile />}
          {location.pathname ==='/topics' &&  <Topics />}
          {location.pathname ==='/bookmarks' &&  <Bookmarks />}
          {location.pathname ==='/lists' &&  <Lists />}
          {location.pathname ==='/notifications' &&  <Notifications />}
          {location.pathname ==='/messages' &&  <Messages />}
          {location.pathname ==='/communities' &&  <Communities />}
          {location.pathname ==='/search' &&  <Search />}
          {location.pathname ===`/tweet/${id}` &&  <TweetDetails id={id}/>}
          {location.pathname ===`/userprofile/${id}` &&  <UserProfile id={id}/>}
        </div>
        <div className='hidden med:inline w-0 med:w-[30%] '>
        {location.pathname !=='/search' &&   <TrendingPage />}
        {location.pathname ==='/search' &&  <WhoToFollow />}
        </div>

    </div>
   </>
  )
}

export default Dashboard