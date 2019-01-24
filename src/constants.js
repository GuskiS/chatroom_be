const ACTIONS = {
  INACTIVE: "INACTIVE",
  LOGOUT: "LOGOUT",
  LOGIN: "LOGIN",
  ERROR: "ERROR",
  CHAT: "CHAT",
};

const MESSAGES = {
  USER: {
    EXISTS: "Failed to connect. Nickname already taken.",
    INACTIVE: "Disconnected by the server due to inactivity.",
  },
  CHAT: {
    LEFT: "%s left the chat",
    DCED: "%s left the chat, connection lost",
    JOINED: "%s joined the chat",
    INACTIVE: "%s was disconnected due to inactivity",
  },
};

module.exports = { ACTIONS, MESSAGES };
