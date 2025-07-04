const http = require("http");
const url = require("url");
let character = null;

// TODO: Implement your server here

const server = http.createServer((req, res) => {
  // TODO: Implement your routes here
  const parsedUrl = url.parse(req.url, true);
  const { pathname, query } = parsedUrl;

  if (req.method === "POST" && pathname === "/create-character") {
    const { class: charClass, gender, fact } = query;

    if (!charClass || !gender || !fact) {
      res.writeHead(400);
      res.end("Missing required parameters");
      return;
    }

    character = { class: charClass, gender, fact };
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Character created!", character }));
  } else if (req.method === "POST" && pathname === "/confirm-character") {
    if (!character) {
      res.writeHead(400);
      res.end("No character to confirm");
      return;
    }
    res.writeHead(200);
    res.end("Character confirmed!");
  } else if (req.method === "GET" && pathname === "/view-character") {
    if (!character) {
      res.writeHead(404);
      res.end("No character found");
      return;
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(character));
  } else {
    res.writeHead(404);
    res.end("Route not found");
  }
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});

module.exports = server;
