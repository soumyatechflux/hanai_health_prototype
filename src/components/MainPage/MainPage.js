import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./MainPage.css";
import logo from "../images/Modern Initial Font Logo.png";
import Dropdown from "react-bootstrap/Dropdown";
import Profile from "../Profile/Profile";
import { BiClipboard } from "react-icons/bi";

const MainPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedPath, setSelectedPath] = useState("");
  // const [profileImage, setProfileImage] = useState(""); // State for profile image

  useEffect(() => {
    setSelectedPath(location.pathname);
  }, [location.pathname]);

  const handleNavigation = (path) => {
    navigate(path);
    setSelectedPath(path);
  };

  // const updateProfileImage = (newImage) => {
  //   setProfileImage(newImage);
  // };

  const [sidebarHeight, setSidebarHeight] = useState("100vh");
  useEffect(() => {
    const updateHeight = () => {
      // You can set the height based on the window's inner height
      setSidebarHeight(`${window.innerHeight}px`);
    };

    // Update height on mount
    updateHeight();

    // Update height on window resize
    window.addEventListener("resize", updateHeight);

    // 

    const username__ = localStorage.getItem("__username");
    console.log(username__);
    setName(username__);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  // const logo = './Capture.PNG';
  const profileImage =
    "https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg";

  // const status = "Logout";

  const [name, setName] = useState("Hanai Health"); // Default status
  const [status, setStatus] = useState("Loged In"); // Default status

  const handleLoginClick = () => {
    setStatus("Logged In"); // Update the status as needed
  };
  const handleLogoutClick = () => {
    localStorage.clear();
    setStatus("Logged Out"); // Update the status as needed
    navigate("/");
  };
  const handleNavigateProfile = () => {
    navigate("/profile");
  };
  const handleNavigatePreferances = () => {
    navigate("/interest");
  }
  return (
    <>
      <div className="nav-position">
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
                <Dropdown className="d-inline mx-2">
                  <Dropdown.Toggle
                    id="dropdown-autoclose-false"
                    className="custom-dropdown-toggle"
                  >
                    <div className="mx-2">
                      <span className="information" id="name">
                        {name}
                      </span>
                      <p className="information" id="status">
                        {status}
                      </p>
                    </div>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="custom_dropdown_menu">
                    {status === "Logged Out" ? (
                      <Dropdown.Item href="#" onClick={handleLoginClick}>
                        Login
                      </Dropdown.Item>
                    ) : (
                      <>
                        <Dropdown.Item onClick={handleNavigateProfile}>
                          Profile
                        </Dropdown.Item>
                        
                        <Dropdown.Item onClick={handleNavigatePreferances}>
                          Preferances
                        </Dropdown.Item>
                        {" "}
                        {/* Add a Profile link here */}
                        <Dropdown.Item href="#" onClick={handleLogoutClick}>
                          Logout
                        </Dropdown.Item>
                      </>
                    )}
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </ul>
          </div>
        </nav>
        <section>
          <div id="wrapper">
            <div id="sidebar-wrapper" className="position-fixed">
              <ul className="sidebar-nav nav-pills nav-stacked" id="menu">
                <li className={selectedPath === "/home" ? "Selectedddddd" : ""}>
                  <a
                    onClick={() => handleNavigation("/home")}
                    style={{ color: selectedPath === "/home" ? "red" : "" }}
                  >
                    <span
                      className="fa-stack fa-lg pull-left side-icon"
                      style={{ color: selectedPath === "/home" ? "red" : "" }}
                    >
                      <i
                        className="fa fa-home fa-stack-1x icon"
                        style={{ color: selectedPath === "/home" ? "red" : "" }}
                        aria-hidden="true"
                      />
                    </span>
                  </a>
                </li>

                <li
                  className={
                    selectedPath === "/add_diseases" ? "Selectedddddd" : ""
                  }
                >
                  <a
                    onClick={() => handleNavigation("/add_diseases")}
                    style={{
                      color: selectedPath === "/add_diseases" ? "red" : "",
                    }}
                  >
                    <span
                      className="fa-stack fa-lg pull-left side-icon"
                      style={{
                        color: selectedPath === "/add_diseases" ? "red" : "",
                      }}
                    >
                      <i
                        className="fa-solid fa-circle-plus fa-stack-1x icon"
                        style={{
                          color: selectedPath === "/add_diseases" ? "red" : "",
                        }}
                      />
                    </span>
                  </a>
                </li>

                <li
                  className={
                    selectedPath === "/labreports" ? "Selectedddddd" : ""
                  }
                >
                  <a
                    onClick={() => handleNavigation("/labreports")}
                    style={{
                      color: selectedPath === "/labreports" ? "red" : "",
                    }}
                  >
                    <span
                      className={`fa-stack fa-lg pull-left side-icon`}
                      style={{
                        color: selectedPath === "/labreports" ? "red" : "",
                      }}
                    >
                      <i
                        className={`fa-solid fa-clipboard-list fa-stack-1x icon`}
                        style={{
                          color: selectedPath === "/labreports" ? "red" : "",
                        }}
                      />
                    </span>
                  </a>
                </li>

                <li className={selectedPath === "/cart" ? "Selectedddddd" : ""}>
                  <a
                    onClick={() => handleNavigation("/cart")}
                    style={{ color: selectedPath === "/cart" ? "red" : "" }}
                  >
                    <span
                      className={`fa-stack fa-lg pull-left side-icon`}
                      style={{ color: selectedPath === "/cart" ? "red" : "" }}
                    >
                      <i
                        className={`fa fa-cart-plus fa-stack-1x icon`}
                        style={{ color: selectedPath === "/cart" ? "red" : "" }}
                      />
                    </span>
                  </a>
                </li>

                <li
                  className={selectedPath === "/orders" ? "Selectedddddd" : ""}
                >
                  <a
                    onClick={() => handleNavigation("/orders")}
                    style={{ color: selectedPath === "/orders" ? "red" : "" }}
                  >
                    <span
                      className={`fa-stack fa-lg pull-left side-icon`}
                      style={{ color: selectedPath === "/orders" ? "red" : "" }}
                    >
                      <BiClipboard
                        className="icon"
                        style={{
                          color: selectedPath === "/orders" ? "red" : "",
                          width: "100%",
                        }}
                      />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MainPage;
