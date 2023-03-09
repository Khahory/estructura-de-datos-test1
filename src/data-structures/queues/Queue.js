// Colas o Queue
// el primero en entrar es el primero en salir

export default function Queue(){
  let items = [];

  // enqueue, dequeue, front, hasElements, size, print, clear

  // insertamos
  // [1,2,3,4,5] => [1,2,3,4,5,6]
  this.enqueue = element => {
    items.push(element);
  }

  // remueve la primera posicion
  // [1,2,3,4,5] => [2,3,4,5]
  this.dequeue = () => {
    return items.shift();
  }

  // obtener el primer elemento insertado
  // [1,2,3,4,5] => 1
  this.front = () => {
    return items[0];
  }

  // validar si nuestra cola tiene elementos
  // [1,2,3,4,5] => true
  this.hasElements = () => {
    return items.length > 0;
  }

  // obtener el tamanio de la cola
  // [1,2,3,4,5] => 5
  this.size = () => {
    return items.length;
  }

  // mostrar a string
  // [1,2,3,4,5] => 1,2,3,4,5
  this.print = () => {
    return items.toString();
  }

  // limpiar nuestra cola
  // [1,2,3,4,5] => []
  this.clear = () => {
    items = [];
  }

}
