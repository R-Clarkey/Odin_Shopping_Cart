import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import { useState } from "react";
import { useMemo } from "react";
import App from './App.jsx'

import Home from './pages/Home.jsx';
import Cart from './pages/Cart.jsx';
import Shop from './pages/Shop.jsx';
import ShopItem from "./pages/ShopItem.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

const Layout = () => {
  const [cart, setCart] = useState({})

  const totalQty = useMemo(
    () => Object.values(cart).reduce((sum, v) => sum + (v.qty ?? 0), 0),
    [cart]
  )

  function addToCart(product) {
    setCart((prev) => {
      const inCart = prev[product.id]
      const amount = (inCart?.qty ?? 0) + 1
      return {
        ...prev,
        [product.id]: { product, qty: amount },
      }
    })
  }

  const decrement = (productId) => {
    setCart((prev) => {
      const entry = prev[productId]
      if (!entry) return prev

      const nextQty = (entry.qty ?? 0) - 1
      if (nextQty <= 0) {
        const { [productId]: _, ...rest } = prev
        return rest
      }
      return {
        ...prev,
        [productId]: { ...entry, qty: nextQty },
      }
    })
  }

  return (
    <>
      <Navbar totalQty={totalQty} />
      <Outlet context={{ cart, setCart, addToCart, decrement }} />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "cart", element: <Cart /> },
      { path: "shop", element: <Shop /> },
      { path: "shop/:itemId", element: <ShopItem />}
    ],
  },
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);