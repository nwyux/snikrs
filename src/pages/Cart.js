import CartWithItems from "../components/CartWithItems"
import EmptyCart from "../components/EmptyCart"
import { CartContext } from "../components/Productpage"
import { useContext } from "react"

export default function Cart() {
    const {cartItem} = useContext(CartContext);


  return (
    <div>
        {cartItem.length !== 0 ? (
            <CartWithItems />
        ) : (
            <EmptyCart />
        )}
    </div>
  )
}
