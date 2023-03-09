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

}
