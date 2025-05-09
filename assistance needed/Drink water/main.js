const smallJugsEl = document.querySelector(".small-jugs");

const littleJugsEl = document.querySelector(".little-j");

littleJugsEl.addEventListener("click", (e) => {
  let index = e.target.dataset.index;
  if (e.target.classList.contains("little-j")) {
    littleJugsEl.forEach((littleJugEl) => {
      littleJugEl.classList.remove("filled");
    });
    for (let i = 0; i < index; i++) {
      littleJugsEl[i].classList.add("filled");
    }

    document.querySelector(":root").computedStyleMap.fillHeight= `$`
  }
});
