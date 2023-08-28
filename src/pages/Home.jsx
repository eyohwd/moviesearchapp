import { useEffect, useState } from "react";
//import Leftbar from '../components/Leftbar';
//import Navbar from '../components/Navbar';
//import UserList from '../components/UserList';
import { mobile } from "../responsive";


import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import Navvbar from "../components/Navvbar";
import MovieGrid from "../components/MovieGrid";
import FavouriteMovieGrid from "../components/FavouriteMovieGrid";

const HomePage = styled.div`
  display: flex;
  width: 100%;
  ${mobile({width:"100%",})}
  ${mobile({ alignItems:"center"})}
  ${mobile({ justifyContent:"center"})}

  

`;
const HomeContainer = styled.div`
  flex: 6;

  
  ${mobile({flex:"1",})}
 
 
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  ${mobile({flexDirection: "column", with: "100%"})}
  ${mobile({ padding: "0px"})}

`;

const ContainerMovie = styled.div`
  width: 100%;
   display: flex;
   flex-wrap: wrap;
   padding: 20px
   gap: 20px;
   ${mobile({flexDirection: "column",})}
   ${mobile({gap: "5px",})}
   
   
`;

const Home = () => {
  const [movie, setMovie] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favourites, setFavourites] = useState([]);

  const getMovies = async (searchValue) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?s=${searchValue}&apikey=${process.env.REACT_APP_MOVIE}`
      );
      const json = await response.json();
      if (json.Search) {
        setMovie(json.Search);
      }

      console.log(movie);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );
    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  };

  const addFavoriteMovie = (item) => {
    const newFavouriteList = [...favourites, item];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const removeFavouriteMovie = (item) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== item.imdbID
    );
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  return (
    <HomePage>
      {/*<Navbar/>
        <Stack direction="row" display="flex" justifyContent="space-between" spacing={2}>
        <Leftbar/>
        <UserList/>
  </Stack> */}

      <Sidebar />
      <HomeContainer>
        <Navvbar setSearchValue={setSearchValue} />
        <Container>
          {movie?.map((item) => (
            <MovieGrid
              item={item}
              key={item?.imdbID}
              handleFavouriteClick={addFavoriteMovie}
              movie={movie}
            />
          ))}
        </Container>
        <h1 style={{ marginLeft: "10px", color: "white" }}>My movies</h1>
        <ContainerMovie>
          {favourites?.map((item) => (
            <FavouriteMovieGrid
              item={item}
              key={item?.imdbID}
              handleFavouriteClick={removeFavouriteMovie}
              movie={movie}
            />
          ))}
        </ContainerMovie>
      </HomeContainer>
    </HomePage>
  );
};

export default Home;
