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
      loading: true,
      type: "all",
      capacity: 1,
      price: 0,
      minPrice: 0,
      maxPrice: 0,
      minSize: 0,
      maxSize: 0,
      breakfast: false,
      pet: false
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
    let maxPrice = Math.max(...rooms.map(item => item.price));
    let maxSize = Math.max(...rooms.map(item => item.size));

    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      maxPrice,
      maxSize
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

  // room object with matching slug gets returned
  getRoom = slug => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug);

    return room;
  };
  // takes in event from selected filter type
  // checks if its a checkbox/text field
  // changes state based on target name/value
  // calls filterRooms function as callback
  handleChange = event => {
    const target = event.target;
    const value = event.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState(
      {
        [name]: value
      },
      this.filterRooms
    );
  };

  filterRooms = () => {
    const {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets
    } = this.state;

    let tempRooms = [...rooms];
    if (type !== "all") {
      tempRooms = tempRooms.filter(room => room.type === type);
    }
    this.setState({ sortedRooms: tempRooms });
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
  return function consumerWrapper(props) {
    return (
      <RoomConsumer>
        {value => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}

export { RoomProvider, RoomConsumer, RoomContext };
