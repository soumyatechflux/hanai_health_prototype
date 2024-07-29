import React from 'react';
import './cart.css';
import Product from './product.PNG'; // Update this path to the actual path of your image
import MainPage from '../MainPage/MainPage';
import { Navigate, useNavigate } from 'react-router-dom';
const PLUS_BUTTON_ID = "plus";
const MINUS_BUTTON_ID = "minus";
const QUANTITY_LABEL_ID = "quant";
const BUY_NOW_BUTTON_ID = "btn";
const PRODUCT_NAME = "365 Supplement Supports";
// const PRODUCT_IMAGE = "./product.PNG";

const Cart = () => {
    // Function to change the quantity
    const changeQuantity = (event, increment) => {
        // Find the label next to the clicked button
        const button = event.currentTarget;
        const label = button.parentElement.querySelector('label');
        // Get current value and update it
        let currentValue = parseInt(label.textContent);
        let newValue = currentValue + increment;
        // Ensure value does not go below 0
        if (newValue < 0) newValue = 0;
        // Set the new value
        label.textContent = newValue;
    }

    const navigate=useNavigate();

    const handleBuyNowClick =()=>{
        navigate('/orders');
    }

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
                            <p>{PRODUCT_NAME}</p>
                        </div>
                        <div className="col-md-4 col-12 column" id="quantity">
                            <div><h6>Quantity</h6></div>
                            <br /><br />
                            <div className="d-flex plus-minus">
                                <button
                                    className="btn"
                                    id={PLUS_BUTTON_ID}
                                    onClick={(event) => changeQuantity(event, -1)}
                                   
                                >-</button>
                                <label className="btn" id={QUANTITY_LABEL_ID}>0</label>
                                <button
                                    className="btn"
                                    id={MINUS_BUTTON_ID}
                                    onClick={(event) => changeQuantity(event, 1)}
                                >+</button>
                            </div>
                            <br /><br />
                        </div>
                        <div className="col-md-4 col-12 column col-btn">
                            <button id={BUY_NOW_BUTTON_ID} onClick={handleBuyNowClick}>Buy Now</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Cart;
