function filtrarPares(arr) {
    return arr.filter(num => num % 2 === 0);
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = filtrarPares(numeros);
console.log(`Números pares: ${pares}.`)