const CharacterCreator = require("../src/character-creator");

describe("CharacterCreator", () => {
  let characterCreator;

  beforeEach(() => {
    characterCreator = new CharacterCreator();
  });

  test("should process data correctly when written to", (done) => {
    const input = "Warrior,Male,loves dragons";
    characterCreator.on("data", (chunk) => {
      expect(chunk.toString().trim()).toBe("A Male Warrior who loves dragons.");
      done();
    });
    characterCreator.write(input);
  });

  test("should emit 'error' when invalid data is written", (done) => {
    characterCreator.on("error", (err) => {
      expect(err).toBeInstanceOf(Error);
      expect(err.message).toBe("Input cannot be empty");
      done();
    });
    characterCreator.write("");
  });

  test("should transform data correctly when written to", (done) => {
    const input = "Mage,Female,enjoys reading ancient scrolls";
    characterCreator.on("data", (chunk) => {
      expect(chunk.toString().trim()).toBe(
        "A Female Mage who enjoys reading ancient scrolls."
      );
      done();
    });
    characterCreator.write(input);
  });
});
