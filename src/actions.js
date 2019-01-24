const db = require("./database");
const utils = require("./utils");
const logger = require("./logging");
const { ACTIONS, MESSAGES } = require("./constants");

const login = (socket, data) => {
  if (db.users.get(data.user)) {
    logger.info("User already in system - %s", data.user);
    utils.send([socket.client], { type: ACTIONS.ERROR, data: { error: MESSAGES.USER.EXISTS } }, true);
  } else {
    logger.info("Login successful - %s", data.user);
    utils.send(socket.server.clients, { type: ACTIONS.CHAT, data: utils.chat(MESSAGES.CHAT.JOINED, data.user) });
    db.users.login(socket.client, data.user);
    utils.send([socket.client], { type: ACTIONS.LOGIN, data });
  }
};

const logout = socket => {
  const user = socket.client.user;
  utils.send([socket.client], { type: ACTIONS.LOGOUT });
  db.users.logout(socket.client);
  utils.send(socket.server.clients, { type: ACTIONS.CHAT, data: utils.chat(MESSAGES.CHAT.LEFT, user) });
};

const inactive = socket => {
  const user = socket.client.user;
  utils.send([socket.client], { type: ACTIONS.INACTIVE, data: { error: MESSAGES.USER.INACTIVE } });
  db.users.logout(socket.client);
  utils.send(socket.server.clients, { type: ACTIONS.CHAT, data: utils.chat(MESSAGES.CHAT.INACTIVE, user) });
};

const chat = (socket, data) => {
  if (db.users.get(data.message.user) && data.message.content) {
    utils.send(socket.server.clients, { type: ACTIONS.CHAT, data });
  }
};

module.exports = { login, logout, inactive, chat };
