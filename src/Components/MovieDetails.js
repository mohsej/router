import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";

const MovieDetails = ({ movies }) => {
  const [ movieDetails, setMovieDetails]  = useState({});
   const { id } = useParams();
 
   useEffect(() => {
    setMovieDetails(movies.find((Filter) => Filter.id === id));
  },[id]);
  return (
    <div>
      <img src={movieDetails.image} alt={movieDetails.discription} />
      <h1>{movieDetails.title}</h1>
      <h4> {movieDetails.discription}</h4>
      <ReactPlayer url={movieDetails.trailer} />
    </div>
  );
};

export default MovieDetails;
