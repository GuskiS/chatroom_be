const db = require("./database");
const utils = require("./utils");
const logger = require("./logging");
const actions = require("./actions");
const { ACTIONS, MESSAGES } = require("./constants");

const onClose = socket => {
  const user = socket.client.user;
  if (user) {
    db.users.logout(socket.client);
    utils.send(socket.server.clients, { type: ACTIONS.CHAT, data: utils.chat(MESSAGES.CHAT.DCED, user) });
  }
};

const onMessage = (socket, message) => {
  const { type, data } = JSON.parse(message);
  const action = actions[type.toLowerCase()];
  if (action) {
    logger.info("Action: %s - %j", type, data);
    action(socket, data);
  }
};

module.exports = { onClose, onMessage };
