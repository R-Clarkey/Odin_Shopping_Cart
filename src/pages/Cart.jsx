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
                <div id="cart-items">
                {Object.entries(cart).length === 0 ?
                <div>Add items to your cart to view them here...</div>           
                : 
                    Object.entries(cart).map(([productId, entry]) => (
                    <div className="cart-item" key={productId}>
                        <img className="cart-item-image" src={entry.product.image} alt="Item Picture" />
                        <div className="cart-item-title">{entry.product.title}</div>
                        <div className="cart-item-category">{entry.product.category}</div>
                        <div className="cart-item-stock">In stock</div>
                        <div className="cart-item-price">£{entry.product.price}</div>
                        <div className="cart-item-quantity-container">
                            <div className="cart-item-quantity-controls">
                                <button className="cart-minus-button" onClick={() => decrement(productId)}>-</button>
                                <span className="cart-quantity-value">{entry.qty}</span>
                                <button className="cart-add-button" onClick={() => addToCart(entry.product)}>+</button>
                            </div>
                            <div className="cart-total-value">£{(entry.qty * entry.product.price).toFixed(2)}</div>
                        </div>
                    </div>))    
                    }  
                </div>      
            </div>
            <div id="cart-order-summary-container">
                <div id="cart-order-summary">
                    <h2 id="cart-summary-title">Order Summary</h2>
                    <div id="cart-subtotal-container" className="cart-subtotal-bottom-border">
                        <p className="cart-summary-text">
                            Subtotal (-Work out item count here-)
                        </p>
                        <div id="cart-subtotal-value">
                            Total
                        </div>
                    </div>
                    <div id="cart-shipping-container">
                        <p className="cart-summary-text">
                            Shipping
                        </p>
                        <div id="cart-shipping-duration">
                            Standard (3-5 days)
                        </div>
                        <p id="cart-shipping-price">
                            £3.45
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart