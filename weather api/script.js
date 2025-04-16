function showData() {
  let weatherCont = document.querySelector(".weather-cont");
  weatherCont.innerHTML = "";
  const citySearch = document.createElement("div");

  let inputCt = document.createElement("input");
  inputCt.type = "text";
  inputCt.placeholder = "enter the city name";
  inputCt.className = "inputCt";

  let btn = document.createElement("button");
  citySearch.className = "city-search";
  btn.className = "btn";
  btn.innerHTML = "Search";

  citySearch.append(inputCt, btn);
  weatherCont.append(citySearch);
  function fetchWeather() {
    let city = inputCt.value;
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=943bb53b55c8476a8fa04124252202&q=${
        city || "london"
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      
        console.log(city);
        weatherCont.innerHTML = "";
        weatherCont.appendChild(citySearch);

        let wInfo = document.createElement("div");
        wInfo.className = " w-info";

        let img = document.createElement("img");
        img.className = "img";
        img.src = data.current.condition.icon;

        let region = document.createElement("h3")
        region.className = "h3"
        region.innerHTML=data.location.tz_id;
    
        let hcelicus = document.createElement("h2");
        hcelicus.className = "h2" ;
        hcelicus.innerHTML = data.current.temp_c + " *c";

        let time = document.createElement("h2");
        time.className = "h2" ;
        time.innerHTML = data.location.localtime;

        let hcity = document.createElement("h2");
        hcity.className = "hcity";
        hcity.innerHTML = data.location.region;

        let windCont = document.createElement("div");
        windCont.className = "wind-cont";

        let hum = document.createElement("h3");
        hum.className = "hum";
        hum.innerHTML = data.current.humidity + " Humidity";

        let wind = document.createElement("h3");
        wind.className = "wind";
        wind.innerHTML = data.current.wind_kph + " wind speed";

        windCont.append(hum, wind);
        wInfo.append(img,time,region, hcelicus, hcity);

        weatherCont.append(citySearch, wInfo, windCont);
      });
  }
  btn.addEventListener("click", fetchWeather);
}
showData();
