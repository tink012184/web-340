// game-characters.spec.js
const { GameCharacters } = require("../src/game-characters");

describe("GameCharacters", () => {
  let gameCharacters;

  beforeEach(() => {
    gameCharacters = new GameCharacters();
  });

  test("should return game characters data", (done) => {
    // TODO: Implement this test
    gameCharacters = new GameCharacters("game-characters-data.js");

    gameCharacters.getCharacters((err, data) => {
      expect(err).toBeNull();
      expect(data).toEqual([
        {
          class: "Warrior",
          gender: "Female",
          funFact: "Carries a sword made of enchanted ice.",
        },
        {
          class: "Mage",
          gender: "Male",
          funFact: "Can summon rainstorms with a sneeze.",
        },
        {
          class: "Rogue",
          gender: "Other",
          funFact: "Once pickpocketed a dragon.",
        },
      ]);
      done();
    });
  });

  test("should handle an error when the game characters data script is not found", (done) => {
    // TODO: Implement this test
    gameCharacters = new GameCharacters("non-existent.js");

    gameCharacters.getCharacters((err, data) => {
      expect(data).toBeNull();
      expect(err).toBeTruthy();
      done();
    });
  });

  test("should handle an error when the game characters data script fails", (done) => {
    // TODO: Implement this test
    gameCharacters = new GameCharacters("failing-script.js");

    gameCharacters.getCharacters((err, data) => {
      expect(data).toBeNull();
      expect(err).toMatch(/Simulated error/);
      done();
    });
  });
});
