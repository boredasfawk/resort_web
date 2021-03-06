import React from "react";
import { Link } from "react-router-dom";

import Hero from "../Hero/Hero";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";

const Error = () => {
  return (
    <>
      <Hero>
        <Banner title="404 :(" subtitle="Page Not Found">
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
      <Footer />
    </>
  );
};

export default Error;
