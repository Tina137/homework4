// #1
const elements = ["apple", "banana", "orange", "grape"];
// #1.1
let firstResult = "";

for (let i = 0; i < elements.length; i++) {
  firstResult += elements[i];
  if (i !== elements.length - 1) {
    firstResult += ", ";
  }
}
console.log(firstResult);
// #1.2
let secondResult = elements.join(", ");
console.log(secondResult);
// #2
let cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];
cards.splice(cards.indexOf("Карточка-3"), 1);
console.log(cards);
cards.push("Карточка-6");
console.log(cards);
let cardUp = (name, index) => {
  cards[index] = name;
  console.log(cards);
};
