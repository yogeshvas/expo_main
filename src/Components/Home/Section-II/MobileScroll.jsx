import React, { useState } from "react";
import "./mobileScroll.css";
import ScreenText from "./ScreenText";

//Images
import Image1 from "../../../Assets/Images/Upper/Image1.gif";
import Image2 from "../../../Assets/Images/Upper/updateDShops.png";
import Image3 from "../../../Assets/Images/Upper/updatedFitness.png";
import Image4 from "../../../Assets/Images/Upper/updatedRestro.png";
import Image5 from "../../../Assets/Images/Upper/manymore.png";

const scrollData = [
  {
    heading: "Grow exponentially",
    description:
      "Exponance is a cloud-based finance management platform that is designed to simplify and streamline finance operations for businesses.",
    mobile_img: Image1,
  },

  {
    heading: "Shops of all sorts!",
    description:
      "With Exponance's user friendly finance management software for showrooms, small stores and small businesses, you can automate your financial processes.",
    mobile_img: Image2,
  },
  {
    heading: "Fitness sector, fitter than ever!",
    description:
      "With exponance, increase productivity, automate financial operations ,reduce costs and enhance your customer experience, all at one place.",
    mobile_img: Image3,
  },
  {
    heading: "Restraunts are best, when financially automated!",
    description:
      "Utilize Exponance to improve the financial administration of your restaurants. This user-friendly platform is easy to use and can help businesses save time and money, improve efficiency, and increase customer satisfaction.",
    mobile_img: Image4,
  },
  {
    heading: "Other sectors coming soon!",
    description: "Got something to say? Mail us, we're all ears !",
    mobile_img: Image5,
  },
];

const MobileScroll = () => {
  const [currentImg, setCurrentImg] = useState(0);
  return (
    <div className="mobile-scroll flex justify-center pb-5 max-w-screen-2xl md:flex-row flex-col z-10">
      <div className="mobile-mockup-wrapper non-mobile">
        <div className="mobile-mockup ">
          <div className="mobile-mockup-screen flex justify-center absolute-center">
            <img
              src={scrollData[currentImg].mobile_img}
              className="mobile-screen-img slide-in-right "
              alt="Mobile Screen"
              key={scrollData[currentImg].mobile_img}
            />
          </div>
        </div>
      </div>
      <div className="scroll-full-screen-wrapper">
        {scrollData.map((screen, i) => (
          <div className="scroll-full-screen">
            <ScreenText screen={screen} setCurrentImg={setCurrentImg} i={i} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileScroll;
