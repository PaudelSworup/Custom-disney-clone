import React, { useEffect, useState } from 'react';
import "./home.css";
import ImgSlider from './ImgSlider';
import Movies from './Movies';
import Viewers from './Viewers';
import {db} from '../firebase';
import {collection, doc, getDocs} from "firebase/firestore"
import { useDispatch } from 'react-redux';
import { setMovies } from '../features/movie/movieSlice';

const Home = () => {
  const[film,setFilm] = useState([]);
  const dispatch = useDispatch();

  const moviescollectionRef = collection(db, "movies");
 useEffect(()=>{
   const getMovies = async () =>{
     const data = await getDocs(moviescollectionRef);
    setFilm(data.docs.map((curElem)=>{
      return {...curElem.data(), id:curElem.id}
    }))
   };
   getMovies();
    
 },[]);
 dispatch(setMovies(film))
 
//  console.log(movies);
 
  return (
      <>
      <div className='HomeContainer'>
        <ImgSlider />
        <Viewers/>
        <Movies />
      </div>
      
      </>
  );
};

export default Home;
