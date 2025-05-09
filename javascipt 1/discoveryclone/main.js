fetch("http://localhost:3000/kids")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });
