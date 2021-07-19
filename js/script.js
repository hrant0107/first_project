// "use strict";
// const obj = {
//   name: "armen",
//   age: 18,
//   male: "notMeerid",
// };
// // console.log(obj.name);
// const arr = ["artak", 18, true, false, [], {}];

// console.log(arr[0], arr[1]);

// obj.name = "test";

// alert("hello");

// const result = confirm("are you here?");
// console.log(result);

// const answer = +prompt("do you have 18?", "18");
// console.log(answer + 5);

// let answers = [];

// answers[0] = prompt("what is your name", "");
// answers[1] = prompt("what is your Last name", "");
// answers[2] = +prompt("how old are you", "");

// document.write(answers);

// const category = "toys";
// console.log(`htttp/someine.com ${category} /5`);

// const user = "Ivan";
// console.log("daragoy  " + user);

// console.log(+"9" + 4);

// let incr = 10,
//   decr = 10;

// // ++incr;
// // --decr;

// console.log(incr++);
// console.log(decr--);
// console.log(incr, decr);

// console.log(5 % 2);

// console.log(2 * 4 !== "8");

// const isChek = true;
// const close = false;

// console.log(!isChek || close);

const numberOfFilms = +prompt("how many fils did you see?", "");

const movieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const queshionA = prompt("which film are you liked", ""),
  queshionB = prompt("is good?", ""),
  queshionC = prompt("which film are you liked", ""),
  queshionD = prompt("is good?", "");

movieDB.movies[queshionA] = queshionB;
movieDB.movies[queshionC] = queshionD;

console.log(movieDB);
