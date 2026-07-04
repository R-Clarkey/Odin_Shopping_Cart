import { useEffect, useState } from "react"
import { useOutletContext } from "react-router";

const Cart = () => {

    const { cart, setCart, addToCart, decrement } = useOutletContext()

    return(
        <div id="cart-content-container">
            <div id="cart-items-container">
                <h2 id="cart-container-title">Your Cart</h2>
                <p className="cart-faded-text">
                    Review your items, save for later, or complete your order.
                </p>
                {Object.entries(cart).map(([productId, entry]) => (
                <div className="cart-item" key={productId}>
                    <div className="cart-item-title">{entry.product.title}</div>
                    <div className="cart-item-category">{entry.product.category}</div>
                    <div className="cart-item-price">Price: {entry.product.price}</div>
                    <div className="cart-item-quantity">Qty: {entry.qty}</div>
                </div>))}            
            </div>
            <div id="cart-order-summary-container">
                <div>Test</div>
            </div>
        </div>
    )
}

export default Cart