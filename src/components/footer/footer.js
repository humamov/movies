import React from 'react';
import './footer.css';
const Footer = () =>{
    return(
        <footer className="app-footer">
            <ul className="user-interaction">
                <li><a >like</a></li>
                <li><a >unlike</a></li>
            </ul>
            <div className="hr">
                <hr/>
            </div>
            <ul className="app-social">
                <li><a>facebook</a></li>
                <li><a>youtube</a></li>
                <li><a>twitter</a></li>
            </ul>
        </footer>
    )
}
export default Footer;