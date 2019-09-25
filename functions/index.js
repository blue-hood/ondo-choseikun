"use strict";

exports.helloHandler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify("Hello")
  };
};
