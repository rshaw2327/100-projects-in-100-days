let http = require("http");

http
  .createServer(function (req, res) {
    res.setHeader("Content-Type", "application/json");
    // route handling
    if (req.url == "/" && req.method == "GET") {
      const responseData = {
        message: "hello world",
        status: "success",
        timestamp: new Date(),
      };
      res.writeHead(200);
      res.end(JSON.stringify(responseData));

      // res.end(JSON.stringify({
      //     message:"hello world",
      //     status:"success",
      //     timestamp: new Date()
      // }));
    } else if (req.url == "/me" && req.method == "GET") {
      // route handling

      const responseData = {
        name: "Richard",
        country: "united kingdom",
        timestamp: new Date(),
      };
      res.writeHead(200);
      res.end(JSON.stringify(responseData));
    } else {
      res.writeHead(404);
      res.end(
        JSON.stringify({
          error: "route not found",
          code: 404,
        })
      );
    }
  })
  .listen(8080);
