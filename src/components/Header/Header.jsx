import React from 'react';
import logo from './../../assets/images/logo.png';
import './Header.scss';


export default function Header() {
    return (
        <div className="header-container">
            <div className="header">
                <img src={logo} className="logo" alt="logo" />
            </div>
        </div>
    );
}
