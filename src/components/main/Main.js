import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './main.css';
import Capture from './Capture.PNG';

const Main = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Function to determine if a link is selected
    const isSelected = (path) => location.pathname === path;

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <img src={Capture} alt="logo" className="img" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbar-list-4">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle myinfo" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" width={40} height={40} className="rounded-circle" />
                                <div className="mx-2">
                                    <span className="information" id="name"> Hanai Health</span>
                                    <p className="information" id="status">Logout</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <section>
                <div id="wrapper">
                    {/* Sidebar */}
                    <div id="sidebar-wrapper">
                        <ul className="sidebar-nav nav-pills nav-stacked" id="menu">
                            <li className={isSelected('/home') ? 'Selectedddddd' : ''}>
                                <a onClick={() => navigate('/home')} className={isSelected('/home') ? 'Selectedddddd' : ''}>
                                    <span className="fa-stack fa-lg pull-left side-icon">
                                        <i className="fa fa-home fa-stack-1x icon" aria-hidden="true" />
                                    </span>
                                </a>
                            </li>
                            <li className={isSelected('/add_diseases') ? 'Selectedddddd' : ''}>
                                <a onClick={() => navigate('/add_diseases')} className={isSelected('/add_diseases') ? 'Selectedddddd' : ''}>
                                    <span className="fa-stack fa-lg pull-left side-icon">
                                        <i className="fa-solid fa-circle-plus fa-stack-1x icon" />
                                    </span>
                                </a>
                            </li>
                            <li className={isSelected('/labreports') ? 'Selectedddddd' : ''}>
                                <a onClick={() => navigate('/labreports')} className={isSelected('/labreports') ? 'Selectedddddd' : ''}>
                                    <span className="fa-stack fa-lg pull-left side-icon">
                                        <i className="fa-solid fa-clipboard-list fa-stack-1x icon" />
                                    </span>
                                </a>
                            </li>
                            <li className={isSelected('/cart') ? 'Selectedddddd' : ''}>
                                <a onClick={() => navigate('/cart')} className={isSelected('/cart') ? 'Selectedddddd' : ''}>
                                    <span className="fa-stack fa-lg pull-left side-icon">
                                        <i className="fa fa-cart-plus fa-stack-1x icon" />
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* <section className="content-section py-3 pe-5">
                <div className="search">
                    <form action="" className="search-bar">
                        <input type="text" placeholder="Search" />
                        <button type="submit">
                            <i className="fas fa-search" />
                        </button>
                    </form>
                </div>
            </section> */}
        </div>
    );
}

export default Main;
