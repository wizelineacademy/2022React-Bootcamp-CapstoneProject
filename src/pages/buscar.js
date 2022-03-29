import React, {useState} from "react";

 
export const BuscarTest = () => {

const moviesList = ["The Batman", "Matrix", "Spiderman", "Superman", "Iron Man"];
const [movies, setMovies] = useState(moviesList);    
const [searchText, setSearchText] = useState("");  

const handleChange = (event) => {
    setSearchText(event.target.value);
};

const onSubmit = (event) =>{
  event.preventDefault();
  const filterMovies = moviesList.filter(movie => 
    movie.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
    setMovies(filterMovies);
}
    return (
      <>
        <h1> Buscar Test</h1>
        <form>
          <input onChange={handleChange} type="text" placeholder="Buscar"/>
          <button onClick={onSubmit}>Filtrar</button>
          <ul>
              {
                  movies.map((movie) => (
                    <li key={movie}>{movie}</li>  
                  ))
              }
          </ul>
        </form>
      </>
    )
  };