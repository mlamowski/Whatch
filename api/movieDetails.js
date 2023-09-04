import moviedb from "./movieDbInstance";
import { parseMovie } from "./parser";

// gets the movie info from tmdb and converts it to a movie object then returns that
export const getMovieDetailsObject = async (id) => {
  try {
    //get json from tmdb
    const res = await moviedb.movieInfo(id);
    //parse json to movie object
    movieObject = parseMovie(res);
    return movieObject;
  } catch (error) {
    throw error;
  }
};
