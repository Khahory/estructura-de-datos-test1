/*
Un set (colección) es una colección de elementos que
no están ordenados y que consta de elementos
unicos (no pueden ser repetidos). Esta estructura de
datos utiliza el mismo concepto Matemático pero no
aplicado a las Ciencias de la Computación.


[OPERACIONES]
Union: Dados dos sets, retorna un nuevo set con los
elementos de ambos.

Intersección: Dados dos sets, retorna un nuevo set
Con los elementos existentes en ambos sets.

Diferencia: Dados dos sets, retorna un nuevo set con
todos los elementos que existen en el primer set pero
no existen en el segundo.

SubConjunto: Confirma si un set es subconjunto de
otro.
 */

export default function Set() {
  let items = {};

  // getItems: retorna los items del set
  this.getItems = () => items;

  // add: agrega un nuevo elemento al set
  // {a: 'a'}
  this.add = (value) => {
    if (!this.has(value)) {
      items[value] = value;
      return true;
    }
    return false;
  }

  // delete: elimina un elemento del set
  // {a: 'a'} => {}
  this.delete = (value) => {
    if (this.has(value)) {
      delete items[value];
      return true;
    }
    return false;
  }

  // has: verifica si un elemento existe en el set
  // {a: 'a'} => true
  this.has = (value) => {
    return items.hasOwnProperty(value);
  }

  // size: retorna el tamaño del set
  // {a: 'a', b: 'b'} => ['a', 'b']
  this.size = () => {
    return Object.keys(items).length;
  }

  // clear: elimina todos los elementos del set
  this.clear = () => {
    items = {};
  }

  // values: retorna un array con todos los elementos del set
  // {a: 'a', b: 'b'} => ['a', 'b']
  this.values = () => {
    const values = [];
    const keys = Object.keys(items);

    for (let i = 0; i < keys.length; i++) {
      values.push(items[keys[i]]);
    }

    return values;
  }

  // [OPERACIONES]

  // Union: Dados dos sets, retorna un nuevo set con los
  // {a: 'a', b: 'b'} {c: 'c', d: 'd'} => {a: 'a', b: 'b', c: 'c', d: 'd'}
  this.union = (otherSet) => {
    const unionSet = new Set();
    let values = this.values();

    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }

    values = otherSet.values();

    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }

    return unionSet;
  }

  /*
  Intersección: Dados dos sets, retorna un nuevo set
  Con los elementos existentes en ambos sets.
  {a: 'a', b: 'b'} {c: 'c', d: 'd'} => {}
   */
  this.intersection = (otherSet) => {
    const intersectionSet = new Set();
    const values = this.values();

    for (let i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) {
        intersectionSet.add(values[i]);
      }
    }

    return intersectionSet;
  }

  /*
  Diferencia: Dados dos sets, retorna un nuevo set con
  todos los elementos que existen en el primer set pero
  no existen en el segundo.
  {a: 'a', b: 'b'} {c: 'c', d: 'd'} => {a: 'a', b: 'b'}
  {a: 'a', b: 'b'} {c: 'c', d: 'd', a: 'a', b: 'b'} => {}
   */
  this.difference = (otherSet) => {
    const differenceSet = new Set();
    const values = this.values();

    for (let i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        differenceSet.add(values[i]);
      }
    }

    return differenceSet;
  }

  /*
  SubConjunto: Confirma si un set es subconjunto de
  otro.
  {a: 'a', b: 'b'} {c: 'c', d: 'd'} => false
  {a: 'a', b: 'b'} {c: 'c', d: 'd', a: 'a', b: 'b'} => true
   */
  this.subset = (otherSet) => {
    if (this.size() > otherSet.size()) {
      return false;
    } else {
      const values = this.values();

      for (let i = 0; i < values.length; i++) {
        if (!otherSet.has(values[i])) {
          return false;
        }
      }

      return true;
    }
  }
}
