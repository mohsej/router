import Filter from "./Filter"
import { useState,useEffect } from "react"
const MovieCard = ({movies,search,rating}) => {
const [filtermovies , setfilterMovies] = useState (movies);
 useEffect(() => {
     if (search.langth !== 0 ||rating !== 0){
           setfilterMovies(
         filtermovies.filter(Filter => {
         return (Filter.title.toLowerCase().includes(search.toLowerCase())
         || Filter.rate >= rating );
     })
     );
     }
     else{
         setfilterMovies(movies)
     }
   
 },[search]);
    
    

    return (
        <div>
            <Filter movies={movies}/>
        </div>
    )
}

export default MovieCard
