const Command = require("./command");

class MoveCommand extends Command {
  constructor(pacman, map) {
    super(pacman, map);
  }

  execute() {
    if (this.pacman.isPlaced) {
      // check whether executing MOVE command will result in falling
      const tempPacMan = Object.assign({}, this.pacman);
      tempPacMan.move = this.pacman.move;
      tempPacMan.move();

      if (this.map.isPositionValid(tempPacMan)) {
        this.pacman.move();
      }
    } else {
      this.pacman.notif();
    }
  }
}

module.exports = MoveCommand;
