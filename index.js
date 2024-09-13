
let name ="Lucas Kenobi"
let xp = 
let nivel = "";

switch (true) {
    case (xp < 1000):
        nivel = "Ferro"
        break;
    case (xp >1000 && xp <2001):
    nivel = "Bronze"
        break;
    case (xp > 2000 && xp < 5001):
     nivel = "Prata"
        break;
    case (xp > 5000 && xp < 7001):
     nivel = "Ouro"
        break;
    case (xp > 7000 && xp < 8001):
     nivel ="Platina"
        break;
    case (xp > 8000 && xp < 9001):
     nivel = "Ascendente"
        break;
    case (xp > 9000 && xp < 10001):
     nivel="Imortal"
        break;
    case (xp >= 10001):
     nivel="Radiante"
        break;
        default:
console.log("Insira o xp do herói")
}

console.log("O herói de nome " + name + " está no nível de " + nivel)
