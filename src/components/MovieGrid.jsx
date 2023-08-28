import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Checkbox } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { mobile } from "../responsive";


const FavIcon = styled.div`
   width: 100%;
   height: 50px;
   background-color: rgba(0, 0, 0, 0.519);
   display: flex;
   align-items: center;
   justify-content: space-around;
   padding: 0px; 10px;
   opacity: 0;

`;

const Container = styled.div`
  flex: 1;
  min-width: 280px;
  margin: 3px;
  height: 350px;
  transition: all 0.5s ease;
  position: relative;

  &:hover{
    transform: scale(1.1)
  };

  &:hover ${FavIcon}{
     opacity: 1;
  };
  ${mobile({height: "350px"})}
  
`;

const InfoContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 100%;
   color: gray;
   background-color: black;
   padding: 3px 5px;
   ${mobile({width:"100%"})}

  
`;

const FavouriteConatainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({width: "350px", height:"350px"})}
    
    
    

`;


 
const FavouriteTitle = styled.h4`
    color: white;
    font-weight: 300;
    ${mobile({fontWeight: "200px"})}
 `;

const Title = styled.div`

`;

const Image = styled.img`
width: 100%;
height: 80%;
${mobile({maxWidth: "350px", height:"280px"})}

`;
const Date = styled.p`
${mobile({with: "350px", height:"280px"})}
`;

const MovieGrid = ({item, movie, handleFavouriteClick}) => {
  return (
    <Container>
        <Image src={item.Poster} alt={item.Title}/>
        <InfoContainer>
            <Title>{item.Title}</Title>
            <Date>{item.Year}</Date>
        </InfoContainer>
        <FavouriteConatainer>
          <FavIcon onClick={()=>handleFavouriteClick(item)} >
            <Checkbox icon={<FavoriteBorder color="error"/>} checkedIcon={<Favorite color='error'  /> }/>
          <FavouriteTitle>Favourite</FavouriteTitle>
          </FavIcon>
          
        </FavouriteConatainer>
    </Container>
  );
}

export default MovieGrid;
