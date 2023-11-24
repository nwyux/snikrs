import { items } from "./AllData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function TrendingItems() {
  const [allItems, setAllItems] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("Brands");
  const [selectedPrice, setSelectedPrice] = useState("price");

    useEffect(() => {
        setAllItems("");
    }, []);


  function filterItems() {
    const filteredItems = items.filter((item) => {
      const titleMatch = item.name.toLowerCase().includes(allItems.toLowerCase());

      const brandMatch =
      selectedBrand === "Brands" ||
      item.brand.toLowerCase().includes(selectedBrand.toLowerCase());

      const isTrending = item.isTrending === true;
    return titleMatch && brandMatch && isTrending;

  });

  if (selectedPrice === "Higher") {
    filteredItems.sort((a, b) => new Date(b.price) - new Date(a.price));
  } else if (selectedPrice === "Lower") {
    filteredItems.sort((a, b) => new Date(a.price) - new Date(b.price));
  }
  
    return filteredItems;
  }

  function searchBar() {
    return (
      <div className="relative flex justify-center items-stretch mx-auto w-56 sm:w-96">
        <div className="flex absolute inset-y-0 left-0 items-center mb-3 ml-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-auto text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          className="py-2 px-5 mb-3 leading-tight focus:outline-none bg-blanc border border-noir text-noir text-sm rounded-lg block w-full pl-10 p-2.5 "
          id="grid-password"
          type="text"
          placeholder="Search..."
          value={allItems}
          onChange={(e) => setAllItems(e.target.value)}
        />
      </div>
    );
  }

  function displayItems() {
    const filteredItems = filterItems();

    if (filteredItems.length === 0) {
      return <p>No items found</p>;
    }

    if (filteredItems.length > 0) {
      return (
        <>
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center flex-wrap gap-6 py-6 max-w-3xl">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-center items-center"
                >
                  <div className="flex flex-col w-4/6 pb-4 sm:w-auto justify-center items-center border-2 border-noir rounded hover:bg-zinc-200">
                  <div className="flex justify-center text-blanc items-center w-full top-0 bg-noir py-2 font-alata">
                      TRENDING NOW 🔥
                    </div>
                    <Link
                      onClick={() => window.top(0, 0)}
                      to={`/sneakers/${item.id}`}
                      className="sm:w-80"
                    >
                      <img
                        src={item.img}
                        alt={item.name}
                        className=" mx-auto"
                      />
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
                      {item.isAvailable ? (
                    <h2 className="text-md sm:text-lg text-green-500">
                        Available
                    </h2>
                ) : (
                    <h2 className="text-md sm:text-lg text-red-500">
                        Unavailable
                    </h2>
                )}
                      <h2 className="text-md sm:text-lg">
                        {item.color} | {item.price}$
                      </h2>
                    </div>

                    <div className="flex justify-center items-center gap-2 py-2">
                      {item.isAvailable ? (
                        <button className="bg-noir text-blanc py-2 px-2 sm:px-4 rounded-lg text-xs hover:bg-zinc-700">
                          ADD TO CART
                        </button>
                      ) : (
                        <button
                          className="bg-zinc-500 text-blanc py-2 px-2 sm:px-4 rounded-lg text-xs line-through"
                          disabled
                        >
                          ADD TO CART
                        </button>
                      )}

                      {item.isAvailable ? (
                        <button className="border-2 border-noir hover:no-underline text-noir py-2 px-2 sm:px-4 rounded-lg text-xs transition-all duration-150 hover:bg-noir hover:text-blanc">
                          BUY NOW
                        </button>
                      ) : (
                        <button
                          className="border-2 border-noir text-noir py-2 px-2 sm:px-4 rounded-lg text-xs line-through"
                          disabled
                        >
                          BUY NOW
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      );
    }
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center">
      <h1 className="text-xl font-bold flex gap-2 font-alata underline py-4">
          Trending Sneakers!
        </h1>
        {searchBar()}
        <div className="flex justify-center align-items">
            <div className="flex justify-center text-center">
              <form className="flex gap-x-2">
                <select
                  className="focus:outline-none rounded-sm w-26 sm:w-56 mb-3 bg-blanc"
                  value={selectedPrice}
                  onChange={(e) => setSelectedPrice(e.target.value)}
                >
                  <option value="price" defaultValue="price">
                    Price
                  </option>
                  <option value="Higher">Higher to lower</option>
                  <option value="Lower">Lower to higher</option>
                </select>

                <select
                  className="focus:outline-none rounded-sm w-26 sm:w-56 mb-3 bg-blanc"
                  value={selectedBrand}
                  onChange={(e) => {
                    setSelectedBrand(e.target.value);
                  }}
                >
                  <option value="Brands" defaultValue="Brands">
                    Brands
                  </option>
                  <option value="Nike">Nike</option>
                  <option value="Adidas">Adidas</option>
                  <option value="New Balance">New Balance</option>
                </select>
              </form>
            </div>
          </div>
        {displayItems()}
      </div>
    </>
  );
}
