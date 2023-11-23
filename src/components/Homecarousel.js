import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { Truck, PercentCircle, PackageCheck, HelpingHand} from "lucide-react";

import React from 'react'

export default function Homecarousel() {
  return (
    <div>
        <section className="flex flex-col items-center justify-center w-screen text-noir font-archivo py-12">
              <Splide
                className="w-screen flex items-center py-6 justify-center border-y-4 border-noir uppercase"
                options={{
                  type: "loop",
                  drag: "free",
                  arrows: false,
                  pagination: false,
                  autoScroll: {
                    pauseOnHover: false,
                    pauseOnFocus: false,
                    rewind: false,
                    speed: 1,
                  },
                }}
                extensions={{ AutoScroll }}
              >
                <SplideSlide className="w-screen max-w-xl max-h-lg font-horizonbig ">
                  <div className="flex items-center justify-center">
                    <div className="flex items-center splide__slide__content ml-4 sm:ml-2 gap-1">
                      <h3 className="splide__slide__title text-2xl sm:text-4xl">
                        free delivery!
                      </h3>
                      <Truck size="44"/>
                    </div>
                  </div>
                </SplideSlide>


                <SplideSlide className="w-screen max-w-xl max-h-lg font-horizonbig ">
                  <div className="flex items-center justify-center">
                    <div className="flex items-center splide__slide__content ml-4 sm:ml-2 gap-1">
                      <h3 className="splide__slide__title text-2xl sm:text-4xl">
                        ongoing sales!
                      </h3>
                      <PercentCircle size="44"/>
                    </div>
                  </div>
                </SplideSlide>


                <SplideSlide className="w-screen max-w-xl max-h-lg font-horizonbig ">
                  <div className="flex items-center justify-center">
                    <div className="flex items-center splide__slide__content ml-4 sm:ml-2 gap-1">
                      <h3 className="splide__slide__title text-2xl sm:text-4xl">
                        huge stocks!
                      </h3>
                      <PackageCheck size="44"/>
                    </div>
                  </div>
                </SplideSlide>


                <SplideSlide className="w-screen max-w-xl max-h-lg font-horizonbig ">
                  <div className="flex items-center justify-center">
                    <div className="flex items-center splide__slide__content ml-4 sm:ml-2 gap-1">
                      <h3 className="splide__slide__title text-2xl sm:text-4xl">
                        24/7 support!
                      </h3>
                      <HelpingHand size="44"/>
                    </div>
                  </div>
                </SplideSlide>

              </Splide>
            </section>
    </div>
  )
}
