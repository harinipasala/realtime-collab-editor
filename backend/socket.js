const { Server } = require("socket.io");

const initializeSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("User Connected:", socket.id);

    socket.on("send-changes", (data) => {
      socket.broadcast.emit("receive-changes", data);
    });

    socket.on("disconnect", () => {
      console.log("User Disconnected");
    });
  });
};

module.exports = initializeSocket;