//React
import React, { useEffect, useState } from "react";
import { Button, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

//API
import { getMovieDiscover } from "../api/endpoints.js";

//Styled Components
import {
  Headline,
  MainContainer,
  CenterContainer,
  Paragraph,
} from "../redux-store/StyledComponents.js";

import RoundedButtonComponent from "../components/RoundedButtonComponent.js";

export default RandomScreen = ({ navigation }) => {
  //useStates
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState([]);

  const onRandomClick = () => {
    //TODO get List of random movies
    fetchMovies();
  };

  //get movie object from getMovieDetails() and set movie state.
  const fetchMovies = async () => {
    try {
      let movieArray = await getMovieDiscover();
      navigation.navigate("MovieDetailsListScreen", {
        movies: movieArray,
      });
    } catch (e) {
      setError("No internet");
      setLoading(false);
    }
  };

  return (
    <MainContainer>
      <Headline small>Lass dich überraschen!</Headline>
      <CenterContainer>
        <RoundedButtonComponent
          clickHandler={onRandomClick}
          iconName={"shuffle"}
          size={320}
          iconSize={160}
        />
      </CenterContainer>
    </MainContainer>
  );
};
