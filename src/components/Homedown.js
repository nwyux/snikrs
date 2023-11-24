import sneakers2 from "../img/Home/sneakers2.png";
import { Goal, Medal, Recycle } from "lucide-react";

export default function Homedown() {
  return (
    <div id="about" className="h-full flex flex-col justify-center mt-16 py-16 sm:px-12  border-t-2 border-noir">
      <div className="homeDown font-archivo border-y-2 sm:border-4 mx-auto border-noir sm:rounded-lg sm:w-4/5 h-4/5 py-6 sm:py-12 px-2 sm:px-6 md:px-12 lg:px-24 sm:flex-row flex flex-col-reverse justify-center items-center">
        <div className="flex items-center max-w-xl">
          <img src={sneakers2} alt="Sneakers Clipart" className="" />
        </div>
        <div className="flex flex-col justify-center ">
          <h1 className="text-5xl py-4 text-center sm:text-right md:text-3xl lg:text-4xl xl:text-6xl max-w-sm text-blanc">
            Who are we?
          </h1>
          <h2 className="text-xl text-center py-6 sm:text-right uppercase sm:text-md md:text-lg lg:text-2xl text-blanc">
            enthusiasts <br /> professionals <br /> hard workers
          </h2>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center py-12 gap-14">
        <div className="aboutCard flex flex-col justify-center px-4 py-2 items-center border-2 border-noir rounded max-w-xs sm:max-w-none">
          <h1 className="text-xl gap-2 font-archivo flex items-center py-4 text-center sm:text-right md:text-xl lg:text-2xl xl:text-4xl text-noir">
            Our Mission <Goal size="34" />
          </h1>
          <hr className=" border-noir w-4/5" />
          <ul className="font-alata py-6">
            <li className="text-sm py-2">Provide the best sneakers to you</li>
            <li className="text-sm py-2">
              Offer the best prices on the market
            </li>
            <li className="text-sm py-2">Provide the best customer service</li>
            <li className="text-sm py-2">Offer the best delivery service</li>
          </ul>
        </div>

        <div className="flex flex-col justify-center px-4 py-2 items-center border-2 border-noir rounded max-w-xs sm:max-w-none">
          <h1 className="text-xl gap-2 font-archivo flex items-center py-4 text-center sm:text-right md:text-xl lg:text-2xl xl:text-4xl text-noir">
            Number One <Medal size="34" />
          </h1>
          <hr className=" border-noir w-4/5" />
          <ul className="font-alata py-6">
            <li className="text-sm py-2">SNIKRS is a guarantee of quality</li>
            <li className="text-sm py-2">Safe and anti reseller policy</li>
            <li className="text-sm py-2">Collaborating with brands</li>
            <li className="text-sm py-2">Efficiency and speed of execution</li>
          </ul>
        </div>

        <div className="flex flex-col justify-center px-4 py-2 items-center border-2 border-noir rounded max-w-xs sm:max-w-none">
          <h1 className="text-xl gap-2 font-archivo flex items-center py-4 text-center sm:text-right md:text-xl lg:text-2xl xl:text-4xl text-noir">
            Eco-friendly <Recycle size="34" />
          </h1>
          <hr className=" border-noir w-4/5" />
          <ul className="font-alata py-6">
            <li className="text-sm py-2">
              Promoting eco-friendly sneakers
            </li>
            <li className="text-sm py-2">
              Sustainable and ethical practices
            </li>
            <li className="text-sm py-2">
              Reducing environmental impact
            </li>
            <li className="text-sm py-2">
              Encouraging customers to recycle
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
