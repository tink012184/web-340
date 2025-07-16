"use strict";

/**
 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 */

// For callbacks:
// const fs = require('fs');

// For promises:
const fs = require("fs").promises;
const path = require("path");

describe("Character Creation Module", () => {
  let createCharacter;
  let getCharacters;
  let DATA_FILE;
  const testCharacter = {
    class: "Mage",
    gender: "Female",
    funFact: "Can levitate frogs",
  };

  beforeEach(async () => {
    jest.resetModules();
    // TODO: Set up your mocks here
    ({
      createCharacter,
      getCharacters,
      DATA_FILE,
    } = require("../src/character-creation"));
    await fs.writeFile(DATA_FILE, "[]"); // clear file
  });

  afterAll(async () => {
    await fs.unlink(DATA_FILE).catch(() => {}); // cleanup
  });

  test("createCharacter writes a new character to the file", async () => {
    const result = await createCharacter(testCharacter);
    const data = await fs.readFile(DATA_FILE, "utf-8");
    const characters = JSON.parse(data);

    expect(result).toBe(true);
    expect(characters).toContainEqual(testCharacter);
  });

  test("getCharacters reads characters from the file", async () => {
    await fs.writeFile(DATA_FILE, JSON.stringify([testCharacter], null, 2));
    const characters = await getCharacters();

    expect(characters).toEqual([testCharacter]);
  });

  test("getCharacters throws error if file cannot be read", async () => {
    await fs.unlink(DATA_FILE).catch(() => {});
    await expect(getCharacters()).rejects.toThrow(
      "Failed to read character data."
    );
  });

  // TODO: Write your tests here. You should have at least three tests:
  // 1. Test that createCharacter writes a new character to the file
  // 2. Test that getCharacters reads characters from the file
  // 3. Test that createCharacter handles errors when writing to the file
});
