"use strict";

/*
 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For callbacks" comment.
 * 3. Uncomment the 'module.exports' line under the "For callbacks" comment.
 *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For promises" comment.
 * 3. Uncomment the 'module.exports' line under the "For promises" comment.
 */

// For callbacks:
/*
const fs = require('fs');

function createCharacter(character, callback) {
  // TODO: Implement this function
}

function getCharacters(callback) {
  // TODO: Implement this function
}
*/

// For promises:

const fs = require("fs").promises;
const path = require("path");

const DATA_FILE = path.join(__dirname, "character-data.json");

async function createCharacter(character) {
  try {
    let characters = [];
    try {
      const data = await fs.readFile(DATA_FILE, "utf-8");
      characters = JSON.parse(data);
    } catch (readErr) {
      // If file does not exist or is empty, ignore
      if (readErr.code !== "ENOENT") throw readErr;
    }

    characters.push(character);
    await fs.writeFile(DATA_FILE, JSON.stringify(characters, null, 2));
    return true;
  } catch (err) {
    throw new Error("Failed to write character data.");
  }
}

async function getCharacters() {
  try {
    const data = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    throw new Error("Failed to read character data.");
  }
}

// Uncomment the appropriate exports depending on whether you're using callbacks or promises:

// module.exports = { createCharacter, getCharacters }; // For callbacks
module.exports = { createCharacter, getCharacters, DATA_FILE }; // For promises
