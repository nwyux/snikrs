import { useContext, useEffect, useState } from "react";
import { CartContext } from "./Productpage";
import { Link } from "react-router-dom";

export default function CartItem({ item }) {
  const { cartItem, setCartItem } = useContext(CartContext);

  const deleteCartItem = (id) => {
    const updatedCart = cartItem.filter((item) => item.id !== id);
    setCartItem(updatedCart);
    const json = JSON.stringify(updatedCart);
    localStorage.setItem("cartItem", json);
  };

  return (
    <div
      className="flex flex-col md:flex-row w-full md:gap-10 justify-between items-center border-b-2 border-noir pb-5 mb-5"
    >
      <div className="flex flex-col  md:flex-row items-center gap-6">
      <Link to={`/sneakers/${item.id}`} >
        <img
          src={item.img}
          alt={item.name}
          className="object-contain md:w-48 md:h-24"
        />
        </Link>
        <div className="ml-5">
          <Link to={`/sneakers/${item.id}`} ><h3 className="text-lg font-bold hover:underline">{item.name}</h3></Link>
          <h4 className="text-sm font-alata">{item.brand} | {item.color}</h4>
          <h4 className="text-sm font-alata">Size: {item.selectedSize}</h4>
          <h4 className="text-sm font-alata">Quantity: {item.selectedQuantity}</h4>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0 gap-4 font-alata">
        <div className="flex flex-col ">
          {item.isSale ? (
            <>
            <h3 className="text-lg line-through">${item.price}</h3>
            <h3 className="text-lg">${(Number(item.price) * 0.8).toFixed(2)}</h3>
            </>
            ) : (
                <h3 className="text-xl font-alata">
            ${item.selectedQuantity * item.price.toFixed(2)}
          </h3>
            )}
          <button
            onClick={() => deleteCartItem(item.id)}
            className="text-md underline"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
