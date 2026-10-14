
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type RoomStatus = "Available" | "Full" | "Maintenance";

export type Room = {
  id: number;
  room: string;
  block: string;
  floor: string;
  roomType: string;
  price: number;
  capacity: number;
  occupied: number;
  available: number;
  status: RoomStatus;
  bedroomPhotos: string[];
  kitchenPhotos: string[];
  washroomPhotos: string[];
  published: boolean;
};

type RoomsState = {
  rooms: Room[];
};

const initialState: RoomsState = {
  rooms: [
    {
      id: 1,
      room: "A102",
      block: "Block A",
      floor: "1st Floor",
      roomType: "4-Bed Room",
      price: 0,
      capacity: 4,
      occupied: 3,
      available: 1,
      status: "Available",
      bedroomPhotos: [],
      kitchenPhotos: [],
      washroomPhotos: [],
      published: true,
    },
    {
      id: 2,
      room: "A103",
      block: "Block A",
      floor: "1st Floor",
      roomType: "4-Bed Room",
      price: 0,
      capacity: 4,
      occupied: 4,
      available: 0,
      status: "Full",
      bedroomPhotos: [],
      kitchenPhotos: [],
      washroomPhotos: [],
      published: true,
    },
    {
      id: 3,
      room: "B204",
      block: "Block B",
      floor: "2nd Floor",
      roomType: "4-Bed Room",
      price: 0,
      capacity: 4,
      occupied: 2,
      available: 2,
      status: "Available",
      bedroomPhotos: [],
      kitchenPhotos: [],
      washroomPhotos: [],
      published: true,
    },
    {
      id: 4,
      room: "B205",
      block: "Block B",
      floor: "2nd Floor",
      roomType: "4-Bed Room",
      price: 0,
      capacity: 4,
      occupied: 4,
      available: 0,
      status: "Full",
      bedroomPhotos: [],
      kitchenPhotos: [],
      washroomPhotos: [],
      published: true,
    },
    {
      id: 5,
      room: "C105",
      block: "Block C",
      floor: "1st Floor",
      roomType: "2-Bed Room",
      price: 0,
      capacity: 2,
      occupied: 0,
      available: 2,
      status: "Maintenance",
      bedroomPhotos: [],
      kitchenPhotos: [],
      washroomPhotos: [],
      published: true,
    },
  ],
};

const roomsSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    setRooms(state, action: PayloadAction<Room[]>) {
      state.rooms = action.payload;
    },

    addRoom(state, action: PayloadAction<Room>) {
      state.rooms.push(action.payload);
    },

    updateRoom(state, action: PayloadAction<Room>) {
      const index = state.rooms.findIndex(
        (room) => room.id === action.payload.id
      );

      if (index !== -1) {
        state.rooms[index] = action.payload;
      }
    },

    deleteRoom(state, action: PayloadAction<number>) {
      state.rooms = state.rooms.filter(
        (room) => room.id !== action.payload
      );
    },

    setRoomPublished(
      state,
      action: PayloadAction<{ id: number; published: boolean }>
    ) {
      const room = state.rooms.find(
        (item) => item.id === action.payload.id
      );

      if (room) {
        room.published = action.payload.published;
      }
    },
  },
});

export const {
  setRooms,
  addRoom,
  updateRoom,
  deleteRoom,
  setRoomPublished,
} = roomsSlice.actions;

export default roomsSlice.reducer;