
const words: string[] = [
    "COMPUTADORA",
    "AGUACATE",
    "VEGETA",
    "GOKU",
    "FELIX",
    "CELULAR",
];

export function getRandomWord(){

    const randomIndex = Math.round(Math.random()*words.length);

    return words[randomIndex];
}