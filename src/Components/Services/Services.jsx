import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

import Title from "../Title/Title";

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        {
          icon: <FaCocktail />,
          title: "Bottomless Mimosas",
          info:
            "Blog everyday carry aliqua four loko wolf twee selvage butcher tumeric."
        },
        {
          icon: <FaHiking />,
          title: "Hiking Trails",
          info:
            "Blog everyday carry aliqua four loko wolf twee selvage butcher tumeric."
        },
        {
          icon: <FaShuttleVan />,
          title: "Free Shuttles",
          info:
            "Blog everyday carry aliqua four loko wolf twee selvage butcher tumeric."
        },
        {
          icon: <FaBeer />,
          title: "Free IPA All Day",
          info:
            "Blog everyday carry aliqua four loko wolf twee selvage butcher tumeric."
        }
      ]
    };
  }
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                {item.title === "Free IPA All Day" ? (
                  <p>
                    Everything On Tap, But Were Serving Mississippi Mud By The
                    Jug!!!
                  </p>
                ) : (
                  <p>{item.info}</p>
                )}
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
