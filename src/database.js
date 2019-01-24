const users = {};
const get = user => users[user];
const login = (client, user) => {
  client.user = user;
  users[user] = client;
};
const logout = client => {
  client.user && delete users[client.user];
  client.user = undefined;
};

module.exports = {
  users: { get, login, logout },
};
