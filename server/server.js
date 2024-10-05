const express = require("express");
const http = require("http");
const app = express();
const { Server } = require("socket.io");

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("send-message", (message) => {
    console.log(message);
    socket.broadcast.emit("recieve-message", message);
  });
});

server.listen(4000, () => console.log("server is running on port 4000"));
