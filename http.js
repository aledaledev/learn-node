import http from "http"

const server = http.createServer((request, response) => {
  //console.log(request.url);

  if (request.url === "/dashboard") {
    response.write("Dashboard");
    return response.end();
  }

  if (request.url === "/") {
    response.write("Home");
    return response.end();
  }

  response.write(`
    <h3>Not found</h3>
    <a href='/'>Back to home</a>
    `);
  response.end();
});

server.listen(3000);

console.log("server on port 3000");
