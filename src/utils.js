const util = require("util");
const WebSocket = require("ws");

const send = (clients, data, skipAuth = false) => {
  clients.forEach(client => {
    if ((client.user || skipAuth) && client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data));
    }
  });
};

const format = (message, ...args) => util.format(message, ...args);
const chat = (message, ...args) => ({ message: { content: format(message, ...args) } });

module.exports = { send, format, chat };
