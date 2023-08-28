import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from "../responsive";


const Container = styled.div`
  flex: 1;
  border-right: 0.5px solid gray;
  min-height: 100vh;
  ${mobile({display: "none"})}
`;
const Top = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.span`
  font-size: 25px;
  font-weight: bold;
`;
const Bold = styled.b`
  color: red;
  font-size: 20px;
`;
const LogoBotton = styled.hr`
  heigh: 0px;
  border: 0.1px solid gray;
`;

const Center = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 margin-top: 20px;
`;
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
`;
const Items = styled.li`
margin-bottom: 10px;
font-size: 20px; 
font-weight: 300;
width: 100%;
cursor: pointer;
color: gray;
&:hover{
  background-color: lightgray;
}


`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 30px 10px 10px;

`;
const ColorOPtions = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border: 1px solid black;
   background-color: darkgray;
   margin: 5px;
`;



const Sidebar = () => {
  return (
    <Container>
    <Top>
      <Link to="/" style={{textDecoration:"none", color:"white",}}>
      <Logo><Bold>Search</Bold>Movies</Logo>
      </Link>
   
    </Top>
    <LogoBotton></LogoBotton>
    <Center>
        <List >
          <Link to='/' style={{textDecoration: "none",}}>
          <Items>
               Action 
            </Items>
          </Link>
            

            <Items>
                Romance
            </Items>
            <Items>
               Thriller 
            </Items>

            <Items>
               Epic 
            </Items>
        </List>
    </Center>
    <Bottom>
    <ColorOPtions></ColorOPtions>
      <ColorOPtions></ColorOPtions>
    </Bottom>
      
    </Container>
  );
}

export default Sidebar;
