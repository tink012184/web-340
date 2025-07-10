const { Duplex } = require("stream");

class CharacterCreator extends Duplex {
  constructor(options = {}) {
    super(options);
    this.data = "";
  }

  _write(chunk, encoding, callback) {
    const input = chunk.toString().trim();
    if (!input) {
      this.emit("error", new Error("Input cannot be empty"));
      return callback();
    }

    this.data += input;
    const parts = input.split(",");
    if (parts.length === 3) {
      const [charClass, gender, funFact] = parts;
      const output = `A ${gender} ${charClass} who ${funFact.trim()}.\n`;
      this.push(output);
    }

    callback();
  }

  _read(size) {
    // No-op since push is called in _write
  }
}

module.exports = CharacterCreator;
