const request = require("supertest");
const server = require("../src/server");

const testCharacter = {
  class: "Warrior",
  gender: "Male",
  funFact: "Has a pet dragon",
};

describe("Fantasy Game Character Creation", () => {
  test("POST /create-character should respond with 200 and store character", async () => {
    const res = await request(server)
      .post("/create-character")
      .query(testCharacter);

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Character created");
    expect(res.body.character).toEqual(testCharacter);
  });

  test("POST /confirm-character should respond with confirmation message", async () => {
    const res = await request(server).post("/confirm-character");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Character confirmed");
  });

  test("GET /view-character should return created character", async () => {
    const res = await request(server).get("/view-character");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(testCharacter);
  });
});
