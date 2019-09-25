export async function helloHandler() {
  return {
    statusCode: 200,
    body: JSON.stringify("Hello")
  };
};
