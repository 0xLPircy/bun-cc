// console.log("Hello via Bun!");

const server = Bun.serve({
  port: 5001,
  fetch(req) {
    return new Response("hello from bun");
  },
});

console.log(`Listenting on Port ${server.port}`);
