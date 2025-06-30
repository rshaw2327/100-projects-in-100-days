const tdEls = document.querySelectorAll("td");
const formContEl = document.querySelector(".form-container");
const btnEl = document.querySelector(".btn");
const spanDateEl = document.querySelector(".date");
const submitBtn = document.querySelector(".submit-btn");
const inputTitleEl = document.getElementById("title");
const inputTimeEl = document.getElementById("time");
const eventContEl = document.querySelector(".event-container")

let selectedDate = "";
let events = JSON.parse(localStorage.getItem("events")) || [];
console.log(events)
tdEls.forEach((td) => {
  td.addEventListener("click", (e) => {
    formContEl.classList.add("visible");
    selectedDate = spanDateEl.innerText = td.innerText.slice(0, 2);
    // console.log(isEvent(selectedDate))

    if(isEvent(selectedDate) ){
      eventContEl.classList.add("visible")
      fillEvents(selectedDate)
    } else {
      eventContEl.classList.remove("visible")
    }

  });
});

function isEvent(selectedDate){
 return events.find(event => event.selectedDate == selectedDate)
  
}

function fillEvents(selectedDate){
  eventContEl.innerHTML=""
  events.forEach(event => {
    if(event.selectedDate == selectedDate){
      eventContEl.innerHTML += 
      `
       <div class="event-box">
                <h3>${event.title}</h3>
                <p>${event.selectedDate}</p>
                <p>${event.time}</p>

            </div>
      `
    }
  })

}

btnEl.addEventListener("click", () => {
  formContEl.classList.remove("visible");
});

function today() {
  let date = new Date();
  let dt = date.getDate();
  tdEls.forEach((td) => {
    if (td.innerText == dt) {
      td.classList.add("today");
    }
  });
}
today();

submitBtn.addEventListener("click", () => {
  const time = inputTimeEl.value;
  const title = inputTitleEl.value;
  let note = {
    time: time,
    title: title,
    selectedDate: selectedDate,
  };
  events.push(note);

  localStorage.setItem("events", JSON.stringify(events));

  formContEl.classList.remove("visible");
  alert("note saved");

  inputTimeEl.value = "";
  inputTitleEl.value = "";
});

function getEvents() {
  let data = JSON.parse(localStorage.getItem("events"));

  let result = Object.groupBy(data, ({ selectedDate }) => selectedDate);
  let entries = Object.entries(result);

  entries.forEach((entry) => {
    console.log(entry[0]);
    tdEls.forEach((td) => {
      if (td.innerText == entry[0]) {
        td.innerHTML += `<small class="count">${entry[1].length} events</small>`;
      }
    });
  });
}
getEvents();
