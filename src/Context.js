import React, { Component } from "react";
import items from "./data";

const RoomContext = React.createContext();

class RoomProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      sortedRooms: [],
      featuredRooms: [],
      loading: true
    };

    //this.getData = this.getData.bind(this);
    this.formatData = this.formatData.bind(this);
    this.getRoom = this.getRoom.bind(this);
  }
  // get Data

  // once component mounts injects state with room data and updates loading property
  componentDidMount() {
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter(room => room.featured);

    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false
    });
  }
  // parses array of images in data objects in data.js to return array of same objects 1 level deep instead of 3+
  formatData = items => {
    let tempItems = items.map(item => {
      const {
        fields,
        sys: { id }
      } = item;

      let images = fields.images.map(image => image.fields.file.url);

      const room = { ...fields, images, id };
      return room;
    });

    return tempItems;
  };

  getRoom = slug => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug);

    return room;
  };
  render() {
    return (
      <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
