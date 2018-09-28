import React from 'react'
import Movie from './movie/movie';
import './movies.css';
const Movies = ()=>{
    return (
        <div className="movies">
            <div className="container is-fluid movies-content">

                <Movie name='Aquaman' img='1'/>
                <Movie name='Aquaman' img='3'/>
                <Movie name='Aquaman' img='2'/>
                <Movie name='Aquaman' img='5'/>
                <Movie name='Aquaman' img='4'/>
                <Movie name='Aquaman' img='3'/>
                <Movie name='Aquaman' img='2'/>
                
                
               

            </div>
        </div>
    )
}
export default Movies;