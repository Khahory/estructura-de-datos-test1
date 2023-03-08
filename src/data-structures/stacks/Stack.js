// Pilas o Stack
// ulmito en entrar es el primero en salir

export default function Stack() {
  let items = [];

  // push, pop, last, hasElement, size, print, clear

  // insertamos
  this.push = element => {
    items.push(element);
  }

  // sacamos ultimo elemento y lo obtenemos
  this.pop = () => {
    return this.hasElements() ? items.pop() : false;
  }

  // obtener el ultimo elemento insertado
  this.last = () => {
    return items[items.length - 1];
  }

  // validar si nuestra pila tiene elementos
  this.hasElements = () => {
    return items.length > 0;
  }

  //obetener el tamanio de la pila
  this.size = () => {
    return items.length;
  }

  // mostrar a string
  this.print = () => {
    return items.toString();
  }

  // limpiar nuestra pila
  this.clear = () => {
    items = [];
  }
}
