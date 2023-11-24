import { items } from "./AllData";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Productpage() {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const [product, setProduct] = useState(null);
  const [mainImg, setMainImg] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(null);

  useEffect(() => {
    const filteredProduct = items.filter((item) => item.id === productId);
    setProduct(filteredProduct[0]);
    setMainImg(filteredProduct[0].img);
  }, [productId]);

  const changeMainImg = (img) => {
    setMainImg(img);
  };

  const resetMainImg = () => {
    setMainImg(product.img);
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleSize = (event) => {
    setSize(event.target.value);
  }

  return (
    <div>
      <div className="flex py-4 px-2 sm:px-36 items-center">
        <Link
          to="/sneakers"
          className="text-xl font-alata before:content-['←'] hover:underline"
        >
          Go Back
        </Link>
      </div>
      {product && (
        <div className="container mx-auto h-screen items-center">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="flex-1 w-4/6">
                <img src={mainImg} alt={product.name} />
              </div>
              <div className="flex justify-center">
                <div className="flex justify-center items-center gap-2 w-36 sm:w-48">
                  {product.otherImgs.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={product.name}
                      onMouseOver={() => changeMainImg(img)}
                      onMouseOut={resetMainImg}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="flex flex-col justify-center items-center gap-6">
                <h1 className="text-xl text-center sm:text-3xl font-archivo">
                  {product.name}
                </h1>
                <div className="flex justify-center items-center gap-2">
                <h2 className="text-md text-zinc-500 sm:text-lg">
                    {product.category}'s shoes - 
                </h2>
                {product.isAvailable ? (
                    <h2 className="text-md sm:text-lg text-green-500">
                        Available
                    </h2>
                ) : (
                    <h2 className="text-md sm:text-lg text-red-500">
                        Unavailable
                    </h2>
                )}
                </div>
                <div className="relative flex items-center gap-4">
                  <select className="bg-blanc text-noir py-2 px-2 sm:px-4 rounded-lg text-xs" onChange={handleSize}>
                    <option value="0">Select a size</option>
                    {product.size.map((size, index) => (
                      <option key={index} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>

                  <button
                    type="button"
                    id="decrement-button"
                    onClick={decrementQuantity}
                    className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                  >
                    <svg
                      className="w-2.5 h-2.5 text-gray-900 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 2"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 1h16"
                      />
                    </svg>
                  </button>
                  <input
                    type="text"
                    id="counter-input"
                    className="flex-shrink-0 text-gray-900 dark:text-noir border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center"
                    placeholder=""
                    value={quantity}
                    readOnly
                  />
                  <button
                    type="button"
                    id="increment-button"
                    onClick={incrementQuantity}
                    className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                  >
                    <svg
                      className="w-2.5 h-2.5 text-gray-900 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 1v16M1 9h16"
                      />
                    </svg>
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-center w-56 sm:w-4/6 font-alata">
                  {product.description}
                </p>
                <div className="flex justify-center items-center gap-6">
                  <p className="text-xl font-alata">{product.price}$</p>
                  {product.isAvailable ? (
                    <button className="bg-noir text-blanc py-2 px-2 sm:px-4 rounded-lg text-xs hover:bg-zinc-700">
                      ADD TO CART
                    </button>
                    ) : (
                    <button className="bg-zinc-500 text-blanc py-2 px-2 sm:px-4 rounded-lg text-xs line-through" disabled>
                      ADD TO CART
                    </button>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
