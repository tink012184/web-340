/**
 * Author:Melissa Lutz
 * Date:6/17/2025
 * File Name:index.js
 * Description:take orders
 */

"use strict";

const readline = require("readline");
const TacoStandEmitter = require("./taco-stand.js");

const tacoStand = new TacoStandEmitter();

tacoStand.on("serve", (customer) => {
  console.log(`Taco Stand serves: ${customer}`);
});

tacoStand.on("prepare", (taco) => {
  console.log(`Taco Stand prepares: ${taco} taco`);
});

tacoStand.on("rush", (rushType) => {
  console.log(`Taco Stand handles rush: ${rushType}`);
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// TODO: Set up event listeners for the tacoStand object
rl.on("line", (input) => {
  const [command, ...args] = input.split(" ");

  // TODO: Handle the commands
  switch (command.toLowerCase()) {
    case "serve":
      tacoStand.serveCustomer(argument);
      break;
    case "prepare":
      tacoStand.prepareTaco(argument);
      break;
    case "rush":
      tacoStand.handleRush(argument);
      break;
    default:
      console.log("Unknown command. Try: serve, prepare, or rush.");
  }
});

console.log(
  `Enter a command: "serve", "prepare", or "rush", followed by a space and the argument.`
);
