const text = [
    "xd vaya fortnite chamba sigma skibidi sigma mewing chiquibai decadencia esternocleidomastoideo parangaricutirimicuaro fernanfloo bola hola te pica la cola con tu el ese gira calzon girasol",
    "Pelotilla Chiripiorca Fufurufa Cachivache Tronchamulas Patatús Chanchullo Zancadilla Pirrimplín Gamusino Rebumbio Tiquismiquis Trotamundos Chambelán Chincheta Gaznápiro Cuchipanda Zampabollos Trapacería Marimorena Pelotilla chiripiorca fufurufa cachivache tronchamulas patatús chanchullo zancadilla pirrimplín gamusino Rebumbio tiquismiquis trotamundos chambelán chincheta gaznápiro cuchipanda zampabollos trapacería marimorena",
    "Trompetilla Trastupijar Zancarrón Mofletudo Chisgarabís Mamarracho Bobalicón Espantajo Birlibirloque Trotaconventos Paparrucha Farfullero Mandangas Zascandil Retortijón Cuchufleta Zamacuco Marimacho Chinflón Gallifante",
    "Cachiporra Trapisonda Alfeñique Chifladura Barrabás Chiflado Chapuza Espantapájaros Garambaina Patarata Chupatintas Zángano Farandulero Tricorniado Rompemuelas Malandrín Papanatas Burumballa Merengue Sacapuntas"
];

const form = document.querySelector(".lore-form");
const amountInput = document.getElementById("amount");
const result = document.querySelector(".lore-text");

const connectors = ['y', 'o', 'pero', 'sin embargo', 'además', 'por otro lado', 'en conclusión', 'por lo tanto', 'sin embargo', 'aunque'];

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
            const sentenceWithConnectors = words.reduce((acc, word, index) => {
                if (index === 0) {
                    return word;
                } else {
                    const connector = connectors[Math.floor(Math.random() * connectors.length)];
                    return acc + ' ' + connector + ' ' + word;
                }
            }, '');
            return `<p class="result">${sentenceWithConnectors}</p>`;
        }).join("");
        result.innerHTML = tempText;
    }
});
