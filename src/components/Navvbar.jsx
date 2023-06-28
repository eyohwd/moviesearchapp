import { NotificationsOutlined, SearchOutlined } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import IMG1 from "../assets/images1a.jpeg"
import { Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Container= styled.div`
   height: 50px;
   border-bottom: 0.5px solid gray;
   background-color: #111;

  `;

const Wrapper= styled.div`
padding: 10px 20px;
display: flex;
`;

const Left= styled.div`
  flex: 1;
`;

const SearchContainer= styled.div`
  border: 1px solid gray;
  display: flex; 
  align-items: center;
  justify-content: space-between;
  width: 40%;
  padding: 3px;
`;

const Input= styled.input`
  border: none;
  outline: none;
  padding: 3px;
  margin-right: 25px;
  background-color: transparent;
  color: white;
`;

const Right= styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  

`;

const Items= styled.div`
   margin-right: 20px;
   cursor: pointer;
   color: gray;
`;

const Avater = styled.img`
   hight: 30px;
   width: 30px;
   border-radius: 50%;

`;




const Navvbar = ({ setSearchValue}) => {

const  signoutUser = () => {
  
signOut(auth).then(() => {
  toast.success("Logout Successful.")
  // Sign-out successful.
}).catch((error) => {
  toast.error(error.message)
  // An error happened.
});
}
  return (
    <>
    <ToastContainer/>
    <Container>
        <Wrapper>
            <Left>
                <SearchContainer>
                  <Input type='text' placeholder='search...'  onChange={(e) => setSearchValue(e.target.value)}></Input>
                  <SearchOutlined/>
                </SearchContainer>
            </Left>
            <Right>
              <Link to="/register" style={{textDecoration: "none",}}>
              <Items>Register</Items>
              </Link>
                
                <Link to="/login" style={{textDecoration:"none",}}>
                <Items>Login</Items>
                </Link>

                <Link to="/login" onClick={signoutUser} style={{textDecoration:"none",}}>
                <Items>LoginOut</Items>
                </Link>
                
                <Items>
                    <Badge badgeContent={2} color="error">
                     <NotificationsOutlined/>
                   </Badge>
                </Items>
                <Items>
                    <Avater src={IMG1} alt='avatar'/>
                </Items>
            </Right>
        </Wrapper>
    </Container>
    </>
  );
}

export default Navvbar;
