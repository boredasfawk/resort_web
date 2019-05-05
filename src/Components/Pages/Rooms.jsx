import React from "react";

import { Link } from "react-router-dom";

import Hero from "../Hero/Hero";
import Banner from "../Banner/Banner";

const Rooms = ({ hero, title }) => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Our Rooms">
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
    </>
  );
};

export default Rooms;
