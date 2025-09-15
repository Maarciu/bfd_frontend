//Variáveis e tipos
//Crie duas variáveis, uma let e uma const, atribuindo valores de tipos diferentes (string e number). Exiba no console o tipo de cada uma usando typeof.
//Ok, um bom começo, eu acho!
let number = 37
let number2 = 28
const familia = "hernandes"
const tios = "joaquim e fernando"

console.log(typeof number)
console.log(typeof number2)
console.log(typeof familia)
console.log(typeof tios)

//Entrada e decisão simples
//Crie uma função que receba um número e use if para verificar se ele é positivo, negativo ou zero. Retorne uma string com o resultado.
//Errei várias vezes por conta da posição dos elementos, mas estou me habituando.
function VerificarNumber(number3) {
    if (number3 > 0) {
        return "Positivo";
    } else if (number3 < 0) {
        return "Negativo";
    } else {
        return "0";
    }
}

console.log(VerificarNumber(4))

//Par ou ímpar
//Escreva uma função que receba um número e retorne "Par" se for par ou "Ímpar" se for ímpar, usando o operador % e if/else.
//Depois da anterior, essa foi simples
function VerificarNumber4(number4) {
    if (number4 % 2===0) {
        return "Par"
    } else {
        return "Ímpar"
    }
}

console.log(VerificarNumber4(3))

//Laço for básico
//Use um for para imprimir no console todos os números de 1 a 10.
//O conteúdo no github me ajudou bastante nessa 
const number5 = []

for (let i = 0; i < 11; i++)
 console.log(`Contando: ${i}`)

//Soma com for
//Crie uma função que receba um número n e retorne a soma de todos os números de 1 até n usando um laço for.
//Tiver dificuldades de entender a lógica dessa questão 
function somando(n){
    let soma = 0
    for (let i = 1; i <= n; i++){
        soma += i
    }  return soma
}
somando(14)

//Laço while
//Usando while, imprima no console os números de 10 até 1 em ordem decrescente.
//Assunto bem claro na mente pelas últimas revisões, foi só questão de lembrar mesmo.
const number7 = []

let i = 10;
while (i > 0) {
    console.log(`Perdeu ${[i]} Reais`)
    i--
}

//Tabuada
//Crie uma função que receba um número e exiba no console a tabuada desse número de 1 a 10 usando for.
// Só a questão da exibição que ainda é um pouco confuso, mas me baseei nas questões anteriores.
const number8 = []

function somando(n){
    for (let i = 1; i <= 10; i++){
        console.log(`${n} * ${i} = ${n * i}`); // N é o valor que vai ser inserido e I é o valor calculado
    }  
}
somando(2)

//Decisão com switch
//Escreva uma função que receba o nome de um dia da semana (em minúsculas) e use switch para retornar se é dia útil ou fim de semana.
// Fiz com base nas informações do github, errei algumas vezes tentando fazer só com um "case".
function Semana(n){
switch (n) {
    case "segunda":
    case "terça":
    case "quinta": 
    case "quarta":
    case "sexta": 
        console.log("Dia Útil");
        break;
    case "sábado":
    case "doming": 
        console.log("Final de Semana");
        break;
    default:
        console.log("Outro");
}}

Semana("sábado")

//Função com múltiplos parâmetros
//Crie uma função que receba nome, idade e cidade, e retorne uma frase formatada: "Meu nome é X, tenho Y anos e moro em Z.".
//Essa foi essencial para eu entender que eu errei quase todas porque não fiz elas para receber informações e tive que refazer.
function person(nome, idade, cidade){
    console.log(`Meu nome é ${nome}, tenho ${idade} e moro em ${cidade}`)
}
person("Márcio", 28, "Recife.");

//Combinação de estruturas
//Crie uma função que receba um array de números e retorne apenas os números pares, usando for e if.
// Não consegui fazer essa professor!