/**
 * This is the entry point. Input is from stdin
 */
const readline = require("readline");

const PacMan = require("./compoments/pacman"),
  Map = require("./compoments/map"),
  LeftCommand = require("./commands/left-command"),
  RightCommand = require("./commands/right-command"),
  PlaceCommand = require("./commands/place-command"),
  MoveCommand = require("./commands/move-command"),
  ReportCommand = require("./commands/report-command");

const pacman = new PacMan(null, null, null),
  map = new Map(5, 5), // A 5x5 map as required
  leftCommand = new LeftCommand(pacman, map),
  rightCommand = new RightCommand(pacman, map),
  placeCommand = new PlaceCommand(pacman, map),
  moveCommand = new MoveCommand(pacman, map),
  reportCommand = new ReportCommand(pacman, map);

/**
 * Can be refactored into a Class to implement undo feature
 */
executor = (command, param = null) => {
  command.execute(param);
};

/**
 * reads one line only
 */
parser = input => {
  const placeRegex = /^PLACE\s+\d+,\d+,(NORTH|EAST|SOUTH|WEST)$/,
    leftRegex = /^LEFT$/,
    rightRegex = /^RIGHT$/,
    moveRegex = /^MOVE$/,
    reportRegex = /^REPORT$/;

  if (placeRegex.test(input)) {
    const [, x, y, facing] = input.replace(" ", ",").split(","); //to sanitise input
    executor(placeCommand, { x, y, facing });
  } else if (leftRegex.test(input)) {
    executor(leftCommand);
  } else if (rightRegex.test(input)) {
    executor(rightCommand);
  } else if (moveRegex.test(input)) {
    executor(moveCommand);
  } else if (reportRegex.test(input)) {
    executor(reportCommand);
  }
  // otherwise input is not a valid command
};

/**
 * App begins
 */
console.log("Please type in your Command and Enter");
const rl = readline.createInterface(process.stdin, process.stdout);
rl.prompt();
rl.on("line", input => {
  parser(input.toUpperCase());
});
