import { io } from "socket.io-client";

const socket = io(`${process.env.REACT_APP_SERVER_URL}`);

socket.on("connect", () => {
  // console.log({ socketId: socket.id });
});

export default socket;
