"use strict";
const assert = require("assert");
const calculateDistance = require("../src/distance-calculator.js");

function testFunctionDescription() {
  // TODO: Implement this function
}

function testEarthToMars() {
  try {
    const result = calculateDistance("Earth", "Mars");
    assert.strictEqual(result, 0.52);
    console.log("✅ Passed testEarthToMars");
    return true;
  } catch (error) {
    console.error(`❌ Failed testEarthToMars: ${error.message}`);
    return false;
  }
}

function testVenusToJupiter() {
  try {
    const result = calculateDistance("Venus", "Jupiter");
    assert.strictEqual(result, 4.48);
    console.log("✅ Passed testVenusToJupiter");
    return true;
  } catch (error) {
    console.error(`❌ Failed testVenusToJupiter: ${error.message}`);
    return false;
  }
}

function testInvalidPlanetName() {
  try {
    calculateDistance("Earth", "Pluto");
    console.error("❌ Failed testInvalidPlanetName: did not throw");
    return false;
  } catch (error) {
    console.log("✅ Passed testInvalidPlanetName");
    return true;
  }
}

// Call your test functions here
// Run all tests
const tests = [testEarthToMars, testVenusToJupiter, testInvalidPlanetName];
const passed = tests.map((fn) => fn()).filter((result) => result).length;
console.log(`${passed} out of ${tests.length} tests passed.`);
