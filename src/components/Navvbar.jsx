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
import { mobile } from "../responsive";

const Container= styled.div`
   height: 50px;
   border-bottom: 0.5px solid gray;
   
   background-color: #111;
   ${mobile({ width: "100%"})}

  `;

const Wrapper= styled.div`
padding: 10px 20px;
display: flex;
justify-content: center;
${mobile({justifyContent: "center"})}
${mobile({width: "100%"})}

`;


const Left= styled.div`
  flex: 1;
  
  ${mobile({flex: "1", marginRight:"5px"})}
  ${mobile({width: "100px"})}
  
  
`;

const SearchContainer = styled.div`
  border: 1px solid gray;
  
  align-items: center;

  justify-content: center;
  background-color: red;
  width: 40%;
  padding: 3px;
  ${mobile({width: "100%"})}
  ${mobile({height: "30px"})}
  ${mobile({paddingRight: "10px"})}
  

 `;


const Input= styled.input`
  border: none;
  outline: none;
  padding: 3px;
  margin-right: 25px;
  background-color: transparent;
  ${mobile({marginRight: "25px"})}
  ${mobile({justifyContent: "center"})}
  

`;

const Right= styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex: "1"})}
  ${mobile({marginLeft: "5px"})}
  
  

`;

const Items= styled.div`
   margin-right: 20px;
   cursor: pointer;
   color: gray;
   ${mobile({marginRight: "5px"})}
`;

const Avater = styled.img`
   hight: 30px;
   width: 30px;
   border-radius: 50%;
   ${mobile({display: "none"})}

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
                  <SearchOutlined style={{display: "none"}} />
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
                    <Badge badgeContent={2} color="error" style={{display: "none"}}>
                     <NotificationsOutlined style={{display: "none"}}/>
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
