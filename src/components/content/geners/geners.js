import React from 'react';
import './geners.css';
const Geners =(props)=>{
    return(
        <div className={`geners ${props.genresFilter ? 'expanded' : ''}`}>
            <div className="geners--btn" onClick={props.genresToggleFN}>
                Geners
            </div>
            <ul className="geners--list">
                <li className="geners--item">Very Popular</li>
                <li className="geners--item">Sport</li>
                <li className="geners--item">romace</li>
                <li className="geners--item">War</li>
                <li className="geners--item">History</li>
                <li className="geners--item">Animation</li>
                <li className="geners--item">Not Popular</li>
                <li className="geners--item">War</li>
                <li className="geners--item">History</li>
                <li className="geners--item">Animation</li>
                <li className="geners--item">Not Popular</li>
                <li className="geners--item">War</li>
                <li className="geners--item">History</li>
                <li className="geners--item">Animation</li>
                <li className="geners--item">Not Popular</li>
                <li className="geners--item">War</li>
                <li className="geners--item">History</li>
                <li className="geners--item">Animation</li>
                <li className="geners--item">Not Popular</li>
                <li className="geners--item">War</li>
                <li className="geners--item">History</li>
                <li className="geners--item">Animation</li>
            </ul>
        </div>
    )
}
export default Geners;