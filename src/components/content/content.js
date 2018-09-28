import React from 'react';
import './content.css'
import Filter from './filter/filter';
import Movies from './movies/movies';
import Genres from './geners/geners';

const Content = (props)=>{
    return (
        <div className="app-content">
            <Filter
                filterToggle={props.filterToggle}
                filterToggleFn={props.filterToggleFn}
            />
            <Movies/>
            <Genres
                genresFilter={props.genresFilter}
                genresToggleFN={props.genresToggleFN}
                
            />
            
        </div>
    )
}
export default Content;