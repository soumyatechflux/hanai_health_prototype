import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// import './MainPage.css';
import logo from './Capture.PNG';
import Dropdown from 'react-bootstrap/Dropdown';
// import Profile from '../Profile/Profile'


const MainPage = () => {
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
        navigate("/")
    };

    return (
    <>
        <div className='nav-position'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <img src={logo} alt="logo" className="img" />
                <div className="collapse navbar-collapse" id="navbar-list-4">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown d-flex align-items-center">
                            <a
                                className="nav-link dropdown-toggle myinfo"
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <img
                                    src={profileImage}
                                    width={40}
                                    height={40}
                                    className="rounded-circle"
                                    alt="profile"
                                />
                                    
                            </a>
                            {/* <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">Login</a>
                                <a className="dropdown-item" href="#">Logout</a>
                            </div> */}
                            <Dropdown className="d-inline mx-2" >
                                <Dropdown.Toggle id="dropdown-autoclose-false"  className="custom-dropdown-toggle">
                                <div className="mx-2">
                                        <span className="information" id="name">{name}</span>
                                        <p className="information" id="status">{status}</p>
                                    </div>
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='custom_dropdown_menu'>
                                {status === 'Logged Out' ? (
                                        <Dropdown.Item href="#" onClick={handleLoginClick}>Login</Dropdown.Item>
                                    ) : (
                                        <>
                                            <Dropdown.Item href="/profile" >Profile</Dropdown.Item> {/* Add a Profile link here */}
                                            <Dropdown.Item href="#" onClick={handleLogoutClick}>Logout</Dropdown.Item>
                                        </>
                                    )}
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    </ul>
                </div>
            </nav>
          
        </div>
    </>
    );
};

export default MainPage;
