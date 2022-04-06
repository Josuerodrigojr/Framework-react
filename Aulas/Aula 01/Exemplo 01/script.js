/**
 * Composição de função- Quando podemos reunir várias funções em somente uma.
 
 */ 

console.log("Composição de função")

 let a = [1, 2, 3, 4, 5]
 .filter(o => o != 2)
 .map(o => o + 1)
 .map(o => o + 9)

 console.log(a)

 // No exemplo acima, é utilizado uma função, para que possamos filtrar os valores que são diferentes de 2, e depois poder modificar esses valores, somando cada elemento mais um. Podemos utilizar essa composição com mais de duas funções.

 /**
 * Estado compartilhado - Estado compartilhado nada mais são que valores que podem ser acessados em mais de um ponto da aplicação. 
 */

// Variável global

console.log("Estado compartilhado")

const PI = 3.14;

const somarPI = () => 3.14 * PI

function somarPI2(){
        return 3.14*PI;
}

console.log(somarPI())

// No exemplo acima, podemos usar esse estado compartilhado pela constante PI, é arredondado o valor de PI, e podemos utilizar em mais de um lugar na nossa função somarPI

/**
 * Função de alta ordem
 * 
 * Podem receber outras funções como argumentos
 * Podem retornar funções
 */

// Podem receber outras funções como argumentos

console.log("Função de alta ordem")

const obterNome = () => "Josué"
const mostrarBoasvindas = (nome) => `Olá, ${nome()}! Seja bem-vindo!`

//Executando
const mensagem = mostrarBoasvindas(obterNome)
console.log(mensagem)

// No exemplo acima, a função mostrarBoasVindas, recebe como parametro a função obterNome, com isso, é executado a função.

// Podem retornar funções
const obterBoasvindas = () => {
  return () => `Olá, ${obterNome()}! Seja bem-vindo!`
}

//Executando
const mensagem2 = obterBoasvindas()()

const mensagemFn = obterBoasvindas()
const mensagem3 =mensagemFn()

//No exemplo acima, coloca para retornar um função, dentro da função é construido outra função, para que possa retornar o obterNome().

console.log(mensagem2, mensagem3)

/**
 * Função independente - Não é utilizado loops dentro da minha função, para que possamos fazer o cálculo, é utilizado somente um parametro(parametro da função), e ter pelos menos um argumento (variavel local dentro de uma função).
 *
 * Deve ter pelo menos 1 argumento
 * Deve ter um retorno (dado, informação ou outra função)
 * Não existem loops
 */

// Não fazer
// Fibonacci = antepenúltimo + último

console.log("Função independente");

const calcularFibonacci = (contador) => {
    let resultado = [0, 1]
  
    for (let i = 2; i < contador; i++) {
      const valorSomado = resultado[i - 2] + resultado[i - 1]
  
      resultado.push(valorSomado)
    }
  
    return resultado
  }
//   console.log(calcularFibonacci(100))
  
  
  
  // Fazer (Ler sobre recursividade no arquivo recursividade.js)
  // Fibonacci = antepenúltimo + último
  const calcularValorFibonacci = (posicao) => {
    if (posicao < 1)
      return 0
  
    else if (posicao <= 2)
      return 1
  
    else
      return calcularValorFibonacci(posicao - 2) + calcularValorFibonacci(posicao - 1)
  }
  
  console.log(calcularValorFibonacci(10))

  // No exemplo acima, é utilizado o conceito de memória, quando o parametro da função não é igual a 1 nem a 0, então, é verificado a função dentro da função, causando um "loop". E começa a ser somando, a partir do momento que atinge um valor conhecido, o 0 ou o 1.

  // Usando ternário
  const calcularValorFibonacci2 = (posicao) =>
    posicao < 1 ? 0
      : posicao <= 2 ? 1
        : calcularValorFibonacci(posicao - 2) + calcularValorFibonacci(posicao - 1)

    // Acontece da mesma forma que o exemplo anterior, a diferença é que utilizou a função ternária.
  
  const obterSequenciaFibonacci = (contagem) => {
    return [...Array(contagem)]
      .map((valor, index) => calcularValorFibonacci(index))

    }
    console.log(obterSequenciaFibonacci(10))

    // Utilizamos essa função para ordenar tudo em uma array.

    /**
 * Funções de primeira classe

 * São funções que são tratadas como váriaveis, e elas podem:
 *  Ser atribuidas a váriaveis
 *  Ser passadas por parametro
 *  Ser retornadas como resultado
 */

    console.log("Funções de primeira classe");

// Serem atribuidas a váriaveis



const somar1 = (y, x) => y + x
const somar2 = function(y, x) {
  return  y + x
}

//Executando
somar1()
somar2()

// Podem ser passadas por parametro
const obterNome1 = () => "Matheus"
const mostrarBoasvindas1 = (nomeFn) => `Olá, ${nomeFn()}! Seja bem-vindo!`

//Executando
const mensagem1 = mostrarBoasvindas(obterNome)

// Podem ser retornadas como resultado
const obterBoasvindas1 = () => {
  return () => `Olá, ${obterNome()}! Seja bem-vindo!`
}

//Executando
const mensagem21 = obterBoasvindas1()()

const mensagemFn1 = obterBoasvindas1()
const mensagem31 =mensagemFn1()

// Mesmo exemplo anterior, nesse caso é dito função de alta classe, pois, no primeiro caso estamos atribuindo a uma variavel a função da soma. A segunda uma função está sendo passado como parametro para uma segunda função. E na terceira, está retornando um resultado. Tudo isso dentro de váriaveis. 

/**
 * Imutabilidade
 * 
 * Significa que uma variável que nasceu com um valor, vai manter esse valor enquanto o programa estiver sendo executado, sem mudar seu estado. Ou seja, ela é uma constante.
 * 
 * Stateless (Sem estado)
 * 
 * As funções devem ser sem estado (stateless), ou seja, elas devem sempre agir e retornar algo como se fosse a primeira vez que elas fossem utilizadas no programa.
 */

console.log("Imutabilidade")

// Não Fazer
let numero1 = 0

// Não fazer
const somarDezNoNumero = () => numero1 = numero1 + 10
console.log(somarDezNoNumero())

// A imutabilidade se dá pelo fato do numero1 não ter seu valor alterado, só utilizado para retornar outro valor

// Fazer
const numero2 = 0

// Fazer
const somarDez1 = (x) => x + 10
somarDez1(numero2)

// Fazer
const somarDez2 = (x) => {
  let y = x + 10

  return y
}
somarDez2(numero2)

// Nesse exemplo, pelo que eu entendi bem, o caso de stateless, é o fato de criarmos uma nova variavel, utilizando e sem alterar o valor da constante.

/**
 * Puras - Função pura é toda função que não depende de váriaveis externas, somente os parametros informados pelo usuario
 * Impuras - Funções que dependem da exportação de valores.
 */

console.log("Função Pura")

// Impura
const trabalharComPI = (lado) => Math.PI * lado * lado
trabalharComPI(2)

// Pura
const trabalharComPI2 = (pi, lado) => pi * lado * lado
trabalharComPI(Math.PI, 2)

/**
 * Recursividade
 * 
 * Função recursiva é uma função que é definida em termos de si mesma. 
 * É uma função que se chama de forma continua até que seja retornado algum resultado.
 * 
 * Veja mais sobre pilha: https://youtu.be/2V91Re1czwA?t=55
 */ 

// Fatorial: numero * (numero - 1)

console.log("Recursividade")
const fatorial = (numero) => {
    if (numero == 0 || numero == 1)
      return 1
    else
      return numero * fatorial(numero - 1)
  }
  
  // Usando ternário
  const fatorialRef = (numero) =>
    (numero == 0 || numero == 1) ? 1 : numero * fatorial(numero - 1)

    // No exemplo acima, não utilizamos valores externos e nem loops.