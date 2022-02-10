import React, { useEffect, useState }  from 'react';
import "./details.css";
import {db} from '../firebase';
import {  getDoc, doc} from "firebase/firestore"
import { useParams } from 'react-router-dom';
// import Movies from './Movies';


 const Details = () => {
     const{id} = useParams();
     console.log(id);
   const[movie,setMovie] = useState();

    useEffect(()=>{
        const getData = async () =>{
            const querySnapshot = await getDoc(doc(db, "movies", id));
            // querySnapshot.forEach((doc)=>{
            //     console.log(doc.id, " => ", doc.data());
            //     setMovie(doc.data());  
            // })  
            setMovie(querySnapshot.data())  
           
        }
        getData();
        
    },[])
    console.log("movie is", movie);


    const playVideo = (videoID , videoSrc) =>{
        console.log(videoID);
        console.log(videoSrc);
        const video1 = document.getElementById(videoID);
        const times = document.getElementById('fa-times');

        if(video1.style.display = 'none'  ){
            video1.style.display = 'block';   
            times.style.display = 'flex';
            times.style.marginBottom = '450px';
        }else{
            video1.style.display = 'none';
            
        }

        if(times.style.display = 'none'){
            times.style.display = 'flex';
            times.style.marginBottom = '450px';
        }else{
            times.style.display = 'none';
        }

        const video = document.getElementsByTagName('iframe')[0];
        video.setAttribute('src',videoSrc);
        console.log(videoSrc);
        video.setAttribute("controls","controls");
        video.load();
         video.play();    
    }

        const closeVideo = () =>{
		let times = document.getElementById('fa-times');
		let video1 = document.getElementById('video1');
		let video = document.getElementsByTagName('iframe')[0];
		
		if(times.style.display = 'flex'){
			times.style.display = 'none';
			video1.style.display ='none';
            video.setAttribute('src',"");
			video.pause();
		}
	}

     

    return (
       
       <>    
        
        <div className='DContainer'>
        <div className='Background'>
        <img src={movie?.backgroundImg} alt="" />
        </div>
        <div className='ImageTitle'>
            <img src={movie?.titleImg} alt="" />
        </div>

        <div className='Controls'>
            <button className='playbutton'>
                <img src="/images/play-icon-black.png" alt="" />
                <span>PLAY</span>
                </button>

            <button className='trailerbutton' onClick={()=>playVideo('video1',movie?.trailer)}>
            <img src="/images/play-icon-white.png" alt="" />
            <span>TRAILER</span>
            
            </button>

            <button className='addbutton'>
                <span>+</span>
            </button>

            <button className='groupwatchbutton'>
                <img src="/images/group-icon.png" alt="" />
            </button>
        </div>

        <div className='subtitle'>
            {movie?.subTitle}
            {/* 2022 . family . fantasy, kids , animation */}
        </div>

        <div className='description'>
            {movie?.description}
            {/* hey this is sworup paudel who is more intrested in web development and
            mobile app development so kindly you can message to me to develop your site 
            and mobile application. */}
        </div>

        <div className='videoContainer'>
        <iframe id='video1' width="700" height="350" src="">
        </iframe>
            <div className="close"> <h2 id="fa-times" onClick={()=>closeVideo()}>X</h2></div>
            </div>        

    </div>
      
       </>
    )
}

export default Details;
