"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function helloHandler() {
  return {
    statusCode: 200,
    body: JSON.stringify("Hello")
  };
}
exports.helloHandler = helloHandler;
