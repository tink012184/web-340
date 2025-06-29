/**
 * Author: Melissa Lutz
 * Date: 6/29/2025
 * File Name: pie.spec.js
 * Description: Unit tests for the bakePie function
 */

"use strict";

const { bakePie } = require("../src/pie");

// Your tests here
describe("bakePie", () => {
  const originalExit = process.exit;
  const originalWarn = console.warn;

  beforeEach(() => {
    process.exit = jest.fn(); // mock process.exit
    console.warn = jest.fn(); // mock console.warn
  });

  afterEach(() => {
    process.exit = originalExit;
    console.warn = originalWarn;
  });

  test("successfully bakes a pie when all essential ingredients are present", () => {
    const message = bakePie("apple", ["flour", "sugar", "butter", "apples"]);
    expect(message).toBe(
      "Successfully baked a apple pie with flour, sugar, butter, apples"
    );
    expect(process.exit).not.toHaveBeenCalled();
    expect(console.warn).not.toHaveBeenCalled();
  });

  test("fails to bake pie when flour is missing", () => {
    bakePie("cherry", ["sugar", "butter", "cherries"]);
    expect(console.warn).toHaveBeenCalledWith(
      expect.stringContaining("Missing essential ingredients: flour")
    );
    expect(process.exit).toHaveBeenCalledWith(1);
  });

  test("fails to bake pie when multiple essential ingredients are missing", () => {
    bakePie("blueberry", ["butter", "blueberries"]);
    expect(console.warn).toHaveBeenCalledWith(
      expect.stringContaining("Missing essential ingredients: flour, sugar")
    );
    expect(process.exit).toHaveBeenCalledWith(1);
  });
});
