import Queue from "./Queue";

export default function hotPotato(players, spins) {
  const queue = new Queue();

  // Add players to the queue
  for (let i = 0; i < players.length; i++) {
    queue.enqueue(players[i]);
  }

  // eliminando jogadores
  let eliminated = "";

  // mientras haya jugadores en la cola
  // el ultimo jugador en la cola es el ganador
  while (queue.size() > 1) {
    // recorrer la cola
    // cada vez que se recorre la cola se elimina un jugador
    for (let i = 0; i < spins; i++) {
      // mover el jugador al final de la cola
      // [1, 2, 3, 4, 5] => [2, 3, 4, 5, 1]
      queue.enqueue(queue.dequeue());
    }
    eliminated = queue.dequeue();
    console.log(`${eliminated} was eliminated from the Hot Potato game.`);
  }

  // el ultimo jugador en la cola es el ganador
  return queue.dequeue();
}
