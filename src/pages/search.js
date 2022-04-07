import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const searchIcon = <FontAwesomeIcon icon={faSearch} />
 
export const SearchPage = () => {
  const [searchText, setSearchText] = useState("");  
  let navigate = useNavigate();

  const handleChange = (event) => {
    //let evento = event.target.value;
    //console.log(evento);
    setSearchText(event.target.value);
};

const onSubmit = (event) =>{
  event.preventDefault();
  navigate(`/searchDetail?q=${searchText}`);
  //const filterMovies = moviesList.filter(movie => 
  //  movie.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
  //  setMovies(filterMovies);
};


  
    return (
      <>
          <form className='search-container'>
            <li className="">
              <input onChange={handleChange} type="text" placeholder="Search.." name="q"/>
            </li>
            <li className="">
              <button onClick={onSubmit} value="boton">{searchIcon}</button>
           
            </li>
          </form>
      </>
    )
  };