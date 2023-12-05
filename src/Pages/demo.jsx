import React, { useState } from 'react';
import { SliderData } from '../Data/demoData.js';
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='final'>
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Book a Demo!</h2>
              <div className="input-field">
                <i className="fas fa-user" />
                <input type="text" placeholder="Name" />
              </div>
              <div className="input-field">
                <i className="fa fa-envelope-o" aria-hidden="true" />
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fa fa-signal" aria-hidden="true" />
                <input type="text" placeholder="Mobile" />
              </div>
              <div className="input-field">
                <i className="fa fa-map-marker" aria-hidden="true" />
                <input type="text" placeholder="City" />
              </div>
              <input type="submit" defaultValue="Submit" className="btn solid" />
              <p className="social-text">
                We will reach you out soon with our demo.
              </p>
            </form>
          </div>
        </div>
      </div>
      <section className='mobile'>
        <img src='.\Mobile.png' />
      </section>
      <section className='demo'>
        <BsArrowLeftCircle className='left-arrow' onClick={prevSlide} />
        <BsArrowRightCircle className='right-arrow' onClick={nextSlide} />
        {/* <img src='.\Mobile.png'/>  */}
        {SliderData.map((slide, index) => {
          return (
            <div className='form'>
              <div
                className={index === current ? 'slide active' : 'slide'}
                key={index}
              >
                {index === current && (
                  <img src={slide.image} alt='travel' className='image' />
                )}
              </div></div>

          );
        })}
      </section>
    </section>

  );
};

export default ImageSlider;