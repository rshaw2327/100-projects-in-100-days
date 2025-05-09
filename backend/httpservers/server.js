let http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200,{"Content-Type":"text/html"})
    res.write("<h1>hello world</h1>");
    res.end();
  })
  .listen(8080);
//   status codes
// 200 - success
// 201 - successfully added
// 404 - not found
// 500 - internal server error
// methods 
// GET - read data eg:- all the hotels in my city in google maps, all the products on amazon
// POST - create data - login / signup / filling any form / create product in admin panel
// PATCH - update data update specific field - updating profile pic/name
// PUT - update data,replace entire data -updating profile pic/name
// DELETE - delete data- deleting a data


