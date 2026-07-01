import { Link } from "react-router"

const Navbar = ({totalQty = 0}) => {
    return(
        <>
            <nav>
                <div id="nav-title-container"><Link to="/">Clarkey's</Link></div>
                <div id="nav-links-container">
                    <Link to="/shop">Shop</Link>
                    <Link to="/cart">Cart {totalQty ? `(${totalQty})` : ""}</Link>
                </div>
            </nav>      
        </>
    )
}

export default Navbar