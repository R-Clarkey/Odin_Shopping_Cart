import { useEffect, useState } from "react"
import { useOutletContext } from "react-router";
import { Link } from "react-router"


const Cart = () => {

    const { cart, setCart, addToCart, decrement } = useOutletContext()

    let cartItemCount = 0
    let cartRunningTotal = 0
    for(let x in cart){
        console.log("Item", cart[x]["product"]["price"])
        cartItemCount += cart[x]["qty"]
        cartRunningTotal += (Math.round(cart[x].product.price * 100) * cart[x].qty) / 100
    }

    cartRunningTotal = Math.round(cartRunningTotal)

    let finalTotal = parseFloat((cartRunningTotal + 3.45).toFixed(2))

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
                            Subtotal ({cartItemCount} {cartItemCount == 1  ? "Item" : "Items"})
                            {console.log("Subtotal final value", cartItemCount)}
                        </p>
                        <div id="cart-subtotal-value">
                            {console.log("Running total", cartRunningTotal)}
                            £{cartRunningTotal}
                        </div>
                    </div>
                    <div id="cart-shipping-container" className="cart-subtotal-bottom-border">
                        <div id="cart-shipping-text">
                            Shipping
                        </div>
                        <div id="cart-shipping-duration">
                            Standard (3-5 days)
                        </div>
                        <p id="cart-shipping-price">
                            £3.45
                        </p>
                    </div>
                        <div id="cart-discount-text">
                            Discounts
                        </div>
                    <div id="cart-discount-container" className="cart-subtotal-bottom-border">
                        <input type="text" name="cart-discount" id="cart-discount" placeholder="Enter promo code"/>
                        <button id="cart-discount-button" type="button">Apply</button>
                        <div id="cart-discount-value">
                            -£0.00
                        </div>
                    </div>
                    <div id="cart-total-container">
                        <div id="cart-total-text">
                            Total
                        </div>
                        <div id="cart-total-value">
                            £{finalTotal}
                        </div>
                    </div>
                    <button id="cart-checkout-button" type="button"><i class="fa-solid fa-lock"></i> Checkout</button>
                    <Link id="cart-link" to="/shop">Continue shopping</Link>
                </div>
            </div>
        </div>
    )
}

export default Cart