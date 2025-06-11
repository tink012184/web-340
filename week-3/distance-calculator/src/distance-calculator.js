"use strict";

const planetDistancesAU = {
  Mercury: 0.39,
  Venus: 0.72,
  Earth: 1.0,
  Mars: 1.52,
  Jupiter: 5.2,
  Saturn: 9.58,
  Uranus: 19.22,
  Neptune: 30.05,
};

function calculateDistance(planet1, planet2) {
  // TODO: Implement this function
  if (!(planet1 in planetDistancesAU) || !(planet2 in planetDistancesAU)) {
    throw new Error("Invalid planet name");
  }

  return Math.abs(planetDistancesAU[planet1] - planetDistancesAU[planet2]);
}

module.exports = calculateDistance;
