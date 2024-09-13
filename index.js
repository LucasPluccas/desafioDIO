// Crie uma variável para armazenar o nome e a quantidade de XP do herói, depois utilize uma estrutura de decisão para apresentar alguma mensagem abaixo

//Se XP for < que 1.000 = Ferro
//XP entre 1.001 e 2.000 = Bronze
//XP entre 2.001 e 5.000 = Prata
//XP entre 5.001 e 7.000= Ouro
//XP entre 7.001 e 8.000 = Platina
//XP entre 8.001 e 9.000 = Ascendente
//XP entre 9.001 e 10.000 = Imortal
//XP > ou igual a 10.001 = Radiante

//#saída
//printar uma mensagem:
// O herói de nome (nome) está no nível de (nivel)

let name ="Lucas Kenobi"
let xp = ""
let nivel =""

switch(xp){
    case (XP < 1.000):
        nivel = "Ferro"
        break;
    case (xp >1.000 && xp <2.001):
    nivel = "Bronze"
break;
    case (xp > 2.000 && xp < 5.001):
     nivel = "Prata"
    case (xp > 5.000 && xp < 7.000):
     nivel = "Ouro"
    case (xp > 7.000 && xp < 8.001):
     nivel ="Platina"
    case (xp > 8.000 && xp < 9.001):
     nivel = "Ascendente"
    case (xp > 9.000 && xp < 10.001):
     nivel="Imortal"
    case (xp >= 10.001):
     nivel="Radiante"
        default:
console.log("Insira o xp do herói)
}


