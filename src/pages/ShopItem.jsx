import { useParams } from "react-router";

const ShopItem = () => {

const { itemId } = useParams()

    return(
        <>
            <div>ShopItem {itemId}</div>
        </>
    )
}

export default ShopItem