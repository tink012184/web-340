const http = require("http");
const url = require("url");

let storedCharacter = null;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (req.method === "POST" && parsedUrl.pathname === "/create-character") {
    const { class: charClass, gender, funFact } = parsedUrl.query;

    if (!charClass || !gender || !funFact) {
      res.writeHead(400, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ message: "Missing character data" }));
    }

    storedCharacter = { class: charClass, gender, funFact };
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(
      JSON.stringify({
        message: "Character created",
        character: storedCharacter,
      })
    );
  }

  if (req.method === "POST" && parsedUrl.pathname === "/confirm-character") {
    if (!storedCharacter) {
      res.writeHead(400, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ message: "No character to confirm" }));
    }

    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ message: "Character confirmed" }));
  }

  if (req.method === "GET" && parsedUrl.pathname === "/view-character") {
    if (!storedCharacter) {
      res.writeHead(404, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ message: "Character not found" }));
    }

    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(storedCharacter));
  }

  // Default route
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Route not found" }));
});

module.exports = server;

if (require.main === module) {
  server.listen(3000, () => console.log("Server running on port 3000"));
}
