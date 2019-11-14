const Command = require("./command");

class PlaceCommand extends Command {
  constructor(pacman, map) {
    super(pacman, map);
  }

  /**
   * Execute PLACE
   * @param {Object} placeDetails coordinates x and y, and facing direction
   */
  execute(placeDetails) {
    if (this.map.isPositionValid(placeDetails)) {
      this.pacman.place(placeDetails);
    }
  }
}
module.exports = PlaceCommand;
