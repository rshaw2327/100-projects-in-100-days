const inputEl = document.querySelector("#textInput");
const btnEl = document.querySelector(".btn");
const listEl = document.querySelector("ul");
const countEL = document.querySelector(".count");

btnEl.addEventListener("click", addTask);

let items = [];
let id = 0;
function addTask() {
  let value = inputEl.value.trim();
  if (value) {  
    id++;
    let item = {
      id: id,
      value: value,
      completed: false
    };
   
    items.unshift(item);

    displayItems(items);
    inputEl.value = "";
    inputEl.focus();

    countEL.innerHTML = items.length
  }
}

window.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    btnEl.click();
  }
});

function displayItems(items) {
    let liHTML="";
    items.forEach(item => {
        liHTML += 
        `<li>
            <div class="check-container">
                <input type="checkbox" class="checkbox">
                <div class="fake_cb">
                    <span class="tick">&#10003;</span>
                </div>
            </div>
            <span>${item.value}</span>
        </li>`
     });
  
    listEl.innerHTML = liHTML;
 
}
