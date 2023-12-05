import React, { useRef } from "react";
import styled from "styled-components";
import homePageimg from "../Assets/homepage.png";
import Navbar from "../Components/Global/Navbar";
import Footer from "../Components/Global/Footer";
function Services() {

  const bodyRef = useRef(null);

  const handleButtonClick = () => {
    bodyRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      image: "",
      name: "Web Development",
      price: "9,999",
      description: [
        "SE Optimized",
        "Free Hosting",
        "Free Domain",
        "Responsive Website",
        "Personalized Design",
        "Static and dynamic website",
        "Maintenance",
      ],
    },
    {
      image: "",
      name: "App Development",
      price: "9,999",
      description: [
        "SE Optimized",
        "Android and iOs",
        "Security embedded",
        "Customized Designs",
        "Publishing on App stores",
        "Personalized Consoles",
        "Maintenance",
      ],
    },
    {
      image: "",
      name: "Social Boosting",
      price: "_",
      description: [
        "Poster Making",
        "Banner Making",
        "Customized Designing",
        "24/7 Solution Crafting",
        "Advertising the business",
        "Social Media Post Designing",
        "FnF Discussions"
      ],
    },
  ];

  const vision = [
    {
      heading: "eCommerce Dev",
      description: "eCommerce Excellence, Surging Sales!",
      price: "16,999",
    },
    {
      heading: "Portfolio Website",
      description: "Crafting Your Story, One Click at a Time!",
      price: "4,999",
    },
    {
      heading: "SE Optimization",
      description: "SEO Excellence, Your Digital Edge!",
      price: "1,499",
    },
    {
      heading: "Logo Making",
      description: "Designing logo, branding success!",
      price: "2,499",
    },
    {
      heading: "Maintenance",
      description: "Keeping Your Online Presence Pristine!",
      price: "299",
    },
    {
      heading: "Post Making",
      description: "Setting Marketing Ablaze with Brilliance!",
      price: "14,999",
    },
  ];

  return (
    <MainContent>
      <Navbar />

      <div className="top-body">
        <div className="content">
          <div className="left">
            <h1 className="heading" style={{ color: "white" }}>

              Unlock the potential of your dreams with <span style={{ color: "#D5AE5F" }}>Exponance's</span> exceptional services.
            </h1>
            <p className="description" style={{ color: "white", fontWeight: "200" }}>
              Exponance is here to support you on your journey to success. With a focus on innovation,
              creativity, and client satisfaction, we bring your dreams to life through our comprehensive range of services.
            </p>
            <div>
              <button className="cssbuttons-io-button" onClick={handleButtonClick}>
                Get started
                <div className="icon">
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div className="right">
            <img
              className="image-home"
              src={homePageimg}
              alt=""
            />
          </div>
        </div>
      </div>


      <div style={{ height: "auto" }} id="body" ref={bodyRef}>
        <div
          style={{
            alignContent: "center",
            textAlign: "center",
            paddingBottom: "25px",
          }}
        >
          <h1
            style={{ fontSize: "4rem", fontWeight: "600", color: "#ad7e3d", marginBottom: "2rem" }}
          >
            Boost Your Business
          </h1>
        </div>

        <div className="mid-body">
          <div className="card-body">
            {services.map((service, index) => (
              <div
                key={index}
                className="UpperCardArea mb-4 max-w-custom mr-6  bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700"
                style={{ width: "300px" }}
              >
                <a href="#">
                  <img
                    className="rounded-t-lg h-23 object-cover w-full"
                    src={service.image}
                    alt=""
                  />
                </a>

                <div className="p-4" >
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {service.name}
                    </h5>
                    <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" style={{ marginBottom: "15px" }}>
                      ₹{service.price}
                    </h6>
                  </a>
                  <p className="mb-4 font-normal text-gray-700 dark:text-gray-400" style={{ paddingLeft: "20px" }}>
                    {service.description && (
                      <ul style={{ listStyleType: "disc" }}>
                        {service.description.map((desc, i) => (
                          <li className="list" key={i}>{desc}</li>
                        ))}
                      </ul>
                    )}
                  </p>

                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            alignContent: "center",
            textAlign: "center",
            paddingTop: "30px",
            paddingBottom: "25px",
          }}
        >
          {/* <h1

            style={{ fontSize: "4rem", fontWeight: "600", color: "#D5AE5F" }}
          >
            Our Grand Vision
          </h1> */}
        </div>

        <div className="lower-body">
          <div className="card-body">
              {vision.map((vision, index) => (
                <div
                  key={index}
                  className=" lowerCardArea mb-4 max-w-custom mr-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition duration-300 ease-in-out"
                  style={{ marginBottom: "20px" }}
                >
                  <div className="p-1 mt-4" style={{textAlign:"center"}}>
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {vision.heading}
                      </h5>
                      <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Starts @ ₹{vision.price}/m
                      </h6>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
                      {vision.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    
    </MainContent>
  );
}

const MainContent = styled.div`
  background-color: rgb(32, 30, 30);
  height: auto;
  .top-body {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .content {
    height: 92vh;
    display: flex;
    width: 70%;
  }
  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
  }
  .right {
    display: flex;
    align-items: center;
    width: 50%;
  }
  .heading {
    font-size: 3rem;
    font-weight: 700;
    line-height: 5rem;
    padding-bottom: 15px;
  }
  .description {
    padding-bottom: 20px;
  }
  .mid-body {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .lower-body {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 20px;
  }
  .card-body {
    width: 70%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .cssbuttons-io-button {
    background: #fff;
    color: #000;
    font-family: inherit;
    padding: 0.35em;
    padding-left: 1.2em;
    font-size: 17px;
    font-weight: 500;
    border-radius: 0.9em;
    border: none;
    letter-spacing: 0.05em;
    display: flex;
    align-items: center;
    box-shadow: inset 0 0 1.6em -0.6em #9a6e32;
    overflow: hidden;
    position: relative;
    height: 2.8em;
    padding-right: 3.3em;
    cursor: pointer;
  }
  .cssbuttons-io-button .icon {
    background: white;
    margin-left: 1em;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.2em;
    width: 2.2em;
    border-radius: 0.7em;
    box-shadow: 0.1em 0.1em 0.6em 0.2em #7b52b9;
    right: 0.3em;
    transition: all 0.3s;
  }
  .cssbuttons-io-button:hover .icon {
    width: calc(100% - 0.6em);
  }
  .cssbuttons-io-button .icon svg {
    width: 1.1em;
    transition: transform 0.3s;
    color: #7b52b9;
  }
  .cssbuttons-io-button:hover .icon svg {
    transform: translateX(0.1em);
  }
  .cssbuttons-io-button:active .icon {
    transform: scale(0.95);
  }

  .lowerCardArea{
    width: 400px;
    border-radius: 20px;
    height:9rem;
    transition: box-shadow 0.3s, transform 0.3s; 
}

.lowerCardArea:hover {
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.7); 
  transform: translateY(-7px); 
}

  .UpperCardArea{
    border-radius: 30px;
    transition: box-shadow 0.3s, transform 0.3s; 
  }
  .UpperCardArea:hover {
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.7); 
  transform: translateY(-7px); 
}
.list{

}

  @media (max-width: 991px) {
    .content {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .left {
      width: 100%;
    }

    .right {
      width: 0;
      overflow: hidden;
    }

    .image-home {
      display: none;
    }
    .heading {
    font-size: 4rem;
    font-weight: 800;
    line-height: 5rem;
    padding-bottom: 15px;
  }
  .card-body {
    justify-content: center;
  }
  .lowerCardArea{
    width: 322px;
  }
  }
  @media (max-width: 820px) {
    .card-body {
    justify-content: center;
  }
  .lowerCardArea{
    width: 261px;
  }
}
@media only screen and (max-width: 480px) {
  .heading {
    font-size: 3rem;
    line-height: 3.5rem;
  }

}
`;

export default Services;
