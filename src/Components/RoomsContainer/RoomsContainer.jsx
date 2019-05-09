import React from "react";
import { withRoomConsumer } from "../../Context";

import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import Loading from "./Rooms/Loading";

const RoomContainer = ({ context }) => {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <RoomsFilter rooms={rooms} />
        <RoomsList rooms={sortedRooms} />
      </>
    );
  }
};

export default withRoomConsumer(RoomContainer);

//import { RoomConsumer } from "../../Context";
// const RoomsContainer = () => {
//   return (
//     <RoomConsumer>
//       {value => {
//         const { loading, sortedRooms, rooms } = value;

//         if (loading) {
//           return <Loading />;
//         } else {
//           return (
//             <>
//               <RoomsFilter rooms={rooms} />
//               <RoomsList rooms={sortedRooms} />
//             </>
//           );
//         }
//       }}
//     </RoomConsumer>
//   );
// };

// export default RoomsContainer;
