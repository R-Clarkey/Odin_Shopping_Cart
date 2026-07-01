import { useEffect, useState } from "react"
import { useOutletContext } from "react-router";

const Shop = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setData(data))
        .catch((error) => setError(error))
        .finally(() => setLoading(false))
    }, [])

    const { cart, setCart, addToCart, decrement } = useOutletContext()
    
    if(loading) return <p>Loading...</p>
    if(error) return <p>Network issue...</p>

return (
  <>
    <div>Shop</div>
    <div id="shop-items-container">
      {data.map((item) => {
        const amount = cart[item.id]?.qty ?? 0

        return (
          <div key={item.id} className="shop-item">
            <img
              className="shop-item-image"
              src={item.image}
              alt="An image of an item"
            />
            <p className="shop-item-title">{item.title}</p>
            <p className="shop-item-price">Price: £{item.price}</p>

            {amount === 0 ? (
              <button
                onClick={() => addToCart(item)}
                className="shop-item-button"
              >
                + Add
              </button>
            ) : (
              <div className="shop-amount-controls">
                <button className="shop-minus-button" onClick={() => decrement(item.id)}>-</button>
                <span className="shop-amount-value">{amount}</span>
                <button className="shop-add-button" onClick={() => addToCart(item)}>+</button>
              </div>
            )}
          </div>
        )
      })}
    </div>
  </>
)
}

export default Shop