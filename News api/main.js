fetch(
  "https://newsdata.io/api/1/news?apikey=pub_750950abed32227867a32bf8aa9910282adbf&q=sports&country=in,gb,wo&language=en&category=business,crime,education,food,health"
)
  .then((res) => res.json())
  .then((data) => showData(data));

const main = document.querySelector("main");
const header = document.createElement("header");

const NewsHeading = document.createElement("h1");
NewsHeading.innerHTML = "News Api";

const InputDivButton = document.createElement("div");
InputDivButton.className = "inputBtn";

const inputEl = document.createElement("input");
inputEl.className = "input";

const btnEl = document.createElement("button");
btnEl.className = "btn";
btnEl.innerHTML = "search";

InputDivButton.append(inputEl, btnEl);
header.append(NewsHeading, InputDivButton);


function showData(data) {
  console.log(data);
  const containerEl = document.createElement("div");
  containerEl.className = "cont";

  data.results.map((item, index) => {
    const newsContEl = document.createElement("div");
    newsContEl.className = "newsCont";

    const TitleDivDate = document.createElement("div");
    TitleDivDate.className = "titleDate";

    const titleh1EL = document.createElement("h1");
    titleh1EL.className = "title";
    titleh1EL.innerHTML = item.title;

    const dateEl = document.createElement("h4");
    dateEl.className = "date";
    dateEl.innerHtml = item.pubDate;

    const imgEl = document.createElement("img");
    imgEl.className = "img";
    imgEl.src = item.image_url;

    const descriptionEL = document.createElement("p");
    descriptionEL.className = "description";
    descriptionEL.innerHTML = item.description;

    const categoryEl = document.createElement("p");
    categoryEl.className = "category";
    categoryEl.innerHTML = item.category;

    const languageEL = document.createElement("p");
    languageEL.className = "language";
    languageEL.innerHTML = item.language;

    const countryEl = document.createElement("p");
    countryEl.className = "country";
    countryEl.innerHTML = item.country;

    const sourceIdEl = document.createElement("p");
    sourceIdEl.className = "source_id";
    sourceIdEl.innerHTML = item.source_id;

    const sourceNameEl = document.createElement("p");
    sourceNameEl.className = "soucre_name";
    sourceNameEl.innerHTML = item.source_name;

    const sourceUrlEl = document.createElement("url");
    sourceUrlEl.className = "soucre_url";
    sourceUrlEl.innerHTML = item.source_url;

    const sourceIconEl = document.createElement("url");
    sourceIconEl.className = "soucre_icon";
    sourceIconEl.innerHTML = item.source_icon;

    const showMoreBtn = document.createElement("button");
    showMoreBtn.className = "showMoreBtn";
    showMoreBtn.innerHTML = "Show More";

    showMoreBtn.addEventListener("click", function () {
      window.open(item.source_url,"_blank")
      
    
    });

    containerEl.append(newsContEl);
    newsContEl.append(
      TitleDivDate,
      titleh1EL,
      dateEl,
      imgEl,
      descriptionEL,
      categoryEl,
      languageEL,
      countryEl,
      sourceIdEl,
      sourceNameEl,
      sourceUrlEl,
      sourceIconEl,
      showMoreBtn
    );
    main.append(header, containerEl);
  });
}
