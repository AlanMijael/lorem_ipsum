
const text = [
  "xd vaya fortnite chamba sigma sigma mewing chiquibai decadencia esternocleidomastoideo parangaricutirimicuaro fernanfloo bola calzon girasol omaigadfloo decadencia 777 hotmail don pollo",
    
  "Pelotilla chiripiorca fufurufa cachivache tronchamulas patatús chanchullo zancadilla pirrimplín gamusino Rebumbio tiquismiquis trotamundos chambelán chincheta gaznápiro cuchipanda zampabollos trapacería marimorena",
    
  "Trompetilla Trastupijar Zancarrón Mofletudo Chisgarabís Mamarracho Bobalicón Espantajo Birlibirloque Trotaconventos Paparrucha Farfullero Mandangas Zascandil Retortijón Cuchufleta Zamacuco Marimacho Chinflón Gallifante",
    
  "Cachiporra Trapisonda Alfeñique Chifladura Barrabás Chiflado Chapuza Espantapájaros Garambaina Patarata Chupatintas Zángano Farandulero Tricorniado Rompemuelas Malandrín Papanatas Burumballa Merengue Sacapuntas",
    
  "chispas caracoles repampanos caray caramba mauser awiwi recaspita caspita tuerca pinky madre awebiux abuelita"
];
const form = document.querySelector(".lore-form");

const amountInput = document.getElementById("amount");

const result = document.querySelector(".lore-text");

const connectors = ['y', 'o', 'pero', 'habia', 'además', 'por otro lado', 'en conclusión', 'por lo tanto', 'tu',"su","el","ese","tambien","este","entoces" ,'aunque'];

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}


form.addEventListener("submit", function(e) {
    e.preventDefault(); 
    
    const value = parseInt(amountInput.value);
    
    const random = Math.floor(Math.random() * text.length);
    
    if (isNaN(value) || value < 0 || value > 9) {
        result.innerHTML = `<p class="result">${text[random]}</p>`;
    } else {
        let tempText = text.slice(0, value);
        tempText = tempText.map(function(item) {
            const words = item.split(' ');
            
            const shuffledWords = words.sort(() => Math.random() - 0.5);
            
            const sentenceWithConnectors = shuffledWords.reduce((acc, word, index) => {
                if (index === 0) {
                    return word; 
                } else {
                    const connector = getRandomElement(connectors); 
                    return acc + ' ' + connector + ' ' + word; 
                }
            }, '');
            return `<p class="result">${sentenceWithConnectors}</p>`; 
        }).join("");
        result.innerHTML = tempText;
    }
});
