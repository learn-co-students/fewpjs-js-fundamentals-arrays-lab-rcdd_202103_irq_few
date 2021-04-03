// Write your solution here!
const append = ["Milo", "Otis", "Garfield"];
const prepend = ["Milo", "Otis", "Garfield"];
const removeFirst = ["Milo", "Otis", "Garfield"];
const removeLast = ["Milo", "Otis", "Garfield"];

function Append(item){
  append.push(item);
}
Append('Odie');

function Prepend(item){
  prepend.unshift(item);
}
Prepend('Odie');

removeLast.pop();
removeFirst.shift();
