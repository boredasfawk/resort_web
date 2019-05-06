import React, { Component } from "react";
import { RoomContext } from "../../Context";
import Title from "../Title/Title";
import Loading from "./Loading";
import Room from "./Room";

class FeatureRooms extends Component {
  static contextType = RoomContext;

  render() {
    const { loading, featuredRooms: rooms } = this.context;

    return (
      <section className="featured-rooms">
        <Title title="Featured Rooms" />
        <div className="featured-rooms-center">
          {loading ? (
            <Loading />
          ) : (
            rooms.map(room => {
              return <Room key={room.id} room={room} />;
            })
          )}
        </div>
      </section>
    );
  }
}

export default FeatureRooms;
