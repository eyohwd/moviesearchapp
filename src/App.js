import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/longin/Login';
import { useContext } from 'react';
import { AuthContext } from './context/authContext';
import Register from './pages/register/Register';

function App() {
  const {currentUser} = useContext(AuthContext)

   const RequireAuth = ({children}) => {
    return currentUser ? children : <Navigate to="/login" />
   };
  // console.log(currentUser)
  return (
    <div className='app'>
      <BrowserRouter>
      <Routes>
      <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<RequireAuth><Home/></RequireAuth>}/>
        <Route path="/register" element={<Register/>}/>
        
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
