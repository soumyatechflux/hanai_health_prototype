import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './main.css';
import Capture from './Capture.PNG';

const Main = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedPath, setSelectedPath] = useState('');

    useEffect(() => {
        setSelectedPath(location.pathname);
    }, [location.pathname]);

    const handleNavigation = (path) => {
        navigate(path);
        setSelectedPath(path);
    };

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
                    <div id="sidebar-wrapper" style={{ height: selectedPath === '/home' ? '170.5vh' : '89vh' }}>
                        <ul className="sidebar-nav nav-pills nav-stacked" id="menu">




                        <li className={selectedPath === '/home' ? 'Selectedddddd' : ''}>
    <a onClick={() => handleNavigation('/home')} style={{ color: selectedPath === '/home' ? 'red' : '' }}>
        <span className="fa-stack fa-lg pull-left side-icon" style={{ color: selectedPath === '/home' ? 'red' : '' }}>
            <i className="fa fa-home fa-stack-1x icon" style={{ color: selectedPath === '/home' ? 'red' : '' }} aria-hidden="true" />
        </span>
    </a>
</li>






<li className={selectedPath === '/add_diseases' ? 'Selectedddddd' : ''}>
    <a onClick={() => handleNavigation('/add_diseases')} style={{ color: selectedPath === '/add_diseases' ? 'red' : '' }}>
        <span className="fa-stack fa-lg pull-left side-icon" style={{ color: selectedPath === '/add_diseases' ? 'red' : '' }}>
            <i className="fa-solid fa-circle-plus fa-stack-1x icon" style={{ color: selectedPath === '/add_diseases' ? 'red' : '' }} />
        </span>
    </a>
</li>






                            <li className={selectedPath === '/labreports' ? 'Selectedddddd' : ''}>
                                <a onClick={() => handleNavigation('/labreports')}  style={{ color: selectedPath === '/labreports' ? 'red' : '' }}>
                                    <span className={`fa-stack fa-lg pull-left side-icon`}  style={{ color: selectedPath === '/labreports' ? 'red' : '' }}>
                                        <i className={`fa-solid fa-clipboard-list fa-stack-1x icon`}  style={{ color: selectedPath === '/labreports' ? 'red' : '' }} />
                                    </span>
                                </a>
                            </li>




                            <li className={selectedPath === '/cart' ? 'Selectedddddd' : ''}>
                                <a onClick={() => handleNavigation('/cart')}  style={{ color: selectedPath === '/cart' ? 'red' : '' }}>
                                    <span className={`fa-stack fa-lg pull-left side-icon`}  style={{ color: selectedPath === '/cart' ? 'red' : '' }}>
                                        <i className={`fa fa-cart-plus fa-stack-1x icon`}   style={{ color: selectedPath === '/cart' ? 'red' : '' }}/>
                                    </span>
                                </a>
                            </li>




                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Main;
