import React, { useState } from "react";
import "./cart.css";
import Product from "./product.PNG";
import MainPage from "../MainPage/MainPage";
import { useNavigate } from "react-router-dom";
import { addToOrder } from "../../api";
import { toast } from "react-toastify";

const PLUS_BUTTON_ID = "plus";
const MINUS_BUTTON_ID = "minus";
const QUANTITY_LABEL_ID = "quant";
const BUY_NOW_BUTTON_ID = "btn";
const PRODUCT_NAME = "365 Supplement Supports";
const PRODUCT_PRICE = 250;

const Cart = () => {
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  const changeQuantity = (event, increment) => {
    let newQuantity = quantity + increment;
    if (newQuantity < 0) newQuantity = 0;
    setQuantity(newQuantity);
    setTotal(newQuantity * PRODUCT_PRICE);

    const label = event.currentTarget.parentElement.querySelector("label");
    label.textContent = newQuantity;
  };

  const addToOrderFunction = async (formData) => {
    try {
      const response = await addToOrder(formData);
      console.log(response?.data?.data?.url);
      window.open(response?.data?.data?.url, "_blank");
      // navigate(response?.data.url);
     
    } catch (error) {
      console.error(error);
    }
  };
  const handleBuyNowClick = () => {
    // Create FormData object
    const formData = new FormData();
    console.log(Product);
    // Add data to FormData
    formData.append("product_name", PRODUCT_NAME);
    formData.append("image", Product);
    formData.append("price", PRODUCT_PRICE);
    formData.append("quantity", quantity);
    // formData.append("total", total);

    // Log FormData (for demonstration)
    // for (let [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }
    if (quantity > 0) {
      addToOrderFunction(formData);
      setQuantity(0);
      setTotal(0);
    } else {
      console.log("shiosi")
      //toast.error("Please increase Quantity");
    }
  };

  return (
    <>
      <MainPage />
      <section className="content-section cart-content-section py-3 pe-5">
        <div className="cart" style={{ marginTop: "65px" }}>
          <h3>Cart</h3>
          <div className="row m-row">
            <div className="col-md-4 col-12 column" id="product">
              <h6>Product</h6>
              <img src={Product} alt="product" className="prod-img" />
              <p>
                {PRODUCT_NAME}
                <br />
                Price : {PRODUCT_PRICE}
              </p>
            </div>
            <div className="col-md-4 col-12 column" id="quantity">
              <h6>Quantity</h6>
              <br />
              <div className="d-flex plus-minus">
                <button
                  className="btn"
                  id={MINUS_BUTTON_ID}
                  onClick={(event) => changeQuantity(event, -1)}
                >
                  -
                </button>
                <label className="btn" id={QUANTITY_LABEL_ID}>
                  {quantity}
                </label>
                <button
                  className="btn"
                  id={PLUS_BUTTON_ID}
                  onClick={(event) => changeQuantity(event, 1)}
                >
                  +
                </button>
              </div>

              <br />
              <p>Total : {total}</p>
            </div>
            <div className="col-md-4 col-12 column col-btn">
              <button id={BUY_NOW_BUTTON_ID} onClick={handleBuyNowClick}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
