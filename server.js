require("dotenv").config();
const WebSocket = require("ws");

const events = require("./src/events");
const Inactivity = require("./src/inactivity");

const server = new WebSocket.Server({ host: "0.0.0.0", port: 8080 });

server.on("connection", client => {
  const socket = { client, server };
  const inactivity = new Inactivity(socket);

  client.on("close", () => {
    inactivity.remove();
    events.onClose(socket);
  });
  client.on("message", message => {
    inactivity.update();
    events.onMessage(socket, message);
  });
});
