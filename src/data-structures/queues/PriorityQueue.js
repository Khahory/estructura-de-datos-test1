// Description: Priority Queue data structure
/*
  Priority Queue
  Es una cola normal pero con prioridad
  Imagina que hay una cola de personas para montar un avion
  pero hay un grupito que son primera clase y tienen prioridad
  para subir al avion, entonces los de primera clase se suben
 */

export default function PriorityQueue() {
  let items = [];


  // un helper para encontrar la prioridad de un elemento
  function QueueElement(element, priority) {
    this.element = element;

    // si no se envia la prioridad, por defecto es 1
    this.priority = priority || 1;
  }

  // enqueue, dequeue, front, hasElements, size, print, clear

  // insertamos
  // [1,2,3,4,5] => [1,2,3,4,5,6]
  this.enqueue = (element, priority) => {
    const queueElement = new QueueElement(element, priority);
    let added = false;

    // si no hay elementos, lo agregamos
    for (let i = 0; i < items.length; i++) {
      // si el elemento que quiero insertar es menor a la prioridad que ya existe
      if (queueElement.priority < items[i].priority) {
        // insertamos el elemento en la posicion i
        /*
        const fruits = ["Banana", "Orange", "Apple", "Mango"];
        fruits.splice(2, 0, "Lemon", "Kiwi");
        fruits => ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"]
         */
        items.splice(i, 0, queueElement);
        added = true;
        break;
      }

      // si no se agrego, lo agregamos al final
      if (!added) {
        items.push(queueElement);
      }
    }
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
    let printString = '';
    let pipe = '|';

    // recorremos los elementos
    for (let i = 0; i < items.length; i++) {
      // si es el ultimo elemento, no ponemos el pipe
      if (i === items.length - 1) {
        pipe = '';
      }

      // concatenamos el elemento y el pipe
      printString += `${items[i].element} - ${items[i].priority}${pipe}`;
    }
    return printString;
  }

  // limpiar nuestra cola
  // [1,2,3,4,5] => []
  this.clear = () => {
    items = [];
  }
}
