const firstArray = [
    "Manger",
    "Boire",
    "Courir",
    "Marcher",
    "Penser",
    "Crier",
    "Sourir",
    "Attendre",
    "Aimer",
    "Coder"
];

const secondArray = [
    "est plus important que",
    "vaut mieux que",
    "ce n'est rien comparé à",
    "fait pitié face à",
    "n'aura jamais raison par rapport à",
    "aura toujours plus de valeur que",
    "aura plus de conséquences que",
    "vainquera",
    "miskine",
    "c'est comme"
];

const thirdArray = [
    "l'amour",
    "la mort",
    "une bonne raclette",
    "la souris",
    "le pied de Michelle",
    "Le Café du coin d'en bas de la rue du bout de la ville d'en face du port",
    "Le Javascript",
    "OpenClassrooms",
    "l'année 2019",
    "Jackie Chan"
];

function random () {
    return Math.floor(Math.random()*10);
}

let numChoosed = 0;
while (numChoosed <= 0 || numChoosed > 5) {
    numChoosed = window.prompt("Combien de citations entre 1 & 5 voulez vous (default : 1)?", 1);
    if (isNaN(numChoosed)) {
        numChoosed = 0;
    }
}

for(var i = numChoosed; i > 0; i--) {
    let randFirst = random();
    let randSecond = random();
    let randThird = random();

    let firstPart = firstArray[randFirst];
    let secondPart = secondArray[randSecond];
    let thirdPart = thirdArray[randThird];

    let citation = `${firstPart} ${secondPart} ${thirdPart}`;

    console.log(citation);
}