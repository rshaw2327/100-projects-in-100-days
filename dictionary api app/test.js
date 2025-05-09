let word="beautiful"
fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((res) => res.json())
      .then((d) => {
        let data=d[0]
        // console.log(data)
        let wordSearch=data.word
        let partsOfSpeech=[]
        let meanings=[]
        let examples=[]
        data.meanings.map((item,index)=>{
            meanings.push(item.definitions[0].definition)
            examples.push(item.definitions[0].example)
            partsOfSpeech.push(item.partOfSpeech)
        } )
        console.log(partsOfSpeech)
        console.log(meanings)
        console.log(examples)

        

      })



      const grammar2 = document.createElement("span");
      grammar2.className = "grammar2";
      grammar2.innerHTML = item.partsOfSpeech;

      const meaning2 = document.createElement("p");
      meaning2.className = "meaning2";
      meaning2.innerHTML = item.definition;

      let example2 = document.createElement("p");
      if (example) {
        example2.className = "example2";
        example2.innerHTML = item.example;   
      }

        const grammar3 = document.createElement("span");
      grammar3.className = "grammar";
      grammar3.innerHTML = item.partsOfSpeech;

      const meaning3 = document.createElement("p");
      meaning3.className = "meaning";
      meaning3.innerHTML = item.definition;

      let example3 = document.createElement("p");
      if (example3) {
        example3.className = "example";
        example3.innerHTML = item.example; 
      }  

