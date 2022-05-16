//const myName = "Giordano";
//const birthCity = "Araraquara";
//let birthYear = 2030;


//console.log(myName);
//console.log(birthCity);
//console.log(birthYear);

//const base = 5;
//const height = 8;
//const area = base + height;
//const peimeter = base * 2 + height * 2;


//console.log(area)
//console.log(peimeter)

/*
const nota = 59
;
if (nota > 80) {
    console.log("Parabéns, você foi aprovada(o)!");

} else if (nota >= 60) {
    console.log("Você está na nossa lista de espera");
} else {
    console.log("Você foi reprovada(o)");
}

*/

/*const currentHour = 10;
let message = "";

if (currentHour >= 22) {
    console.log("Não deveríamos comer nada, é hora de dormir");
}
else if (currentHour >= 18 && currentHour < 22) {
    console.log("Rango da noite, vamos jantar :D");
}
else if (currentHour >= 14 && currentHour < 18) {
    console.log("Vamos fazer um bolo pro café da tarde?");
}
else if (currentHour >= 11 && currentHour < 14) {
    console.log("Hora do almoço!!!");
}else{
    console.log("Hmmm, cheiro de café recém passado")
}
 */

/*let weekDay ="sabado"

if(weekDay === "Segunda" || weekDay === "Terça" || weekDay === "Quarta" || weekDay === "Quinta" || weekDay === "Sexta" ){
    console.log("Oba, mais um dia de aprendizado na Trybe >:D")
}
else{
    console.log("FINALMENTE, descanso merecido UwU")
} */

/*
let trafficLight = "vermelho";

switch(trafficLight){
    case "vermelho":
    console.log("pare")
    break;

    case "amarelo":
    console.log("atenção")
    break;

    case "verde":
    console.log("prossiga")
    break;

    default:
        console.log("valor não indentificado")
} */

/*
const a = 4;
const b = 6;
const c = 13;

let Addition = a + b;
let Subtraction = a - b;
let Multiplication = a * b;
let Division = a / b;
let Module = a % b;

console.log(Addition)
console.log(Subtraction)
console.log(Multiplication)
console.log(Division)
console.log(Module)





    let maior = 0;

    if (a > b) {
        maior = a;
        console.log("A variável A contem o maior número");
    } else {
        maior = b;
        console.log("A variável B contem o maior número ");
    }

    if (a > b && b > c){
        maior = a;
        console.log("A variável A contem o maior número");
    } else if(b > c){
        maior = b;
        console.log("A variável B contem o maior número");
    }else {
        maior = c;
        console.log("A variável C contem o maior número");
    }
 */


let number = -8;

if (number >= 0) {
    console.log("O número é positivo")
} else {
    console.log("O número é negativo")
}

const A1 = 50;
const A2 = 70;
const A3 = 60;

let triangulo;

if (A1 < 0 || A2 < 0 || A3 < 0) {
    triangulo = "invalid";
}
else if ((A1 + A2 + A3) <= 180) {
    triangulo = true;
}
else {
    triangulo = false;
}

console.log(triangulo)



let peca = "Rei";
let movimento;

if (peca == "Rei") {
    movimento = "1 casa para frente, esquerda, direita"
}
else if (peca == "Rainha") {
    movimento = "Qualque sentido"
}
else if (peca == "Torre") {
    movimento = "Qauntas casas quiser para frente, esquerda, direita"
}
else if (peca == "Bispo") {
    movimento = "Diagonais"
}
else if (peca == "Cavalo") {
    movimento = "Para frente, esquerda, direita"
}
else if (peca == "peao") {
    movimento = "Para frente, esquerda, direita"
}

console.log(movimento);



let porcentagem = 0;
let nota = 85;

if (porcentagem >= 90) {
    nota = "A"
}
else if (porcentagem >= 80) {
    nota = "B"
}
else if (porcentagem >= 70) {
    nota = "C"
}
else if (porcentagem >= 60) {
    nota = "D"
}
else if (porcentagem >= 50) {
    nota = "E"
}
else {
    nota = "F"
}


console.log(nota)


const A = 15;
const B = 4;
const C = 1;

if (A % 2 == 0 || B % 2 == 0 || C % 2 == 0) {
    console.log("true")
} else {
    console.log("false")
}

const N1 = 10;
const N2 = 5;
const N3 = 2;

if (N1 % 2 == !0 || N2 % 2 == !0 || N3 % 2 == !0) {
    console.log("true")
} else {
    console.log("false")
}

/*Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto) */

const valorCusto =10;
const impostoSobreOCusto = valorCusto * 0.20;
let valorVenda = -8;
let valorCustoTotal = valorCusto + impostoSobreOCusto

let lucro = valorVenda - valorCustoTotal;



if(valorCusto < 0 ||  valorVenda < 0){
    console.log("Entrada de valor inválida")
}else{
    console.log(lucro);
}



