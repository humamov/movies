import React from 'react';
import './movie.css';
const Movie = (props)=>{
    return(
        <div className="movie-card">
            <div className="card-top">
                <img src={`/assets/img/${props.img}.jpg`} alt=""/>
                <div className="like-button">
                <i class="far fa-heart fa-3x"></i>
                </div>
            </div>
            <div className="card-body">
                    <h3>{props.name}</h3>
                    <span>drama</span>
                    <span className="rating"><span >7</span>/10</span>
                </div>
        </div>
    )
}
export default Movie;