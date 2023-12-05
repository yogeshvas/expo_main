import React, { useState } from "react";
// import "./styles.css";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../Assets/Icons/logo.png";

// import Navbar from '../Components/Global/Navbar-Carrer'
const About = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MainContent>
      <div className="circle"></div>
      <div className="cntr">
        <nav className="  w-5/5 mx-auto my-0 px-4 sm:px-6 lg:px-8 lg:py-2">
          <div className="pt-[0.5rem] mx-auto px-4 sm:px-6 lg:px-8 lg:py-4">
            <div className=" nav-logo flex items-center justify-between h-16">
              <div className=" flex items-center">
                <div className="flex-shrink-0">
                  <button onClick={() => navigate("/")}>
                    <img className="w-40" src={Logo} alt="Logo" />
                  </button>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="ml-4 flex items-center space-x-4">
                  <div className="relative inline-block text-left">
                    <button
                      onClick={() => navigate("/college")}
                      type="button"
                      className="text-gray-300 tracking-[1px] hover:bg-gray-700 hover:text-white px-3 py-3 rounded-full text-sm font-medium transition-all"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      Softwares
                    </button>
                  </div>

                  <button
                    onClick={() => navigate("/expoLearn")}
                    className="text-gray-300 tracking-[1px] hover:bg-gray-700 hover:text-white px-3 py-3 rounded-full text-sm font-medium transition-all"
                  >
                    Expo Learn
                  </button>

                  {/* <button
                    onClick={() => navigate("/reviews")}
                    className="text-gray-300 tracking-[1px] hover:bg-gray-700 hover:text-white px-3 py-3 rounded-full text-sm font-medium transition-all"
                  >
                    Reviews
                  </button> */}
                </div>
              </div>
              <div className="-mr-2 flex lg:hidden">
                <button
                  type="button"
                  className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </nav>

        <div className="about-body">
          <div className="dta">
            <div className="headd">
              <h1 className="h1">
                We are <span style={{ color: "#DDCB7E" }}>Exponance</span>
              </h1>
            </div>
            <div style={{ fontFamily: "Poppins" }} className="dtacontent">
              <p className="para" style={{ textAlign: "left" }}>
                Teamwork Sparks Brilliance: At Exponance, we believe that
                collaboration is the key to unlocking brilliance. Our team is a
                dynamic blend of engineers who bring their unique backgrounds
                and skills to the table. We're like puzzle-solving pals, sharing
                ideas and perspectives to create solutions that are smarter and
                more innovative. By working together, we harness the power of
                collective wisdom and transform challenges into opportunities.
              </p>
              <p style={{ paddingTop: "30px", textAlign: "left" }}>
                Customers Are Our Heroes: Our compass always points toward
                making our customers happy. We thrive on understanding your
                needs, challenges, and aspirations. Listening and learning from
                you is at the heart of what we do. Armed with insights, we
                engineer solutions that make your life easier and your business
                more efficient. Our mission revolves around being your partners
                in success, and your satisfaction is the ultimate validation of
                our work.
              </p>
              <p style={{ paddingTop: "30px", textAlign: "left" }}>
                Learning and Growing Together: At Exponance, growth is our
                constant companion. We're like a group of friends playing our
                favorite video game, always leveling up. We foster an
                environment where learning is celebrated, and sharing knowledge
                is second nature. Our engineers support each other's journeys,
                whether it's mastering new technologies or refining
                problem-solving skills. The goal is simple: for every member of
                our team to become the best version of themselves while
                collectively creating exceptional solutions.
              </p>
              <p style={{ paddingTop: "30px", textAlign: "left" }}>
                Adventures in Innovation: Our team embodies the spirit of
                innovation, exploring uncharted territories in the digital
                realm. Think of us as modern-day explorers, navigating the
                landscape of technology to bring automation to your doorstep.
                Just as adventurers follow maps to uncover hidden treasures, we
                navigate the intricacies of cutting-edge tech to craft solutions
                that simplify and enhance your operations. Our journey is fueled
                by the thrill of turning ideas into reality and redefining
                possibilities.
              </p>
            </div>
          </div>
        </div>

        <div className="team-body">
          <div className="dtaa">
            <div className="headdd">
              <h1 className="h2">
                Introducing our <span style={{ color: "#DDCB7E" }}>Team</span>
              </h1>
            </div>
            <div className="dtacontentt">
              <div class="profile-card">
                <div class="image">
                  <img
                    src="https://media.licdn.com/dms/image/D4D03AQFSckTf5ijiUQ/profile-displayphoto-shrink_400_400/0/1688635527186?e=1695254400&v=beta&t=adt4TWr24SMdOYKSXsT7jZUuid3Pkk0A_xcDmNZUnQM"
                    alt=""
                    class="profile-pic"
                  />
                </div>
                <div class="data">
                  <h2>Agam Raj</h2>
                  <span style={{ fontSize: "18px" }}>Founder and CEO</span>
                </div>
              </div>
              <div class="profile-card">
                <div class="image">
                  <img
                    src="https://media.licdn.com/dms/image/C4E03AQHwNZHUhjd6-Q/profile-displayphoto-shrink_400_400/0/1623054551272?e=1695254400&v=beta&t=nYvUr-0CBuEbv1t-rMDTwDUf0hgjsEiaUPAmrNx92pM"
                    alt=""
                    class="profile-pic"
                  />
                </div>
                <div class="data">
                  <h2>Mayank Aryaman</h2>
                  <span style={{ fontSize: "18px" }}>Founder and CEO</span>
                </div>
              </div>
              <div class="profile-card">
                <div class="image">
                  <img
                    src="https://media.licdn.com/dms/image/C4E03AQHwNZHUhjd6-Q/profile-displayphoto-shrink_400_400/0/1623054551272?e=1695254400&v=beta&t=nYvUr-0CBuEbv1t-rMDTwDUf0hgjsEiaUPAmrNx92pM"
                    alt=""
                    class="profile-pic"
                  />
                </div>
                <div class="data">
                  <h2>Srishti </h2>
                  <span style={{ fontSize: "18px" }}>Founder and CEO</span>
                </div>
              </div>
              <div class="profile-card">
                <div class="image">
                  <img
                    src="https://media.licdn.com/dms/image/C4E03AQHwNZHUhjd6-Q/profile-displayphoto-shrink_400_400/0/1623054551272?e=1695254400&v=beta&t=nYvUr-0CBuEbv1t-rMDTwDUf0hgjsEiaUPAmrNx92pM"
                    alt=""
                    class="profile-pic"
                  />
                </div>
                <div class="data">
                  <h2>Srishti </h2>
                  <span style={{ fontSize: "18px" }}>Founder and CEO</span>
                </div>
              </div>
              <div class="profile-card">
                <div class="image">
                  <img
                    src="https://media.licdn.com/dms/image/C4E03AQHwNZHUhjd6-Q/profile-displayphoto-shrink_400_400/0/1623054551272?e=1695254400&v=beta&t=nYvUr-0CBuEbv1t-rMDTwDUf0hgjsEiaUPAmrNx92pM"
                    alt=""
                    class="profile-pic"
                  />
                </div>
                <div class="data">
                  <h2>xyz</h2>
                  <span style={{ fontSize: "18px" }}>Team Lead</span>
                </div>
              </div>
              <div class="profile-card">
                <div class="image">
                  <img
                    src="https://media.licdn.com/dms/image/D4D03AQFSckTf5ijiUQ/profile-displayphoto-shrink_400_400/0/1688635527186?e=1695254400&v=beta&t=adt4TWr24SMdOYKSXsT7jZUuid3Pkk0A_xcDmNZUnQM"
                    alt=""
                    class="profile-pic"
                  />
                </div>
                <div class="data">
                  <h2>xyz</h2>
                  <span style={{ fontSize: "18px" }}>Team Lead</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainContent>
  );
};

const MainContent = styled.div`
  background-color: rgb(32, 30, 30);

  .cntr {
    width: 80%;
    margin-left: 10%;
  }
  .nav-logo {
    padding-left: 50px;
  }
  .circle {
    position: absolute;

    background-color: #9a6e32;
    width: 25rem;
    height: 25rem;
    border-radius: 50%;
    transform: translate(-30%, -40%);
  }
  .about-body {
    margin-top: 81px;
    margin-bottom: 88px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .dta {
    width: 80%;
    color: azure;
  }
  .headd {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }
  .h1 {
    font-weight: 600;
    font-size: 7rem;
  }

  .dtacontent {
    /* line-height: 30px; */
    font-size: 1.5rem;
  }
  .team-body {
    /* margin-top: 81px; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .dtaa {
    width: 80%;
    color: azure;
  }
  .headdd {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }
  .h2 {
    font-weight: 600;
    font-size: 6rem;
  }

  .dtacontentt {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
  }
  .profile-card {
    max-width: 300px;
    width: 100%;
    border-radius: 25px;
    padding: 30px;
    border: 1px solid #ffffff40;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.4);
    margin-bottom: 20px;
  }

  .image {
    position: relative;
    margin-left: 3rem;
    height: 150px;
    width: 150px;
  }

  .image .profile-pic {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.4);
  }

  .data {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
  }

  .data h2 {
    font-size: 25px;
    font-weight: 600;
  }

  @media (max-width: 991px) {
    .about-body {
      padding-left: 20px;
    }
    .circle {
      display: none;
    }
    .h1 {
      font-weight: 600;
      font-size: 4rem;
    }
    .contact-body {
      margin-top: 20px;
      margin-bottom: 20px;
    }
    .dta {
      width: 100%;
    }
    .h2 {
      font-weight: 600;
      font-size: 4rem;
    }
    .nav-logo {
      padding-left: 0px;
    }
    .para {
      font-size: 20px;
    }
    .about-body {
      margin-top: 20px;
    }
  }
`;

export default About;
