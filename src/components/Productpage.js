import { items } from "./AllData";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Productpage() {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const [product, setProduct] = useState(null);
  const [mainImg, setMainImg] = useState(null);

  useEffect(() => {
    const filteredProduct = items.filter((item) => item.id === productId);
    setProduct(filteredProduct[0]);
    setMainImg(filteredProduct[0].img);
  }, [productId]);

  // Change big image on hover on small images
  const changeMainImg = (img) => {
    setMainImg(img);
  };

  // Reset to original image when mouse leaves small image
  const resetMainImg = () => {
    setMainImg(product.img);
  };

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
          <div className="flex flex-col sm:flex-row">
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
                <h1 className="text-xl text-center sm:text-3xl font-archivo">{product.name}</h1>
                <select className="bg-blanc text-noir py-2 px-2 sm:px-4 rounded-lg text-xs">
                    <option value="0">Select a size</option>
                    {product.size.map((size, index) => (
                        <option key={index} value={size}>
                        {size}
                        </option>
                    ))}
                </select>
                
                <p className="text-xs sm:text-sm text-center w-56 sm:w-4/6 font-archivo">{product.description}</p>
                <div className="flex justify-center items-center gap-6">
                <p className="text-xl font-archivo">{product.price}$</p>
                <button className="bg-noir text-blanc py-2 px-2 sm:px-4 rounded-lg text-xs hover:bg-zinc-700">
                      ADD TO CART
                </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
