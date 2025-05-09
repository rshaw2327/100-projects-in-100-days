let http = require("http");

http.createServer(function (req, res) {
  res.setHeader("Content-Type", "application/json");
  if (req.url == "/singleproduct" && req.method == "GET") {
    const responseData = {
      id: 1,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 663,
      description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the ",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    };
    res.writeHead(200);
    res.end(JSON.stringify(responseData));

  } else if (req.url == "/getallproducts" && req.method == "GET") {
    const responseData = {
      products:[
        {
      id: 2,
      title: "Mens Cotton Jacket",
      price: 66,
      description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors.",
      category: "men's clothing",
      image:"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" ,
    },
    {
      id: 1,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 663,
      description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the ",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    }
  ]
    };
    res.writeHead(200);
    res.end(JSON.stringify(responseData));
  } else {
    res.writeHead(404);
    res.end(
        JSON.stringyfy({
            error:"route not found",
            code:404
        })
    )
  }

})
.listen(5060)