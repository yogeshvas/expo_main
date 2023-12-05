import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Layout from "./Components/Global/Layout";
import "./index.css";

//Pages
import { ParallaxProvider } from "react-scroll-parallax";
import NotFound from "./Pages/404";
import Careers from "./Pages/Careers";
import Home from "./Pages/Home";
import EL_section1 from "./Pages/expoLearn/EL_section1";

import Features from "./Pages/Features";
import Reviews from "./Pages/Reviews";

import About from "./Pages/About/About";
import Contact from "./Pages/Contact";
import DescCollege from "./Pages/ProductDesc/DescCollege";
import DescFitness from "./Pages/ProductDesc/DescFitness copy";
import DescSchool from "./Pages/ProductDesc/DescSchool";
import ProductDesc from "./Pages/ProductDesc/ProductDesc";
import Software from "./Pages/Software";
import Works from "./Pages/Works/Works";
import Services from "./Pages/Services";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ParallaxProvider>
      <Router>
        {/* <Layout> */}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route path="*" element={<NotFound />} />
          {/* </Routes> */}
          {/* </Layout> */}
          {/* <Routes> */}
          <Route exact path="/softwares" element={<Software />} />
          <Route exact path="/college" element={<DescCollege />} />
          <Route exact path="/school" element={<DescSchool />} />
          <Route exact path="/fitness" element={<DescFitness />} />
          <Route exact path="/desc" element={<ProductDesc />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/works" element={<Works />} />
          <Route exact path="/careers" element={<Careers />} />
          <Route exact path="/features" element={<Features />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/reviews" element={<Reviews />} />
          <Route exact path="/expoLearn" element={<EL_section1 />} />
          <Route exact path="/services" element={<Services />} />
        </Routes>
      </Router>
    </ParallaxProvider>
  </React.StrictMode>
);
