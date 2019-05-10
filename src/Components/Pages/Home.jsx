import React from "react";
import { Link } from "react-router-dom";

import Hero from "../Hero/Hero";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import FeatureRooms from "../RoomsContainer/Rooms/FeatureRooms";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <Hero hero="defaultHero">
        <Banner title="Modern Luxury" subtitle="Deluxe Rooms Starting At $1300">
          <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeatureRooms />
      <Footer />
    </>
  );
};

export default Home;
