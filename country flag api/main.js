function showData() {
  const flagCont = document.getElementById("flag-cont");
  flagCont.className = "flag-cont";

  const inputEl = document.createElement("input");
  inputEl.className = "input";
  let country = "";

  inputEl.addEventListener("input", () => {
    country = inputEl.value;
  });

  const btnEl = document.createElement("button");
  btnEl.className = "btn";
  btnEl.innerHTML = "search";

  flagCont.append(inputEl, btnEl);

  btnEl.addEventListener("click", () => {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
      .then((res) => res.json())
      .then((d) => {
        let data = d[0];

        const imgCont = document.createElement("div");
        imgCont.className = "img-cont";

        const imageEl = document.createElement("img");
        imageEl.className = "img";
        imageEl.src = data.flags.png;

        const countryNameEl = document.createElement("h1");
        countryNameEl.className = "h1";
        countryNameEl.innerHTML = data.name.common;

        const infoCont = document.createElement("div");
        infoCont.className = "info-cont";

        const captialPEl = document.createElement("p");
        captialPEl.innerHTML = "Capital";

        const captialSpanEl = document.createElement("span");
        captialSpanEl.className = "Capital";
        captialSpanEl.innerHTML = data.capital;

        const populationPEl = document.createElement("p");
        populationPEl.innerHTML = "Population";

        const populationSpanEl = document.createElement("span");
        populationSpanEl.className = "Population";
        populationSpanEl.innerHTML = data.population;

        const continentPEl = document.createElement("p");
        continentPEl.innerHTML = "Continent";

        const contientSpanEl = document.createElement("span");
        contientSpanEl.className = "Continent";
        contientSpanEl.innerHTML = data.continents;

        const currencyValues=Object.values(data.currencies)
        console.log(currencyValues)
        const currencyPEl = document.createElement("p");
        const currencySpanEl = document.createElement("span");
        currencyValues.map((item,index) => {
          currencyPEl.innerHTML = "Currency";
  
          currencySpanEl.className = "Currency";
          currencySpanEl.innerHTML = item.name;

        })
   

        const languageValues = Object.values(data.languages);
        let langString = " ";
        const languagePEl = document.createElement("p");
        const languageSpanEl = document.createElement("span");
        languageSpanEl.className = "Language";
        languagePEl.innerHTML = "Language";
        languageValues.map((item, index) => {
          langString = langString + item + ", ";

          languageSpanEl.innerHTML = langString;

        });
        infoCont.append(languagePEl, languageSpanEl);

        infoCont.append(
          captialPEl,
          captialSpanEl,
          populationPEl,
          populationSpanEl,
          continentPEl,
          contientSpanEl,
          currencyPEl,
          currencySpanEl
        );
        imgCont.append(imageEl, countryNameEl);
        flagCont.append(imgCont, infoCont);
      });
  });
}

showData();
