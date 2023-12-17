import { Outlet, useLocation, Navigate, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import { useSelector } from 'react-redux';

function Layout() {
  const user = useSelector(state => state.user);
  const location = useLocation();
  return user?.token ?
    (<Outlet />)
    :
    (<Navigate to="/login" state={{ from: location }} replace />)
}

function App() {
  const theme = useSelector(state => state.theme)
  return (
    <div data-theme={theme} className='w-full min-h-[100vh]'>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/profile/:id?' element={<Profile />} />
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/reset-password' element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
