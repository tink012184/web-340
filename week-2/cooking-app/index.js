/**
 * Author:Melissa Lutz
 * Date:6/3/2025
 * File Name:Melissa Lutz
 * Description:Simple recipe app with timers
 */

// TODO: Import your module using require
const { createRecipe, setTimer, quit } = require("./recipes");

// TODO: Implement your CLI program here
console.log(createRecipe(["flour", "sugar", "eggs"]));
console.log(setTimer(15));
console.log(quit());
