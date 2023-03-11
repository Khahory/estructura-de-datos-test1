import { createArray, swap } from '../arrayUtils';

let array = createArray(10);

console.log('UNSORTED', array.toString(), '\n');

selectionSort();

console.log('\nSORTED', array.toString());

// Selection sort
function selectionSort() {
  // guarda el indice del elemento minimo
  let indexMin;

  // recorremos el array
  for (let i = 0; i < array.length - 1; i++) {
    indexMin = i;

    for (let j = i; j < array.length; j++) {
      if (array[indexMin] > array[j]) {
        indexMin = j;
      }
    }

    if (i !== indexMin) {
      array = swap(i, indexMin, array);
    }
  }
}
