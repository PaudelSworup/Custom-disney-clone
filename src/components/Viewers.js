import React, { useState} from 'react';
import "./viewers.css";
import data from './Viewersapi';


 const Viewers = () => {
     const[Vdata, setVdata] = useState(data);
    
    return (
       <>
       <div className='Vcontainer'>

           {Vdata.map((movie)=>{
               const{id,image,media} = movie;
               return(
                <div className='VWrap' key={id}>
                <img  
                src={image} alt="viewersimg" />
                <video
                playsInline={true}
                loop
                autoPlay={true}
                 muted="muted"
                src={media}  
                type="video/mp4"
                onMouseOver={(event) => event.target.play()}
                onMouseOut={(event) => event.target.pause()}
                /> 
                
            </div>
               )
           })}

            
           
            

        </div>
       </>
    )
}

export default Viewers;