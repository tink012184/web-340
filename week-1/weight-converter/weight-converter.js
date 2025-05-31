/**
 * Author:Melissa Lutz
 * Date:5/31/2025
 * File Name:weight-converter.js
 * Description:convert pounds into Kilograms
 */

"use strict";

// TODO: Implement the weight conversion logic here

const input = process.argv[2];

if (input === undefined) {
  console.error("Usage: node weight-converter.js <pounds>");
  process.exit(1);
}

const pounds = parseFloat(input);
if (isNaN(pounds)) {
  console.error("Input must be a number.");
  process.exit(1);
}

const kilograms = pounds * 0.45359237;

console.log(kilograms.toFixed(2));
