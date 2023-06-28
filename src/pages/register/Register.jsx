import React, { useState } from 'react';
import "./register.scss";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../components/loader/Loader';

   
const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false)
    const navigate=useNavigate()


    const registerUser = (e) => {
       e.preventDefault();
       setIsLoading(true)
       if(password !== cPassword) {
          toast.error("Passwords do not match")
       }
    // console.log({email, password, cPassword})
   // const postData = {
      //  email,
      //  password,
      //  cPassword,
    // };
    // console.log(postData )

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setIsLoading(false)
    toast.success("Registration sucessfully...")
    navigate("/login")

    console.log(user)
  })
  .catch((error) => {
    console.log(error)
    setIsLoading(false)
    toast.error(error.message);
    
  });

    };

    
 return (
    <>
    <ToastContainer/>
    {isLoading && <Loader/>}
    <div className='register'>
      <h1>Register to Login</h1>
      <form onSubmit={registerUser}>
        <input type="email" placeholder='email' required value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder='password' required value={password} onChange={(e)=>setPassword(e.target.value)} />
        <input type="password"  placeholder='confirm password' required value={cPassword} onChange={(e)=>setCPassword(e.target.value)} />
        <button type='submit'>SUBMIT</button>
        <p>or</p>
        <Link to='/login' style={{textDecoration: "none"}}>
        <button className='login'>LOGIN</button>
        </Link>
      </form>
    </div>
    </>
  );
}

export default Register;
