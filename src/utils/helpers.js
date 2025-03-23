export function calculate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return ((num1 * 10) + (num2 * 10)) / 10;
    case "-":
      return num1 - num2;
    case "x":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return;
  }
}

const buttons = [
  { id: 'clear', value: 'AC' },
  { id: 'divide', value: '/' },
  { id: 'multiply', value: 'x' },
  { id: 'backspace', value: 'C' },
  { id: 'seven', value: '7' },
  { id: 'eight', value: '8' },
  { id: 'nine', value: '9' },
  { id: 'subtract', value: '-' },
  { id: 'four', value: '4' },
  { id: 'five', value: '5' },
  { id: 'six', value: '6' },
  { id: 'add', value: '+' },
  { id: 'one', value: '1' },
  { id: 'two', value: '2' },
  { id: 'three', value: '3' },
  { id: 'equals', value: '=' },
  { id: 'zero', value: '0' },
  { id: 'decimal', value: '.' },
];

export { buttons };