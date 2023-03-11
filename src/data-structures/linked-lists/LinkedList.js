/*
https://youtu.be/KRtsuoa9AOo?list=PLeWI3XlFEVOXMwSCkvJinRVEnLksnBOPr&t=820
listas enlazadas
son una estructura de datos que consiste en un conjunto de nodos que almacenan datos
y que están unidos entre sí mediante enlaces.
{
    head: {
        value: 10,
        next: {
            value: 5,
            next: {
                value: 16,
                next: null
            }
        }
    }
}
 */

export default class LinkedList {
  // inicializamos la lista enlazada
  constructor() {
    this.head = null;
    this.listSize = 0;
  }

  /* helper nos retorna el objeto del elemento que queremos
  insertar
   */
  Node(element) {
    return {
      element,
      next: null,
    };
  }

  // append, insert, remove, indexOf, elementAt, removeAt, addAt, isEmpty, size, print

  // insertamos un elemento
  append(element) {
    let node = this.Node(element); // creamos el nodo
    let current; // variable que nos ayudara a recorrer la lista

    // si la lista esta vacia, el nodo sera el primero
    if (this.head === null) {
      this.head = node;
    } else {
      // si no esta vacia, recorremos la lista
      current = this.head;

      // Mientras exista un element en el node.next (cuando llegue a null sera el final de la lista)
      while (current.next) {
        // toma el valor del siguiente elemento
        current = current.next;
      }

      // ahora current es el ultimo elemento de la lista y le asignamos el nuevo nodo
      current.next = node;
    }

    // aumentamos el tamaño de la lista
    this.listSize++;
  }

  // insertamos un elemento en una posicion especifica
  // [10, 5, 16] insert(1, 99) => [10, 99, 5, 16]
  insert(position, element) {
    // validr la posicion
    if (position >= 0 && position <= this.listSize) {
      let note = this.Node(element);
      let current = this.head;
      let previous;
      let index = 0;

      // agregamos el elemento al inicio de la lista
      if (position === 0) {
        note.next = current;
        this.head = note;
      } else {
        // recorremos la lista a la posicion indicada
        while (index++ < position) {
          previous = current;
          current = current.next;
        }

        // insertamos el elemento
        note.next = current;
        previous.next = note;
      }

      // aumentamos el tamaño de la lista
      this.listSize++;
      return true;
    }

    return false;
  }

  // removemos un elemento de la lista
  // [10, 99, 5, 16] removeAt(1) => [10, 5, 16]
  removeAt(position) {
    // validamos el rango de la posicion
    if (position > -1 && position < this.listSize) {
      let current = this.head;
      let previous;
      let index = 0;

      // removemos el primer elemento
      if (position === 0) {
        this.head = current.next;
      } else {
        // recorremos la lista hasta la posicion indicada
        while (index++ < position) {
          previous = current;
          current = current.next;
        }

        // enlazamos el elemento anterior con el siguiente
        // [10, 99, 5, 16] remove(1) => [10, 5, 16]
        previous.next = current.next;
      }

      // disminuimos el tamaño de la lista
      this.listSize--;

      // retornamos el elemento removido
      return current.element;
    }

    return false;
  }

  // removemos un elemento de la lista
  // [10, 99, 5, 16] remove(99) => [10, 5, 16]
  remove(element) {
    // obtenemos la posicion del elemento
    let index = this.indexOf(element);
    return this.removeAt(index);
  }


  // retornamos la posicion de un elemento
  indexOf(element) {
    let current = this.head;
    let index = 0;

    // recorremos la lista
    while (current) {
      // comparamos el elemento actual con el elemento que queremos buscar
      if (current.element === element) {
        return index;
      }

      index++;
      current = current.next;
    }

    // si no encontramos el elemento retornamos -1
    return -1;
  }

  // vaciamos si hay elementos en la lista
  // [10, 99, 5, 16] hasElements() => false
  hasElements() {
    return this.listSize > 0;
  }

  // retornamos el tamaño de la lista
  // [10, 99, 5, 16] size() => 4
  size() {
    return this.listSize;
  }

  print() {
    let current = this.head;
    let str = '';
    let index = 0;

    while (current) {
      str += `[${index}]${current.element}${current.next ? '=>' : ''}`;
      current = current.next;
      index++;
    }

    return str;
  }
}
