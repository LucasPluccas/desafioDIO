
let name ="Lucas Kenobi"
let xp = 
let nivel = "";

switch (true) {
    case (xp < 1000):
        nivel = "Ferro"
        break;
    case (xp >=1000 && xp <=2000):
    nivel = "Bronze"
        break;
    case (xp > 2000 && xp <= 5000):
     nivel = "Prata"
        break;
    case (xp > 5000 && xp <= 7000):
     nivel = "Ouro"
        break;
    case (xp > 7000 && xp <= 8000):
     nivel ="Platina"
        break;
    case (xp > 8000 && xp <= 9000):
     nivel = "Ascendente"
        break;
    case (xp > 9000 && xp <= 10000):
     nivel="Imortal"
        break;
    case (xp >= 10001):
     nivel="Radiante"
        break;
        default:
console.log("Insira o xp do herói")
}

console.log("O herói de nome " + name + " está no nível de " + nivel)
