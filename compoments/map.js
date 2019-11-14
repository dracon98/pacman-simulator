class Map {
  constructor(xAxis, yAxis) {
    this.xAxis = xAxis;
    this.yAxis = yAxis;
  }
  /**
   * Check whether the pacman's current position is still within the boundary.
   * @param {PacMan} pacman
   */
  isPositionValid(pacman) {
    return (
      pacman.x >= 0 &&
      pacman.x < this.xAxis &&
      pacman.y >= 0 &&
      pacman.y < this.yAxis
    );
  }
}

module.exports = Map;
