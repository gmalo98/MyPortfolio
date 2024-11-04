import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../Projects/Projects.css';
//import movie from '../../Assets/movieimage.png';
import cardinfo from '../../Assets/CardInfo';
import Card from'../Card/Card';

  

const Projects = ({mode}) => {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block"}}
            onClick={onClick}
          />
        );
      }
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 830,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
             
            }
          }
          
        ]
      };
  return (
    <div className={`slider-container ${mode}`} id="Project">
      <h1 className='slide-header'>Projects</h1>
      
      <Slider {...settings} className="slide-box">
        {cardinfo.map((item,index)=>{
          return <Card name={item.name} image={item.image} index={index} mode={mode} link={item.link}/>
        })}
      </Slider>
    </div>
   
  )
}

export default Projects
