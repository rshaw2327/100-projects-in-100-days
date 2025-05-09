function showData() {
  const dictCont = document.getElementById("dictCont");
  dictCont.innerHTML = "";

  const wordSearch = document.createElement("div");
  wordSearch.className = "word-search";

  const wordInput = document.createElement("input");
  wordInput.className = "w-Input";
  let word = "";

  wordInput.addEventListener("input", function () {
    word = wordInput.value;
  });

  const btn = document.createElement("button");
  btn.className = "btn";
  btn.innerHTML = "search";
  wordSearch.append(wordInput, btn);

  dictCont.append(wordSearch);
  btn.addEventListener("click", () => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((res) => res.json())
      .then((d) => {
        let data = d[0];
        // console.log(data);
        const wordDiv = document.createElement("div");
        wordDiv.className = "word-search";

        const wordHeading = document.createElement("h1");
        wordHeading.className = "word";
        wordHeading.innerHTML = data.word;

        const audioText = document.createElement("audio");
        audioText.className = "fa-solid";
        if(data.phonetics[0]["audio"]){
        audioText.src = data.phonetics[0]["audio"];
        audioText.controls = true;
      }

        const meaningCont = document.createElement("div");
        meaningCont.className = "meaning-cont";
        // console.log(data.meanings)

        data.meanings.map((item, index) => {
          const mCont = document.createElement("div");
          mCont.className = "m-cont";

          const grammar = document.createElement("span");
          if(item["partOfSpeech"]){
          grammar.className = "grammar";
          grammar.innerHTML = item["partOfSpeech"];
          mCont.append(grammar);
        }

          item.definitions.map((d, i) => {

            const meaning = document.createElement("p");
            if(d.definition){
            meaning.className = "meaning";
            meaning.innerHTML ="Meaning of the word :-" + d.definition;
            mCont.append(meaning);
          }
          

            let example = document.createElement("p");
            if (d.example) {
              example.className = "example";
              example.innerHTML = "Example :-" + d.example;
              mCont.append(example);
            }
            
          });

          meaningCont.append(mCont);
        });
        dictCont.append(wordSearch);
        dictCont.append(wordSearch, wordDiv, meaningCont);
        wordDiv.append(wordHeading, audioText);
      });
  });
}

showData();
