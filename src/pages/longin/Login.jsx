import React, { useContext, useState } from 'react';
import "./login.scss";
import Navvbar from '../../components/Navvbar';
import Sidebar from '../../components/Sidebar';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../components/loader/Loader';
import movieImg from '../../assets/moviesb.jpg'

const Login = () => {

  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

 const navigate = useNavigate()
const {dispatch} = useContext(AuthContext)
  
const handleLogin = (e) => {
      e.preventDefault()
      setIsLoading(true);

      signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
  const user = userCredential.user;
  
       dispatch({type:"LOGIN", payload:user})
       navigate("/")
       toast.success("Login Successful.")
       setIsLoading(false)
      
    console.log(user)
    
  })
  .catch((error) => {
    toast.error(error.message)
   setError(true)
    setIsLoading(false)
  });

  }
  return (
    <>
    {isLoading && <Loader/>}
    <ToastContainer/>
    <div className="login">
        <Sidebar/>
<div className='loginContainer'>
    <Navvbar/>
    <div className="loginform">
        <h1 >Login To Search Movies</h1>
    <form onSubmit={handleLogin}>
        <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder='PassWord' onChange={(e)=>setPassword(e.target.value)} />
        <button type='submit'>LOGIN</button>
        {error && <span>Wrong email or password</span> }
        
      </form>
    </div>
      
    </div>
    </div>
    </>
  );
}

export default Login;
