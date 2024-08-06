import React, { useEffect, useState } from "react";
import "./Orders.css";
import Product from "./product.PNG"; // Update this path to the actual path of your image
import MainPage from "../MainPage/MainPage";
import { getProductDataAPI } from "../../api";

const Orders = () => {
  const [OrderInfo, setOrderInfo] = useState([]);

  const getProductDatafunction = async () => {
    try {
      const response = await getProductDataAPI();
      console.log(response?.data?.data?.result);
      setOrderInfo(response?.data?.data?.result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProductDatafunction();
  }, []);

  return (
    <>
      <MainPage />
      <section className="content-section cart-content-section py-3 pe-5">
        <div className="cart" style={{ marginTop: "65px" }}>
          <h3>Orders</h3>
          {OrderInfo.length === 0 ? (
            <div className="no-data">
              <p>No data present</p>
            </div>
          ) : (
            <div className="row m-row">
              <div className="col-md-4 col-12 column" id="product">
                <h6>Product</h6>
                <img src={Product} alt="product" className="prod-img" />
                <p>{OrderInfo[0]?.product_name}</p>
                Price: {OrderInfo[0]?.price}
              </div>
              <div className="col-md-4 col-12 column" id="quantity">
                <div>
                  <h6>Quantity</h6>
                </div>
                <br />
                <div className="d-flex plus-minus">
                  <label className="order-btn" id="order_quant">
                    {OrderInfo[0]?.quantity}
                  </label>
                </div>
                <br />
                <p>Total: {OrderInfo[0]?.total_price}</p>
                <br />
              </div>
              <div className="col-md-4 col-12 column col-btn">
                <h3 style={{ color: "red" }}>Pending</h3>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Orders;
