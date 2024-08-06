import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Success = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/cart");
    }, 2000); 

    return () => clearTimeout(timer);
  }, [navigate]);
  const containerStyle = {
    height: "100vh",
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={containerStyle}
    >
      <div className="text-center" style={{ color: "green" }}>
        Your Transaction is successful.
      </div>
    </div>
  );
};

export default Success;
