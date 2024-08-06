import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Sidebar.css';
import logo from '../images/Modern Initial Font Logo.png';
import Dropdown from 'react-bootstrap/Dropdown';



const Sidebar = () => {
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

    const [sidebarHeight, setSidebarHeight] = useState('100vh');
    useEffect(() => {
        const updateHeight = () => {
          // You can set the height based on the window's inner height
          setSidebarHeight(`${window.innerHeight}px`);
        };
    
        // Update height on mount
        updateHeight();
    
        // Update height on window resize
        window.addEventListener('resize', updateHeight);
    
        // Cleanup on unmount
        return () => window.removeEventListener('resize', updateHeight);
      }, []);

    // const logo = './Capture.PNG';
    const profileImage = "https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg";
    const name = "Hanai Health";
    // const status = "Logout";

    const [status, setStatus] = useState('Loged In'); // Default status

    const handleLoginClick = () => {
        setStatus('Logged In'); // Update the status as needed
    };
    const handleLogoutClick = () => {
        setStatus('Logged Out'); // Update the status as needed
    };

    return (
    <>
        
            <section>
                <div id="wrapper">

                    <div id="sidebar-wrapper" className='position-fixed'>
                        <ul className="sidebar-nav nav-pills nav-stacked" id="menu" >




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
                                <a onClick={() => handleNavigation('/labreports')} style={{ color: selectedPath === '/labreports' ? 'red' : '' }}>
                                    <span className={`fa-stack fa-lg pull-left side-icon`} style={{ color: selectedPath === '/labreports' ? 'red' : '' }}>
                                        <i className={`fa-solid fa-clipboard-list fa-stack-1x icon`} style={{ color: selectedPath === '/labreports' ? 'red' : '' }} />
                                    </span>
                                </a>
                            </li>




                            <li className={selectedPath === '/cart' ? 'Selectedddddd' : ''}>
                                <a onClick={() => handleNavigation('/cart')} style={{ color: selectedPath === '/cart' ? 'red' : '' }}>
                                    <span className={`fa-stack fa-lg pull-left side-icon`} style={{ color: selectedPath === '/cart' ? 'red' : '' }}>
                                        <i className={`fa fa-cart-plus fa-stack-1x icon`} style={{ color: selectedPath === '/cart' ? 'red' : '' }} />
                                    </span>
                                </a>
                            </li>




                        </ul>
                    </div>
                </div>
            </section>
       
    </>
    );
};

export default Sidebar;
