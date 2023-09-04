import React from "react";
import { parseMovie } from "../api/parser";
import Movie from "../models/Movie";

test("parses movie object from json correctly", () => {
    // make reference movie object with: title, id, overview
    referenceMovie = new Movie();
    referenceMovie.title = "The Godfather";
    referenceMovie.id = 238;
    referenceMovie.description = "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.";

    // let parser make new movie object from json
    myJson = {"adult": false, "backdrop_path": "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg", "belongs_to_collection": {"backdrop_path": "/3WZTxpgscsmoUk81TuECXdFOD0R.jpg", "id": 230, "name": "The Godfather Collection", "poster_path": "/zqV8MGXfpLZiFVObLxpAI7wWonJ.jpg"}, "budget": 6000000, "genres": [{"id": 18, "name": "Drama"}, {"id": 80, "name": "Crime"}], "homepage": "http://www.thegodfather.com/", "id": 238, "imdb_id": "tt0068646", "original_language": "en", "original_title": "The Godfather", "overview": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.", "popularity": 121.292, "poster_path": "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg", "production_companies": [{"id": 4, "logo_path": "/gz66EfNoYPqHTYI4q9UEN4CbHRc.png", "name": "Paramount", "origin_country": "US"}, {"id": 10211, "logo_path": null, "name": "Alfran Productions", "origin_country": "US"}], "production_countries": [{"iso_3166_1": "US", "name": "United States of America"}], "release_date": "1972-03-14", "revenue": 245066411, "runtime": 175, "spoken_languages": [{"english_name": "English", "iso_639_1": "en", "name": "English"}, {"english_name": "Italian", "iso_639_1": "it", "name": "Italiano"}, {"english_name": "Latin", "iso_639_1": "la", "name": "Latin"}], "status": "Released", "tagline": "An offer you can't refuse.", "title": "The Godfather", "video": false, "vote_average": 8.709, "vote_count": 18492}
    const parsedMovie = parseMovie(myJson);

    //compare the objects
    expect(parsedMovie).toEqual(referenceMovie)
});