import './App.css';
import 'antd/dist/antd.css'; 
import{BrowserRouter,Routes,Route } from 'react-router-dom'
import Dashboard from './components/HomePage/Dashboard';
import FloatNav from './components/HomePage/FloatNav';
import CreateButton from './components/CreateButton';
import Signup from './components/SignupPage/Signup';
import SignupHome from './components/SignupPage/SignupHome';
import SignIn from './components/SignIn/SignIn';
import MyApp from './components/MyApp';
import NewTweet from './components/HomePage/NewTweet';
import { useAuthContext } from './Hooks/useAuthContext';
import PrivateRoute from './PrivateRoute';
import PublicRoutes from './PublicRoutes';
import UnknownRoute from './UnknownRoute';
import { QueryClient, QueryClientProvider } from 'react-query'
import ProfileSettingSm from './components/NavMenus/ProfileSettingSm';
 
 const queryClient = new QueryClient()

function App() {
const {user} = useAuthContext()
  return (
   
   <>
   <BrowserRouter>
    <QueryClientProvider client={queryClient}>
    <MyApp>
    <Routes>
        {/**Public Routes */}
        <Route element={<PublicRoutes user={user}/>} >
      <Route path='/' element={<Signup />}/> 
    <Route path='/user_signup' element={<SignupHome />}/> 
    <Route path='/user_signin' element={<SignIn />}/> 
      </Route>
   

            {/**Private Routes */}
            <Route element={<PrivateRoute user={user}/>} >
            <Route path='/dashboard' element={<Dashboard />}/> 
           <Route path='/profile' element={<Dashboard />}/> 
           <Route path='/topics' element={<Dashboard />}/> 
           <Route path='/bookmarks' element={<Dashboard />}/> 
           <Route path='/lists' element={<Dashboard />}/> 
           <Route path='/notifications' element={<Dashboard />}/> 
           <Route path='/messages' element={<Dashboard />}/> 
           <Route path='/communities' element={<Dashboard />}/> 
           <Route path='/search' element={<Dashboard />}/> 
           <Route path='/who_to_follow' element={<Dashboard />}/> 
          <Route path='/compose/tweet' element={<NewTweet />}/> 
          <Route path='/profile_settings' element={<ProfileSettingSm />}/> 
          <Route path='/tweet/:id' element={<Dashboard />}/> 
          <Route path='/userprofile/:id' element={<Dashboard />}/> 
            </Route>

             {/**Unknow route */}
             <Route path='*' element={<UnknownRoute />}/> 
    </Routes>
    </MyApp>
    <div className='block sm:hidden'><CreateButton /></div>
    <div className='block sm:hidden'><FloatNav /></div>
    </QueryClientProvider>
  </BrowserRouter>
   </>
  );
}

export default App;
