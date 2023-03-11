/*
La Ordenación de Burbuja (Bubble Sort en inglés) es un sencillo
algoritmo de ordenamiento. Funciona revisando cada elemento
de un array que va a ser
intercambiándolos de posición si están en el orden equivocado.
Este algoritmo obtiene su nombre de la forma con la que suben
por el array los elementos durante los intercambios, como si
fueran pequeñas "burbujas". Este algoritmo es el más lento de
ordenado con el siguiente,
todos teniendo una complejidad de O(n^2).
 */

let array = createArray(10);
let spins = 1;
console.log('UNSORTED', array);

bubbleSort()

console.log('SORTED', array)

// creamos un array
function createArray(size) {
  const array = [];
  for (let i = size; i > 0; i--) {
    array.push(i);
  }
  return array;
}


// intercambiamos los elementos de un array
function swap(indexA, indexB) {
  const temp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = temp;

  console.log(`SPIN ${spins++}`, '-', indexA, indexB, 'SWAPPING===', temp, array[indexA]);
}

function bubbleSort() {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        swap(j, j + 1);
      }
    }
  }
}
