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
    "une bonne raclette",
    "la mort",
    "Jackie Chan",
    "un cerveau de souris",
    "le pied de Michelle",
    "Le Café du coin d'en bas de la rue du bout de la ville d'en face du port",
    "Le Javascript",
    "l'année 2019",
    "OpenClassrooms",
];

function main() {
    let choice = '';
    while (choice !== 'basic' && choice !== 'foolish') {
        choice = window.prompt("Quel mode voulez vous : Basic ou Foolish?", "foolish").toLowerCase();
    }

    let numChoosed = 0;
    while (numChoosed <= 0 || numChoosed > 5) {
        numChoosed = window.prompt("Combien de citations entre 1 & 5 voulez vous (default : 1)?", 1);
        if (isNaN(numChoosed)) {
            numChoosed = 0;
        }
    }

    if (choice === 'basic') {
        for(var i = numChoosed; i > 0; i--) {
            let rand = random();

            let firstPart = firstArray[rand];
            let secondPart = secondArray[rand];
            let thirdPart = thirdArray[rand];
        
            let citation = `${firstPart} ${secondPart} ${thirdPart}`;
        
            console.log(citation);
        }
    } else {
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
    }
}

function random () {
    return Math.floor(Math.random()*10);
}

main();
let again = ''
while (again !== 'non') {
    again = window.prompt("Voulez vous recommencer?", "non").toLowerCase();
    switch (again) {
        case 'oui':
            main();
            again = '?';
            break;
        case 'non':
            break;
        default:
            break;
    }
}