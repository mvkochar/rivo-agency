import React from 'react'
import './css/Header.css'

const Header = () => {
    return (
        <header className='header d-f jc-sb align-center'>
            <div><img src="/images/logo.svg" alt="Logo" /></div>
            <div className='d-f'>
                <nav>
                    <ul className="header-nav d-f">
                        <li><a href="">Projects</a><sup className='projects-count'>16</sup></li>
                        <li><a href="">Services</a></li>
                        <li>
                            <a href="">Experise</a>
                            <button className='nav-drop-btn btn-clear'>
                                <img src="/images/arrow-down.png" alt="arrow-down" />
                            </button>
                        </li>
                        <li><a href="">Contacts</a></li>
                        <li><a href="">Carees</a><sup className='carees-hot'>Hot</sup></li>
                    </ul>
                </nav>
                <div className="burger-menu d-f">
                    <button className='btn-clear d-b'>
                        <svg width="30" height="10" viewBox="0 0 30 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="30" height="2" fill="#1A1A1A" />
                            <rect y="8" width="17" height="2" fill="#1A1A1A" />
                        </svg>
                    </button>
                    <div className="title burger-menu-title">Menu</div>
                </div>
            </div>
        </header>
    )
}

export default Header