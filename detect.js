const A = character(
  '.#####.' +
  '#.....#' +
  '#.....#' +
  '#######' +
  '#.....#' +
  '#.....#' +
  '#.....#'
);
const B = character(
  '######.' +
  '#.....#' +
  '#.....#' +
  '######.' +
  '#.....#' +
  '#.....#' +
  '######.'
);
const C = character(
  '#######' +
  '#......' +
  '#......' +
  '#......' +
  '#......' +
  '#......' +
  '#######'
);
const D = character(
  '######.' +
  '#.....#' +
  '#.....#' +
  '#.....#' +
  '#.....#' +
  '#.....#' +
  '######.'
);
const E = character(
  '#######' +
  '#......' +
  '#......' +
  '#######' +
  '#......' +
  '#......' +
  '#######'
);


//Learn the letters A through E

const brain = require('brain.js')
const net = new brain.NeuralNetwork()
net.train([{
  input: A,
  output: {
    A: 1
  }
},
{
  input: B,
  output: {
    B: 1
  }
},
{
  input: C,
  output: {
    C: 1
  }
},
{
  input: D,
  output: {
    D: 1
  }
},
{
  input: E,
  output: {
    E: 1
  }
}
], {
  log: detail => console.log(detail)
});

// Predict the letter
const result = brain.likely(character(
  '.#..##.' +
  '......#' +
  '#......' +
  '..###.#' +
  '#.....#' +
  '#......' +
  '#.####.'
), net);

function character(string) {
  return string
    .trim()
    .split('')
    .map(integer);
}

function integer(character) {
  if (character === '#') return 1;
  return 0;
}

console.log(result); 
