// convertir numeros decimales a binarios
import Stack from "./Stack";

export default function dec2Bin(dNumber) {
  if (dNumber === 0)
    return "0";

  const stack = new Stack();
  let rem;
  let binaryString = '';

  while (dNumber > 0){
    rem = Math.floor(dNumber % 2);

    // pushing to the stack
    stack.push(rem);

    // divide by 2
    dNumber = Math.floor(dNumber / 2);
  }

  // while yhe stack has elements
  while (stack.hasElements()){
    binaryString += stack.pop().toString();
  }

  return binaryString;
}
