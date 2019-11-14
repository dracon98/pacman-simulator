class Command {
  /**
   * Command parent class
   * @param {PacMan} pacman
   * @param {Map} map
   */
  constructor(pacman, map) {
    this.pacman = pacman;
    this.map = map;
  }
}
module.exports = Command;
