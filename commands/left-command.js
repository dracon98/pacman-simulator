const Command = require("./command");

class LeftCommand extends Command {
  constructor(pacman, map) {
    super(pacman, map);
  }
  execute() {
    if (this.pacman.isPlaced) {
      this.pacman.left();
    } else {
      this.pacman.notif();
    }
  }
}

module.exports = LeftCommand;
