import { items } from "./AllData";
import { Link } from "react-router-dom";
import { PackagePlus } from "lucide-react";

export default function ProductItem() {
  const filterItems = items.filter((item) => item.isAvailable === true);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-xl font-bold py-2 flex gap-2 underline">
          Every Sneakers We Have!
        </h1>
        <div className="flex justify-center items-center flex-wrap gap-6 max-w-3xl">
          {filterItems.map((item) => (
            <div className="flex justify-center items-center ">
              <div className="flex flex-col w-4/6 sm:w-auto justify-center items-center border-2 border-noir rounded hover:bg-zinc-200">
                <Link
                  onClick={() => window.top(0, 0)}
                  to={`/sneakers/${item.id}`}
                  className="sm:w-80"
                >
                  <img src={item.img} alt={item.name} className=" mx-auto" />
                </Link>

                <div className="flex flex-col justify-center items-center">
                  <Link
                    onClick={() => window.top(0, 0)}
                    to={`/sneakers/${item.id}`}
                    className="sm:w-80"
                  >
                    <h1 className="text-sm text-center sm:text-xl font-bold hover:underline">
                      {item.name}
                    </h1>
                  </Link>
                  <h2 className="text-md text-zinc-500 sm:text-lg">
                    {item.category}'s shoes
                  </h2>
                  <h2 className="text-md sm:text-lg">
                    {item.color} | {item.price}$
                  </h2>
                </div>

                <div className="flex justify-center items-center gap-2 py-2">
                  <button className="bg-noir text-blanc py-2 px-2 sm:px-4 rounded-lg text-xs hover:bg-zinc-700">
                    ADD TO CART
                  </button>
                  <button className="border-2 border-noir hover:no-underline text-noir py-2 px-2 sm:px-4 rounded-lg text-xs transition-all duration-150 hover:bg-noir hover:text-blanc">
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
