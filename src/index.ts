import datajson from './dados.json';

type Data = {
  dia: number;
  valor: number;
}[];
// 1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?
const printSoma = () => {
  const indice = 13;
  let soma = 0;
  let k = 0;
  while (k < indice) {
    k = k + 1;
    soma = soma + k;
  }
  console.log(`Esse é o valor final de soma: ${soma}`);
};
printSoma()
// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
function calcFibonacci() {
  let fibonnaciSequence: number[] = [];
  let num1 = 0;
  let num2 = 1;
  while (num2 < 100) {
    fibonnaciSequence.push(num1);
    num1 = num2;
    num2 = num1 + fibonnaciSequence[fibonnaciSequence.length - 1];
  }
  return fibonnaciSequence;
}
function hasOnFibonacci(num: number) {
  const fibonnaciSequence: number[] = calcFibonacci();
  const hasOnFibonacci: boolean = fibonnaciSequence.includes(num);

  return hasOnFibonacci?'tem': 'não tem';
}
const numToCompareFibonacci = 13
console.log(`\no numero ${numToCompareFibonacci} tem na fibonacci?: ${hasOnFibonacci(numToCompareFibonacci)}`)

// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

class Faturament {
  validDays: Data;
  constructor(public data: Data) {
    this.data;
    this.validDays = this.getValidDays();
  }
  getValidDays() {
    const validDays = this.data.filter((day) => day.valor > 0);
    return validDays;
  }
  getData() {
    console.log(this.data);
  }
  getMinFaturament() {
    return Math.min(...this.validDays.map((day) => day.valor));
  }
  getMaxFaturament() {
    return Math.max(...this.validDays.map((day) => day.valor));
  }
  CountDaysUpAverage() {
    const average = this.getAverage();
    return this.validDays.filter((day) => day.valor > average).length;
  }
  getAverage() {
    const sum = this.validDays.reduce((acc, day) => acc + day.valor, 0);
    return sum / this.validDays.length;
  }
}
const faturament = new Faturament(datajson);
const printInfoFaturament = () => console.log(
  '\nO menor valor de faturamento em um dia:',
  faturament.getMinFaturament().toFixed(2) +
    '\n' +
    'O Maior valor de valor de faturamento em um dia:',
  faturament.getMaxFaturament().toFixed(2) +
    '\n' +
    'A quantidade de dias que o faturamento foi maior que a média: ',
  faturament.CountDaysUpAverage(),
);
printInfoFaturament()

// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53
const statesFaturament = [
  {
    name: 'SP',
    value: 67836.43,
  },
  {
    name: 'RJ',
    value: 36678.66,
  },
  {
    name: 'MG',
    value: 29229.88,
  },
  {
    name: 'ES',
    value: 27165.48,
  },
  {
    name: 'Outros',
    value: 19849.53,
  }
]

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.
function calcPercentageByStates(states: {name: string; value: number}[]){
  const totalFaturament = states.map(i=>i.value).reduce((acc, current)=> {
    return acc + current
  })
  const percentages = states.map(i=> {
    return {
      Nome: i.name,
      Porcentagem: ((i.value / totalFaturament) * 100).toFixed(2)
    }
  })
  return percentages
}

console.log(calcPercentageByStates(statesFaturament))

// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

// NÃO SE ESQUEÇA DE INSERIR O LINK DO SEU REPOSITÓRIO NO GITHUB COM O CÓDIGO FONTE QUE VOCÊ DESENVOLVEU

function reverseString (s:string) {
  let reversed = '';
  for (let i = s.length - 1; i >= 0; i--) {
    reversed += s[i];
  }
  return reversed;
}

console.log('\nstring invertida:' + reverseString('subinoonibus'))