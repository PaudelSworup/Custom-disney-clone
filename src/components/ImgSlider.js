import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./imgslider.css";
import api from './Imgsliderapi';

const ImgSlider = () => {
    let settings = {
        dots:true,
        infinite:true,
        speed:500,
        slideToShow:1,
        slideToScroll:1,
        autoplay:true,
    };
    return (
        <Slider {... settings} className='Carousel' >
            {api.map((curElem)=>{
                const{id,src} = curElem;
                return(
                    <div className='Wrap' key={id}>
                    <img src={src} alt='slider' />
                </div>
                 )
            })}
             
        </Slider>
    )
}

export default ImgSlider
