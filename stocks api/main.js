function showData() {
  const searchEl = document.querySelector(".search");
  searchEl.className = "search";

  const inputEl = document.createElement("input");
  inputEl.className = "input";

  let word = "";
  inputEl.addEventListener("input", function () {
    word = inputEl.value;
  });

  const btnEl = document.createElement("button");
  btnEl.className = "btn";
  btnEl.innerHTML = "search";
  searchEl.append(inputEl, btnEl);

  btnEl.addEventListener("click", () => {
    fetch("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&outputsize=full&apikey=demo")
      .then((res) => res.json())
      .then((data) => {
        
        // console.log(data)

        const stockContEl = document.createElement("div");
        stockContEl.className = "stock-cont";

        const infoIntradayEl = document.createElement("h1");
        infoIntradayEl.className = "infoIntraday";
        infoIntradayEl.innerHTML = data["Meta Data"]["1. Information"];

        const symbolHEl = document.createElement("h2");
        symbolHEl.innerHTML = "Enter the Symbol";

        const symbolSpanEl = document.createElement("span");
        symbolSpanEl.className = "symbol";
        symbolSpanEl.innerHTML = data["Meta Data"]["2. Symbol"];

        const lastRefreshedHEl = document.createElement("h2");
        lastRefreshedHEl.innerHTML = "Last refreshed";

        const lastRefreshedSpanEl = document.createElement("span");
        lastRefreshedSpanEl.className = "lastRefresh";
        lastRefreshedSpanEl.innerHTML = data["Meta Data"] ["3. Last Refreshed"];

        const intervalHEl = document.createElement("h2");
        intervalHEl.innerHTML = "Interval";

        const intervalSpanEl = document.createElement("span");
        intervalSpanEl.className = "interval";
        intervalSpanEl.innerHTML =data["Meta Data"]["4. Interval"];

        const outputHEl = document.createElement("h2");
        outputHEl.innerHTML = "Output size";

        const outputSpanEl = document.createElement("span");
        outputSpanEl.className = "output";
        outputSpanEl.innerHTML =data["Meta Data"]["5. Output Size"];

        const timeZoneHEl = document.createElement("h2");
        timeZoneHEl.innerHTML = "Time Zone";

        const timeZoneSpanEl = document.createElement("span");
        timeZoneSpanEl.className = "timezone";
        timeZoneSpanEl.innerHTML =data["Meta Data"]["6. Time Zone"];

        stockContEl.append(
          infoIntradayEl,
          symbolHEl,
          symbolSpanEl,
          lastRefreshedHEl,
          lastRefreshedSpanEl,
          intervalHEl,
          intervalSpanEl,
          outputHEl,
          outputSpanEl,
          timeZoneHEl,
          timeZoneSpanEl
        );

        const realTimedataContEl = document.createElement("div");
        const timeSeries = data["Time Series (5min)"]
        realTimedataContEl.className = "realTimedataCont";
        
        Object.keys(timeSeries).sort().reverse().forEach((time,index ) =>{
          const d = timeSeries[time]
          const open = parseFloat(d["1. open"])
          const high = parseFloat(d["2. high"])
          const low = parseFloat(d["3. low"])
          const close = parseFloat(d["4. close"])
          const volume = parseFloat(d["5. volume"])

          const timeHEl = document.createElement("h2");
          timeHEl.innerHTML = "time";
  
          const timeSpanEl = document.createElement("span");
          timeSpanEl.className = "time";
          timeSpanEl.innerHTML = d;
  
          const openHEl = document.createElement("h2");
          openHEl.innerHTML = "Open";
  
          const openSpanEl = document.createElement("span");
          openSpanEl.className = "open";
          openSpanEl.innerHTML = open;
  
          const highHEl = document.createElement("h2");
          highHEl.innerHTML = "high";
  
          const highSpanEl = document.createElement("span");
          highSpanEl.className = "high";
          highSpanEl.innerHTML = high;
  
          const lowHEl = document.createElement("h2");
          lowHEl.innerHTML = "low";
  
          const lowSpanEl = document.createElement("span");
          lowSpanEl.className = "low";
          lowSpanEl.innerHTML =low;
  
          const closeHEl = document.createElement("h2");
          closeHEl.innerHTML = "close";
  
          const closeSpanEl = document.createElement("span");
          closeSpanEl.className = "close";
          closeSpanEl.innerHTML = close;
  
          const volumeHEl = document.createElement("h2");
          volumeHEl.innerHTML = volume;
  
          const volumeSpanEl = document.createElement("span");
          volumeSpanEl.className = "volume";
          volumeSpanEl.innerHTML = data["Meta Data"]["5. volume"]

          realTimedataContEl.append(timeHEl,timeSpanEl,openHEl,openSpanEl,highHEl,highSpanEl,lowHEl,lowSpanEl,closeHEl,closeSpanEl,volumeHEl,volumeSpanEl)


        })
       

       

        
        

        

       

        searchEl.append(stockContEl,realTimedataContEl)


      });
 });
}

showData();
