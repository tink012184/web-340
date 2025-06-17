/**
 * Author:Melissa Lutz
 * Date:6/17/2025
 * File Name:taco-stand.spec.js
 * Description:test for taco stand
 */

"use strict";

const assert = require("assert");
const TacoStandEmitter = require("../src/taco-stand.js");
const tacoStand = new TacoStandEmitter();

// TODO: Write tests for the TacoStandEmitter methods
function testServeCustomer() {
  try {
    tacoStand.on("serve", (customer) => {
      assert.strictEqual(customer, "John");
    });
    tacoStand.serveCustomer("John");
    console.log("Passed testServeCustomer");
    return true;
  } catch (err) {
    console.error(`Failed testServeCustomer: ${err}`);
    return false;
  }
}

function testPrepareTaco() {
  try {
    tacoStand.on("prepare", (taco) => {
      assert.strictEqual(taco, "beef");
    });
    tacoStand.prepareTaco("beef");
    console.log("Passed testPrepareTaco");
    return true;
  } catch (err) {
    console.error(`Failed testPrepareTaco: ${err}`);
    return false;
  }
}

function testHandleRush() {
  try {
    tacoStand.on("rush", (rush) => {
      assert.strictEqual(rush, "lunch");
    });
    tacoStand.handleRush("lunch");
    console.log("Passed testHandleRush");
    return true;
  } catch (err) {
    console.error(`Failed testHandleRush: ${err}`);
    return false;
  }
}

// Run all tests
testServeCustomer();
testPrepareTaco();
testHandleRush();
