import React from 'react';
import './header.css';
 const Header =({name})=>{
    return (
        <header className="app-header">
        <div className="logo">{name}</div>
        </header>
    )
}
export default Header;