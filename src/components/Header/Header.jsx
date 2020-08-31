import React from 'react';
import logo from './../../assets/images/logo.png';
import './Header.scss';


export default function Header() {
    const logged = localStorage.getItem('userToken');

    function logout() {
        localStorage.removeItem('userToken');
        window.location.href = window.location.origin;
    }

    return (
        <div className="header-container">
            <div className="header" key={logged}>
                <img src={logo} className="logo" alt="logo" />
                {logged ?
                    <i className="icon-sign-out" onClick={() => logout()} />
                    : null}

            </div>
        </div>
    );
}
