wordsApp = {};

// curtain JS
// wordsApp.curtainRise = () => {
//     const curtain = document.querySelector(`.curtain`)
//     curtain.addEventListener(`click`, () => {
//         curtain.classList.add(`topCurtainRise`)
//     })
// }

//get random word
wordsApp.getWord = () => {
    wordsApp.randomWordApiUrl = "https://random-word-api.herokuapp.com/word?number=1";
    fetch(wordsApp.randomWordApiUrl)
        .then((response) => {
            return response.json();
        })
        .then((jsonResponse) => {
            wordsApp.getDef(jsonResponse[0]);
        })
}

//get random word definition
wordsApp.getDef = (randomWord) => {    
    merriamApiUrl = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${randomWord}`;
    merriamApiKey = "10c2ccc6-00e7-4a3e-907d-d70bbfbacb4b";
    const url = new URL(merriamApiUrl);
    
    url.search = new URLSearchParams({
        key: merriamApiKey
    })

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((jsonResponse) => {
            console.log(jsonResponse);
        })
}

wordsApp.init = () => {
    // wordsApp.curtainRise();
    wordsApp.getWord();
}

wordsApp.init();