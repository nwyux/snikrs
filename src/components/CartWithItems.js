import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { CartContext } from "./Productpage";
import { useContext, useEffect, useState } from "react";
import EmptyCart from "./EmptyCart";
import NewProductItem from "./NewProductItem";

export default function CartWithItems() {
  const { cartItem, setCartItem } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const defTotalPrice = cartItem.reduce((acc, item) => {
      if (item.isSale) {
        return acc + item.price * 0.8 * item.selectedQuantity;
      } else {
        return acc + item.price * item.selectedQuantity;
      }
    }, 0);
    const newTotalPrice = defTotalPrice.toFixed(2);
    setTotalPrice(newTotalPrice);
  }, [cartItem]);

  return (
    <>
      <div className="flex flex-col justify-center gap-8 items-center">
        <div className="flex items-center">
          <h3 className="text-xl font-bold py-6">Your Cart</h3>
        </div>
        <div className="flex flex-col md:gap-6 justify-between items-center ">
          <div className="flex flex-col items-center mt-5 md:mt-0">
            {cartItem.map((item) =>
              cartItem.length !== 0 ? (
                <CartItem key={item.id} item={item} />
              ) : (
                <EmptyCart key={item.id} />
              )
            )}
          </div>

          <div className="flex flex-col justify-between items-center pb-5 md:gap-4">
            <div className="flex items-center">
              <h3 className="text-xl font-alata">Total</h3>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center mt-5 md:mt-0">
                <h3 className="text-xl font-alata">${totalPrice}</h3>
              </div>
              <div className="flex items-center mt-5 md:mt-0">
                <Link
                  to="/checkout"
                  className="bg-noir text-blanc py-2 px-5 rounded-full text-lg"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

            <div className="flex items-center justify-center">
                <h3 className="text-xl font-bold py-6">Do Not Miss Our New Sneakers!</h3>
            </div>
                <NewProductItem />
    </>
  );
}
