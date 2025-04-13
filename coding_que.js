// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout 1");
// }, 0);

// Promise.resolve()
//   .then(() => {
//     console.log("Promise 1 resolved");
//     setTimeout(() => {
//       console.log("Timeout inside Promise");
//     }, 0);
//   })
//   .then(() => {
//     console.log("Promise 2 resolved");
//   });

// setTimeout(() => {
//   console.log("Timeout 2");
// });

// console.log("End");

// --------------------------------------
// const obj1 = {
//   name: "Sagar",
//   number: 18,
//   getName: function () {
//     return `Hi ${this.name}`;
//   },
// };

// const obj2 = Object.create(obj1);

// console.log(obj1.getName());
// console.log(obj2);

// console.log(obj2.number);
// console.log(obj2.getName());

// --------------------------------
// function outer() {
//   var count = 0;

//   function inner() {
//     count++;
//     console.log(count);
//   }

//   return inner;
// }

// const fn1 = outer();
// const fn2 = outer();

// fn1();
// fn2();
// fn1();
// fn1();
// fn2();

// ---------------------------------------

// const arr = [10, 12, 15, 21];

// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function () {
//     console.log("Index: " + i + ", element: " + arr[i]);
//   }, 3000);
// }

// ---------------------------------------

// let deck = {
//   suits: ["hearts", "spades", "clubs", "diamonds"],
//   cards: Array(52),
//   createCardPicker: function () {
//     return function () {
//       let pickedCard = Math.floor(Math.random() * 52);
//       let pickedSuit = Math.floor(pickedCard / 13);
//       return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
//     };
//   },
// };

// let cardPicker = deck.createCardPicker().bind(deck.createCardPicker.this);
// let pickedCard = cardPicker();

// console.log("card: " + pickedCard.card + " of " + pickedCard.suit);

// -----------------------

// const myArr = [1, true, [3, [false, 5, "6"], 7], 8];

// const flatArray = (array, result) => {
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if (Array.isArray(element)) {
//       flatArray(element, result);
//     } else {
//       result.push(element);
//     }
//   }
// };

// const result = [];

// const res = flatArray(myArr, result);

// console.log(result);
