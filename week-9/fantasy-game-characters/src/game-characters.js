// game-characters.js
const { spawn } = require("child_process");
const path = require("path");

class GameCharacters {
  constructor(scriptName = "game-characters-data.js") {
    // TODO: Set the script file path
    this.scriptPath = path.join(__dirname, scriptName);
  }

  getCharacters(callback) {
    // TODO: Implement this method
    try {
      const child = spawn("node", [this.scriptPath]);

      let data = "";
      let error = "";

      child.stdout.on("data", (chunk) => {
        data += chunk.toString();
      });

      child.stderr.on("data", (chunk) => {
        error += chunk.toString();
      });

      child.on("close", (code) => {
        if (error) {
          console.error("stderr:", error);
          callback(error, null);
        } else {
          try {
            const parsedData = JSON.parse(data);
            callback(null, parsedData);
          } catch (parseErr) {
            callback(parseErr.message, null);
          }
        }
      });
    } catch (err) {
      console.error("spawn error:", err);
      callback(err.message, null);
    }
  }
}

module.exports = { GameCharacters };
