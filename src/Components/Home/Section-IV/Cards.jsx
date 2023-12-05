import React from "react";

//Images
import Image1 from "../../../Assets/Images/Cards/firstCard.png";
import Image2 from "../../../Assets/Images/Cards/secondCard.png";
import Image3 from "../../../Assets/Images/Cards/thirdCard.png";

const Cards = () => {
  return (
    <div className="mb-12 ">
      <h2 className="parallax-heading text-3xl md:text-4xl lg:text-5xl lg:m-5 font-bold text-secoundary md:pl-10 md:pr-10 md:pb-5 pb-7 md:pt-5 pl-4 pr-4 pt-3 flex justify-center cards-heading text-white">
        Few more features
      </h2>
      <div class="flex min-h-fit items-center justify-center bg-neutral-800">
        <div class="grid grid-cols-1 gap-[5rem] md:gap-[11rem] md:grid-cols-2 lg:grid-cols-3">
          <div class="rounded-[35px] group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div class="h-96 w-[21rem]">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={Image1}
                alt=""
              />
            </div>
            <div class="absolute inset-0 bg-black/70 lg:bg-gradient-to-b lg:from-transparent lg:via-transparent lg:to-black lg:group-hover:from-black/70 lg:group-hover:via-black/60 lg:group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex lg:translate-y-[45%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white mb-5">
                Scaling? Not a problem!
              </h1>
              <p class="mb-3 text-lg italic text-white lg:opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Add as many branches as you want, we've got your back.
              </p>
            </div>
          </div>
          <div class="rounded-[35px] group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div class="h-96 w-[21rem]">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={Image2}
                alt=""
              />
            </div>
            <div class="absolute inset-0 bg-black/70 lg:bg-gradient-to-b lg:from-transparent lg:via-transparent lg:to-black lg:group-hover:from-black/70 lg:group-hover:via-black/60 lg:group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex lg:translate-y-[45%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white mb-5">
                Privacy? Ofcourse!
              </h1>
              <p class="mb-3 text-lg italic text-white lg:opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Secured database, that no one but you can access.
              </p>
            </div>
          </div>
          <div class="rounded-[35px] group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div class="h-96 w-[21rem]">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={Image3}
                alt=""
              />
            </div>
            <div class="absolute inset-0 bg-black/70 lg:bg-gradient-to-b lg:from-transparentlg:via-transparent lg:to-black lg:group-hover:from-black/70 lg:group-hover:via-black/60 lg:group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex lg:translate-y-[45%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white mb-5">
                Track the trails
              </h1>
              <p class="mb-3 text-lg italic text-white lg:opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Reports and recommendations based on customer activities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
