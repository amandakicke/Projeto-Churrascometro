/* Carne (carne boi, porco, linguiça, frango, tudo junto)- 400g por pessoa + de 6 horas - 650g
Cerveja - 1200ml por pessoa + 6 horas - 2000ml
Bebidas (Refrigerante/água) - 1000ml por pessoa + 6 horas 1500ml
crianças valem por 0,5 
Não separa por homens e mulheres*/

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");


let resultado = document.getElementById("resultado");

function calcular(){

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    let carne = carnePP(duracao);
    let cerveja = cervejaPP(duracao);
    let bebidas = bebidasPP(duracao);

    let qtdTotalCarne = carne * adultos + (carne * criancas);
    let qtdTotalCerveja = cerveja * adultos;
    let qtdTotalBebidas = bebidas * adultos + (bebidas * criancas);


    resultado.innerHTML = `<p>${qtdTotalCarne/1000}kg de Carne </p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja/355)} Latas de Cerveja </p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas/2000)} Garrafas pets de 2l de Bebidas </p>`

}

function carnePP(duracao){
    if(duracao >= 6) {
        return 650;
    } else{
        return 400;
    } 
}

function cervejaPP(duracao){
    if(duracao >= 6) {
        return 2000;
    } else{
        return 1200;
    } 
}

function bebidasPP(duracao){
    if(duracao >= 6) {
        return 1500;
    } else{
        return 1000;
    } 
}