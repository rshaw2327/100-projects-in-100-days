const inputEl = document.getElementById("text");
const text = document.querySelector("h4");

inputEl.addEventListener("input", () => {
  function passwordStrength() {
    let value = inputEl.value;

    if (value.length <= 4) {
      console.log("weak password");
      inputEl.style.borderColor = "red";
      text.innerHTML = "password is weak";
      text.style.color = "red";
    } else if (value.length <= 10) {
      console.log("medium password");
      inputEl.style.borderColor = "yellow";
      text.innerHTML = "password is medium";
      text.style.color = "yellow";
    } else {
      console.log("strong password");
      inputEl.style.borderColor = "green";
      text.innerHTML = "password is strong";
      text.style.color = "green";
    }
    if (value.search(/[a-z]/) == -1) {
      text.innerHTML = "password is missing a lowercase letter";
      text.style.color="red"
    } else if (value.search(/[A-Z]/) == -1) {
      text.innerHTML = "password is missing a uppercase letter";
      text.style.color="red"
    } else if (value.search(/[0-9]/) == -1) {
      text.innerHTML = "password is missing a numberic letter";
      text.style.color="red"
    }
  }

  passwordStrength();
});
