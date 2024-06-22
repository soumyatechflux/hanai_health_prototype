import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './main.css';
import Capture from './Capture.PNG';

function Main() {
    const navigate = useNavigate(); // Initialize navigate function

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
                                    <span className="info" id="name"> Bhagyashri Patil</span>
                                    <p className="info" id="status">Logout</p>
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
                            <li className="active">
                                <a href="#"><span className="fa-stack fa-lg pull-left side-icon"><i className="fa fa-home fa-stack-1x" aria-hidden="true" /></span></a>
                            </li>
                            <li>
                                <a href="#"><span className="fa-stack fa-lg pull-left side-icon"><i className="fa-solid fa-circle-plus fa-stack-1x" /></span></a>
                            </li>
                            <li>
                                <a onClick={() => navigate('/labreports')}><span className="fa-stack fa-lg pull-left side-icon"><i className="fa-solid fa-clipboard-list fa-stack-1x" /></span></a>
                            </li>
                            <li>
                                <a onClick={() => navigate('/cart')}>
                                    <span className="fa-stack fa-lg pull-left side-icon">
                                        <i className="fa fa-cart-plus fa-stack-1x" />
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="content-section py-3 pe-5">
                <div className="search">
                    <form action="" className="search-bar">
                        <input type="text" placeholder="Search" />
                        <button type="submit">
                            <i className="fas fa-search" />
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Main;
