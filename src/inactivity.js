const actions = require("./actions");

const INACTIVITY_CHECK = process.env.INACTIVITY_CHECK || 60000;

class Inactivity {
  constructor(socket) {
    this.socket = socket;
    this.update();
  }

  update() {
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => this.check(), INACTIVITY_CHECK);
  }

  remove() {
    clearTimeout(this.timeout);
    this.timeout = undefined;
  }

  check() {
    actions.inactive(this.socket);
    this.remove();
  }
}

module.exports = Inactivity;
