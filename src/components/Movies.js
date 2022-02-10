import React from 'react';
import "./movies.css";
// import mapi from './Moviesapi';
import { Link } from 'react-router-dom';
import { selectMovies } from '../features/movie/movieSlice';
import { useSelector } from 'react-redux';

const Movies = () => {

    const movies = useSelector(selectMovies);
    console.log(movies);
  return (
      <>
         <div className='Mcontainer'>
            <h4>Recommended for you</h4>
            <div className='content'>
            {movies && movies.map((curElem,index)=>{
                const{cardImg,id} = curElem; 
                return(
                    <>
                      <Link to={`/detail/${id}`}>
                      <div className='MWrap' key={index}>
                      <img src={cardImg} alt="" />
                        </div>
                      </Link>
                      
                     
                    
                    </>
                )
            })}
            </div>
        </div>
      </>
  );
};

export default Movies;

