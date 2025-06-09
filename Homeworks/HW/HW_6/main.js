//Task #bolvdlhP
let cardSuits = ['spades', 'diamonds','hearts', 'clubs']
let values = ['6', '7', '8', '9', '10', 'ace','jack','queen','king'];
let colors = ['red', 'black']
let createDeckCards = (cardSuits, values, colors) => {
    array = []
    for (let color of colors) {
        for (let value of values) {
            for (let suit of cardSuits) {
                array.push({suit: suit, value: value, color: color})
            }
        }
    }
    return array
}
deckCards = createDeckCards(cardSuits, values, colors);
console.log(deckCards);
console.log(deckCards.filter(card => card.value === 'ace'));
console.log(deckCards.filter(card => card.value === '6'));
console.log(deckCards.filter(card => card.color === 'red'));
console.log(deckCards.filter(card => card.suit === 'diamonds'));
console.log(deckCards.filter(card => card.suit === 'clubs' && card.value >= '9')); //Це працює правильно, бо будь-який ASCII букви більший за ASCII цифри


//Task #EP5I1UUzAX
console.log(deckCards.reduce((acc, curr) => {
    acc[curr.suit].push(curr);
    return acc
}, {'spades':[], 'diamonds':[], 'hearts':[], 'clubs':[]}))

