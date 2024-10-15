import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages';
import Signin from './pages/signin';
import Division from './pages/Division';
import TechStacks from './pages/Techstacks';
import Profile from './pages/Profile/Profile.jsx';
import { ProtectedRoute } from './components/protectedRoutes';
import { useAuth } from './contexts/usercontext';
import { useEffect } from 'react';
import { Navigation } from './pages/components/navigation';
import { useTimer } from './contexts/timerContext';
import ChangePass from './pages/changePassword';


function App() {
  const {user} = useAuth();
  const {timeLeft} = useTimer();
  // const user = localStorage.getItem('user')? JSON.parse(localStorage.getItem('user')):{}
  return (
    <>
     <Navigation/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/changePassword' element={<ChangePass/>}/>
      <Route path='/techStack' element={<ProtectedRoute isSignedin={Object.keys(user).length!=0 } children={<TechStacks/>}/>}/>
      {/* <Route path='/techStack' element={<TechStacks/>}/> */}
      {/* <Route path='/divisionSelect' element={<Division/>}/> */}
      <Route path='/profile' element={<ProtectedRoute isSignedin={Object.keys(user).length!=0} children={<Profile/>}/>}/>
      <Route path='/divisionSelect' element={<ProtectedRoute isSignedin={Object.keys(user).length!=0 && timeLeft} children={<Division/>}/>}/>
    </Routes>
    </>
  );
}

export default App;
