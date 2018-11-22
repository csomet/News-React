import React from 'react';
import logo from '../assets/images/react-logo.png';
import logoNews from '../assets/images/news.png'

const Header = (props) => {
    return (
        <nav>
            <div className="nav-wrapper indigo accent-2">
                
                <a className="brand-logo center"> 
                <img src={logo} height='48' width='48' /> {props.title} 
                <img src={logoNews} height='48' width='48' /></a>
            </div>
        </nav>
    );
};

export default Header;