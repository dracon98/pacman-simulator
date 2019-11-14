const Command = require("./command");

class ReportCommand extends Command {
  constructor(pacman, map) {
    super(pacman, map);
  }

  execute() {
    if (this.pacman.isPlaced) {
      this.pacman.report();
    } else {
      this.pacman.notif();
    }
  }
}
module.exports = ReportCommand;
