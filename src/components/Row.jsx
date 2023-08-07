import React, { useEffect, useState } from "react";
import axios from "../services/axios";

import "./Row.css";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      console.log("fetching>>", fetchUrl);
      const response = await axios.get(fetchUrl);
      setMovies(response.data.results);
      console.log("fetchData>>response>>", fetchUrl, response);
      return response;
    }

    fetchData();
  }, [fetchUrl]);

  console.log("moview>>", movies);

  return (
    <div className={"row"}>
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) || movie.backdrop_path) && (
              <img
                key={<movie className="id"></movie>}
                className={`row__poster ${isLargeRow && "row__poster--large"}`}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            ),
        )}
      </div>
    </div>
  );
}

export default Row;
