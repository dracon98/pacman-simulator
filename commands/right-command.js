const Command = require("./command");

class RightCommand extends Command {
  constructor(pacman, map) {
    super(pacman, map);
  }
  execute() {
    if (this.pacman.isPlaced) {
      this.pacman.right();
    } else {
      this.pacman.notif();
    }
  }
}

module.exports = RightCommand;
