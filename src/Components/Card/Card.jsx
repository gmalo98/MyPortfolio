import React from 'react'
import '../Card/Card.css';
///import  movie  from '../../Assets/movieimage.png';
const Card = (props) => {
  return (
    <div className={`card-container ${props.mode}`}>
      <img src={props.image} alt=''/>
      <h1>{props.name}</h1>
      <p>Moviesnow is a demo streaming application like netflix and it's completely my own design where users can watch a variety of free movies.</p>
      <div className="card-button">
        <div className="card-button-viewlive">
          <button><a href={props.link}>View Live</a></button>
        </div>
        <div className="card-button-viewcode">
          <button>View Code</button>
        </div>
      </div>
    </div>
  )
}

export default Card
