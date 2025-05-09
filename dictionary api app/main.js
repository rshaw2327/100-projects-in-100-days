function showData() {
  const dictCont = document.getElementById("dictCont");
  dictCont.innerHTML = "";

  const wordSearch = document.createElement("div");
  wordSearch.className = "word-search";

  const wordInput = document.createElement("input");
  wordInput.className = "w-Input";
  
  const btn = document.createElement("button");
  btn.className = "btn";
  btn.innerHTML = "search";

  const linebreak = document.createElement("hr")
  linebreak.className="hr"
  linebreak.innerHTML=""

  let word = "";
  wordSearch.append(wordInput, btn,linebreak);
  wordInput.addEventListener("input", function () {
    word = wordInput.value;
  });
  dictCont.append(wordSearch);
  btn.addEventListener("click", () => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((res) => res.json())
      .then((d) => {
        let data = d[0];
        console.log(data);
        const wordDiv = document.createElement("div");
        wordDiv.className = "word-search";

        const wordHeading = document.createElement("h1");
        wordHeading.className = "word";
        wordHeading.innerHTML = data.word;

        const audioText = document.createElement("audio");
        audioText.className = "fa-solid";
        audioText.src = data.phonetics[0]["audio"];
        audioText.controls = true;

        const meaningCont = document.createElement("div");
        meaningCont.className = "meaning-cont";

        const grammar = document.createElement("span");
        grammar.className = "grammar";
        grammar.innerHTML = data.meanings[0]["partOfSpeech"];

        const meaning = document.createElement("p");
        let meaningValue = data.meanings[0].definitions[0]["definition"];
        console.log(meaningValue);
        meaning.className = "meaning";
        meaning.innerHTML = meaningValue;

        let example = document.createElement("p");
        let exampleValue = data.meanings[0].definitions[0].example;
        if (exampleValue) {
          example.className = "example";
          example.innerHTML = exampleValue;
        }

        dictCont.append(wordSearch, wordDiv, meaningCont);
        wordDiv.append(wordHeading, audioText);
        meaningCont.append(grammar, meaning, example);
      });
  });
}
showData();
