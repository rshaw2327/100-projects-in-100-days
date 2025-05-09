fetch("https://fakestoreapi.com/users")
  .then((res) => res.json())
  .then((json) => showdata(json));

function showdata(data) {
  console.log(data);
  let mainn = document.getElementById("main");
// let mainn=document.querySelector("#main")
  data.map((item, index) => {
    const email = document.createElement("email");
    email.className="email"
    email.innerHTML = item.email+"  ";
    const username = document.createElement("username");
    username.className="username"
    username.innerHTML = item.username+"  ";
    const password = document.createElement("password");
    password.innerHTML = item.password+"  ";
    const name = document.createElement("name");
    name.innerHTML = item.name.firstname+" "+ item.name.lastname;
    const firstname = document.createElement("firstname");
    firstname.innerHTML = item.name.firstname+"  ";
    const lastname = document.createElement("lastname");
    lastname.innerHTML = item.name.lastname+"  ";
    const br=document.createElement("br")
    mainn.append(email, username, password, firstname, lastname,br);
  });
}
