import React from "react";
import Room from "./Rooms/Room";

const RoomsList = ({ rooms }) => {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>
          Unfortunately No Match Was Found With The Current Search Parameters
        </h3>
      </div>
    );
  } else {
    return (
      <section className="roomslist">
        <div className="roomslist-center">
          {rooms.map(item => {
            return <Room key={item.id} room={item} />;
          })}
        </div>
      </section>
    );
  }
};

export default RoomsList;
