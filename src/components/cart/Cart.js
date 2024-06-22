import React from 'react';
import './cart.css';
import Product from './product.PNG'; // Update this path to the actual path of your image
import Main from '../main/Main';

function Cart() {
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

    return (

        <>


        <Main />
        <section className="content-section py-3 pe-5" style={{height:"89vh"}}>
            <div className="cart mt-3">
                <h3>Cart</h3>
                <div className="row m-row">
                    <div className="col-md-4 col-12 column" id="product">
                        <h6>Product</h6>
                        <img src={Product} alt="product" className="img" />
                        <p>365 Supplement Supports</p>
                    </div>
                    <div className="col-md-4 col-12 column" id="quantity">
                        <div><h6>Quantity</h6></div>
                        <br /><br />
                        <div className="d-flex plus-minus">
                            <button
                                className="btn"
                                id="plus"
                                onClick={(event) => changeQuantity(event, 1)}
                            >+</button>
                            <label className="btn" id="quant">0</label>
                            <button
                                className="btn"
                                id="minus"
                                onClick={(event) => changeQuantity(event, -1)}
                            >-</button>
                        </div>
                        <br /><br />
                    </div>
                    <div className="col-md-4 col-12 column col-btn">
                        <button id="btn">Buy Now</button>
                    </div>
                </div>
            </div>
        </section>
        </>

    );
}

export default Cart;
