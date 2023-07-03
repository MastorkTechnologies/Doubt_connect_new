import React, { Fragment, useState, useRef, useEffect } from "react";
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Blogs from "./Components/Blog/Blogs";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/AboutUs/AboutUs";
import ForTutors from "./Components/ForTutors/ForTutors";
import Achievements from "./Components/AboutUs/Achievements";
// import DcForSchools from './Components/DcForSchools/DcForSchools';
import ForStudents from "./ForStudents/ForStudents";
import Support from "./Components/Home/Support";
import ReactGA from "react-ga";
import BlogPost from "./Components/Blog/Blog";
import Privacy from "./Components/Common/Privacy";

const TRACKING_ID = "G-Z5CXQD446E";

ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Fragment>
              <Header />
              <ForStudents />
              <Footer />
            </Fragment>
          }
        />
        <Route
          path="/about-us"
          element={
            <Fragment>
              <Header />
              <AboutUs />
              <Footer />
            </Fragment>
          }
        />
        <Route
          path="/blogs"
          element={
            <Fragment>
              <Header />
              <Blogs />
              <Footer />
            </Fragment>
          }
        />
        <Route
          path="/:category/:title"
          element={
            <Fragment>
              <Header />
              <BlogPost />
              <Footer />
            </Fragment>
          }
        />
        <Route
          path="/dc-for-schools"
          element={
            <Fragment>
              <Header />
              <Home />
              <Footer />
            </Fragment>
          }
        />
        <Route
          path="/for-tutors"
          element={
            <Fragment>
              <Header />
              <ForTutors />
              <Footer />
            </Fragment>
          }
        />
        <Route
          path="/achievements"
          element={
            <Fragment>
              <Header />
              <Achievements />
              <Footer />
            </Fragment>
          }
        />
        <Route
          path="/support"
          element={
            <Fragment>
              <Header />
              <Support />
              <Footer />
            </Fragment>
          }
        />
        <Route
          path="/privacy"
          element={
            <Fragment>
              <Header />
              <Privacy />
              <Footer />
            </Fragment>
          }
        />
        Privacy
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
