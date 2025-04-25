const buttonEl = document.querySelector("button")
const emojiNameEL = document.getElementById("emoji-name")

const emoji = [];

async function getEmoji(){
    let response = await fetch("https://emoji-api.com/emojis?access_key=8f53e20a46f3520615c7bce7586fd381ff1e995e")

    data = await response.json()
    
    for (let i=0; i<1500;i++)
        emoji.push({
            emojiName: data[i].character,
            emojiCode: data[i].unicodeName,

    });
}


getEmoji()



buttonEl.addEventListener("click", ()=>{
    const randomNum = Math.floor(Math.random() * emoji.length);
    buttonEl.innerText = emoji[randomNum].emojiName,
    emojiNameEL.innerText = emoji[randomNum].emojiCode
   

})
