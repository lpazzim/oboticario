import React from 'react';
import logo from './../../assets/images/white-logo.png';
import './Footer.scss';


export default function Footer() {
    return (
        <div className="footer">
            <img src={logo} className="logo" alt="logo" />
        </div>
    );
}
