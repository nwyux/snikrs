import { items } from "./AllData";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { PackagePlus } from "lucide-react";

export default function ProductItem() {

  const filterItems = items.filter((item) => item.isNew === true);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-xl font-bold py-2 flex gap-2 underline">NEW SNEAKERS <PackagePlus /></h1>
        <Splide
          className="w-screen sm:w-4/6 flex items-center py-6 justify-center"
          options={{
            type: "loop",
            focus: "center",
            pagination: true,
            paginationKeyboard: true,
            paginationDirection: "ltr",
            perPage: 3,
            breakpoints: {
              1024: {
                perPage: 1,
              },
              1439: {
                perPage: 2,
              },
            },
          }}
        >
          {filterItems.map((item) => (
            <SplideSlide key={item.id} className="w-ful  sm:max-w-none max-h-lg font-horizonbig">
              <div className="flex justify-center items-center">
                <div className="flex flex-col w-4/6 sm:w-auto justify-center items-center border-2 border-noir rounded">
                  <Link onClick={() => window.top(0,0)} to={`/sneakers/${item.id}`} className="sm:w-80">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="h-full mx-auto"
                    />
                  </Link>

                  <div className="flex flex-col justify-center items-center">
                    <h1 className="text-sm text-center sm:text-xl font-bold">{item.name}</h1>
                    <h2 className="text-md text-zinc-500 sm:text-lg">
                      {item.category}'s shoes
                    </h2>
                    <h2 className="text-md sm:text-lg">
                      {item.color} | {item.price}$
                    </h2>
                  </div>

                  <div className="flex justify-center items-center gap-2 py-2">
                    <button className="bg-noir text-blanc py-2 px-2 sm:px-4 rounded-lg text-xs">
                      ADD TO CART
                    </button>
                    <button className="border-2 border-noir text-noir py-2 px-2 sm:px-4 rounded-lg text-xs transition-all duration-150 hover:bg-noir hover:text-blanc">
                      BUY NOW
                    </button>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
}
