import emailjs from '@emailjs/browser';
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../Assets/Icons/logo.png";

const Contact = () => {


  useEffect(() => {
    const btn = document.querySelector("#btn");
    const btnText = document.querySelector("#btnText");

    if (btn) {
      btn.onclick = () => {
        btnText.innerHTML = "Thanks";
        btn.classList.add("active");
      };
    }
  }, []);

  const form = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_afn90so', 'template_7bzvn55', form.current, 'nZ_1Z3PxcBfBYr42P')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <MainContent>
      <div className="Contact">

        <nav className="w-4/5 mx-auto  px-4 sm:px-6 lg:px-8 lg:py-2">
          <div className="pt-[0.5rem] mx-auto px-4 sm:px-6 lg:px-8 lg:py-2">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <button onClick={() => navigate("/")}>
                    <img className="w-40" src={Logo} alt="Logo" />
                  </button>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="ml-4 flex items-center space-x-4">
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
                  onClick={toggleNavbar}
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


        <div className="outer-div">
          <div className="contact-body">
            <div className="contact-heading">
              <h1 className="h1">
                Contact <span style={{ color: "#ad7e3d" }}>Us</span>
              </h1>
            </div>
            <div className="contact-body-outer-div">
              <div className="contact-body">
                <div className="content">
                  <div className="left-side">
                    <div class="email details">
                      <i class="fas fa-envelope"></i>
                      <div class="topic">Email</div>
                      <div class="text-one">Exponance@gmail.com</div>
                    </div>

                  </div>
                  <div className="right-side">
                    <div className="topic-text">Send us a message</div>
                    <p className="para">
                      If you have any work for me or any types of queries related to
                      my tutorial, you can send me a message from here. It's my pleasure
                      to help you.
                    </p>
                    <form ref={form} onSubmit={sendEmail}>
                      <div className="input-box">
                        <input type="text" placeholder="Enter your name" name="from_name" />
                      </div>
                      <div className="input-box">
                        <input type="text" placeholder="Enter your email" name="from_email" />
                      </div>
                      <div className="input-box message-box">
                        <div className="message">
                          <input type="text" placeholder="Enter your Query" name="message" />
                        </div>
                      </div>
                      <div className="button">
                        <button id="btn" className="btnn">
                          <p id="btnText">Submit</p>
                          <div className="checkbox">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="svgg">
                              <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                            </svg>
                          </div>
                        </button>
                      </div>
                    </form>
                  </div>
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

  margin: 0;
  padding: 0;
  background-color: rgb(32, 30, 30);
  height: 100vh;
  overflow: hidden;
.message{
  height: 100px;
}
.para{
  
}
.outer-div{
  display: flex;
  justify-content: center;
  align-items: center;
}
.contact-body-outer-div{
  display: flex;
  justify-content: center;
  align-items: center;
}
.contact {
  height: 100vh;
  width: 80%;

}
.contact-heading{
  text-align: center;
  color: white
}

.h1{
  font-size: 6rem;
  font-weight: 600;
 
}
.contact-body{
  color: #fff;
   width: 78%;
  border-radius: 6px;
  padding: 20px 60px 30px 40px;
  box-shadow: 0 5px 10px rgba(255, 215, 0, 0.0);
}


.contact-body .content{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.contact-body .content .left-side{
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  position: relative;
}
.content .left-side::before{
  content: '';
  position: absolute;
  height: 70%;
  width: 2px;
  right: -15px;
  top: 50%;
  transform: translateY(-50%);
  background: #afafb6;
}
.content .left-side .details{
  margin: 14px;
  text-align: center;
}
.content .left-side .details i{
  font-size: 30px;
  color: #3e2093;
  margin-bottom: 10px;
}
.content .left-side .details .topic{
  font-size: 24px;
  font-weight: 500;
  color: #ad7e3d;
}
.content .left-side .details .text-one,
.content .left-side .details .text-two{
  font-size: 14px;
  color: #afafb6;
}
.contact-body .content .right-side{
  width: 75%;
  margin-left: 75px;
}
.content .right-side .topic-text{
  font-size: 30px;
  font-weight: 600;
  color: #ad7e3d;
  margin-bottom: 17px;
 text-align: center;
}
.right-side .input-box{
  height: 50px;
  width: 100%;
  margin: 12px 0;
}
.right-side .input-box input,
.right-side .input-box textarea{
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  color: rgb(32, 30, 30);
  background: #F0F1F8;
  border-radius: 6px;
  padding: 0 15px;
  resize: none;
}
.right-side .message-box{
  min-height: 110px;
}
.right-side .input-box textarea{
  padding-top: 6px;
}
.right-side .button{
  
  margin-top: 12px;
}
.right-side .button input[type="Submit"]{
 
  font-size: 20px;
  outline: none;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  background-color:#9A6E32;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 200px;
}
.button input[type="Submit"]:hover{
  background: #fff;
  color: #9A6E32;;
}
@media (max-width: 991px) {
  .h1{
    font-size: 6rem;
  }
  .para{
    margin-bottom: 15px;
  }
  .outer-div{
    height: auto;
    padding-top: 50px;
  }
  .contact-body{
    
    width: 90%;
    padding: 0px 00px 00px 0px ;
  }
  .contact-body .content .right-side{
   width: 75%;
   margin-left: 55px;
}
.right-side .button input[type="Submit"]{
  border-radius: 15px;
}
.px-4 {
padding-left: 0rem;
padding-right: 0rem;
}
}


@media (max-width: 820px) {
height: 130vh;
.h1{
    font-size: 3.5rem;
  }
  .contact-body{
    margin: 10px 0;

  }
  .contact-body .content{
    flex-direction: column-reverse;
  }
 .contact-body .content .left-side{
   width: 100%;
   flex-direction: row;
   margin-top: 40px;
   justify-content: center;
   flex-wrap: wrap;
 }
 .contact-body .content .left-side::before{
   display: none;
 }
 .contact-body .content .right-side{
   width: 100%;
   margin-left: 0;
 }}

 .circl{
  position: absolute;
  background-color:#9A6E32;
  width: 50rem;
  height: 50rem;
  border-radius: 50%;
  right: 0;
  bottom: -10;
  
  /* transform: translate(-30%, -40%); */
  
}



.btnn{
    width: 200px;
    height: 60px;
    border: none;
    outline: none;
    background: #2f2f2f;
    color: #fff;
    font-size: 22px;
    border-radius: 40px;
    text-align: center;
    box-shadow: 0 6px 20px -5px rgba(0,0,0,0.4);
    position: relative;
    overflow: hidden;
    cursor: pointer;
}

.checkbox{
    width: 80px;
    height: 80px;
    border-radius: 40px;
    box-shadow: 0 0 12px -2px rgba(0,0,0,0.5);
    position: absolute;
    top: 0;
    right: -40px;
    opacity: 0;
}

.checkbox .svgg{
    width: 40px;
    margin: 20px;
}

.svgg path{
    stroke-width: 3;
    stroke: #fff;
    stroke-dasharray: 34;
    stroke-dashoffset: 34;
    stroke-linecap: round;
}

.active{
    background: #9A6E32;
    transition: 1s;
}

.active .checkbox{
    right: 0;
    opacity: 1;
    transition: 1s;
}

.active p{
    margin-right: 125px;
    transition: 1s;
}

.active .svgg path{
    stroke-dashoffset: 0;
    transition: 1s;
    transition-delay: 1s;
}

`;


export default Contact;




