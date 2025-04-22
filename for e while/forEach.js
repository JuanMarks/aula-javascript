// let sum = 0;
// const numbers = [65, 44, 12, 4];

// numbers.forEach(myFunction);

// function myFunction(value) {
//   sum += value; // add the value to the sum
// }

const notas = [10, 6.5,8,7.5];
let somaDasNotas = 0;

// function somaNotas(nota) {
//     somaDasNotas += nota;
//     alert(`A soma das notas é ${somaDasNotas}`); // A soma das notas é 10, 16.5, 24.5, 32
// }

// notas.forEach(somaNotas);
notas.forEach((nota) =>  somaDasNotas += nota);
const media = somaDasNotas / notas.length;
alert(`A média é ${media}`); // A média é 8.0