import React, { Component } from "react";
import { RoomContext } from "../../Context";
import { Link } from "react-router-dom";
import StyledHero from "../StyledComponents/StyledHero";

import defaultBcg from "../../images/room-1.jpeg";
import Banner from "../Banner/Banner";

class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: "",
      defaultBcg
    };
  }

  static contextType = RoomContext;

  componentDidMount() {
    const {
      match: {
        params: { slug }
      }
    } = this.props;

    this.setState({ slug });
  }

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>No such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            Back To Rooms
          </Link>
        </div>
      );
    } else {
      const {
        name,
        description,
        capacity,
        size,
        price,
        extras,
        breakfast,
        pets,
        images
      } = room;
      return (
        <>
          <StyledHero image={images[0] || defaultBcg}>
            <Banner title={`${name} Room`}>
              <Link to="/rooms" className="btn-primary">
                Back To Rooms
              </Link>
            </Banner>
          </StyledHero>
          <section classname="single-room">
            <div className="single-room-images">
              {images.map((img, index) => {
                return index !== 0 ? (
                  <img key={index} src={img} alt={name} />
                ) : null;
              })}
            </div>
            <div classname="single-room-info">
              <article className="desc">
                <h3>
                  details
                  <hr />
                </h3>
                <p>{description}</p>
              </article>
              <article className="info">
                <h3>
                  info <hr />
                </h3>

                <h6>Price: ${price}</h6>
                <h6>Size: ${size} SQFT</h6>
                <h6>
                  Max Capacity:{" "}
                  {capacity > 1 ? `${capacity} people` : `${capacity} person`}
                </h6>
                <h6>{pets ? "Pets Allowed" : "No Pets Allowed"}</h6>
                <h6>{breakfast && "Free Breakfast Included"}</h6>
              </article>
            </div>
          </section>
          <section className="room-extras">
            <h6>
              Extras
              <hr />
            </h6>
            <ul className="extras">
              {extras.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </section>
        </>
      );
    }
  }
}

export default SingleRoom;
