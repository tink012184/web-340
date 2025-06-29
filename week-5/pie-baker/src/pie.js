/**
 * Author: Melissa Lutz
 * Date: 6/29/2025
 * File Name: pie.js
 * Description: Function to simulate baking a pie.
 */

"use strict";

function bakePie(pieType, ingredients) {
  const required = ["flour", "sugar", "butter"];

  const missing = required.filter((item) => !ingredients.includes(item));
  if (missing.length > 0) {
    console.warn(`Missing essential ingredients: ${missing.join(", ")}`);
    process.exit(1);
  }

  return `Successfully baked a ${pieType} pie with ${ingredients.join(", ")}`;
}

module.exports = { bakePie };
