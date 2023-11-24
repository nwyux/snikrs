import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="flex justify-content items-center align-middle w-full static bottom-0 left-0 right-0 z-10 border-t-2 border-noir">
      <div className="flex px-4 sm:px-12 py-6 items-center justify-around sm:justify-between w-screen">
        <div className="flex flex-wrap sm:flex-nowrap w-44 sm:w-auto text-xs justify-center items-center align-middle gap-4">
          <Link
            to="/"
            className="text-noir font-archivo hover:underline"
          >
            Home
          </Link>
          <Link
            to="/sneakers"
            className="text-noir font-archivo hover:underline"
          >
            Sneakers
          </Link>
          <Link
            to="/promotions"
            className="text-noir font-archivo hover:underline"
          >
            Promotions
          </Link>
          <Link
            to="/trending"
            className="text-noir font-archivo hover:underline"
          >
            Trending
          </Link>
          <Link
            to="/cart"
            className="text-noir font-archivo hover:underline"
          >
            Cart
          </Link>
          <Link
            to="/contact"
            className="text-noir font-archivo hover:underline"
          >
            Contact us
          </Link>
        </div>

        <hr className="border-2 border-noir h-24 sm:hidden" />

        <div className="flex">
          <h1 className="text-noir font-archivo text-sm text-center">&copy; 2023 SNIKRS</h1>
        </div>
      </div>
    </div>
  );
}
