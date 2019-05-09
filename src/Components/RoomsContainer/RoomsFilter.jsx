import React from "react";
import { useContext } from "react";
import { RoomContext } from "../../Context";
import Title from "../Title/Title";

//get all unique values
const getUnique = (array, value) => {
  return [...new Set(array.map(item => item[value]))];
};

const RoomsFilter = ({ rooms }) => {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pet
  } = context;
  // get unique types
  let types = getUnique(rooms, "type");
  // add all
  types = ["all", ...types];
  // map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="Search Rooms" />
      <form className="filter-form">
        <div className="form-group">
          {/* start select type */}
          <label htmlFor="type">room Type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
          {/* end select type */}
        </div>
      </form>
    </section>
  );
};

export default RoomsFilter;
