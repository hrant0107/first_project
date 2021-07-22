"use strict";
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

// if (num < 49) {
//   console.log("error");
// } else if (num > 100) {
//   console.log("lot");
// } else {
//   console.log("ok");
// }
// const num = 50;
// num === 51 ? console.log('true') : console.log("false")

// switch (num){
//   case 45:
//     console.log('false')
//     break;
//     case 50:
//       console.log('true')
//       break;
//       default:
//         console.log('noo today')
//         break;
// }

// let num = 50;

// while (num < 56) {
//   console.log(num);
//   num = num + 2;
// }

// do {
//   console.log(num);
//   num++;
// } while (num < 55);

// for (i = 0; i < 8; i++) {
//   if (i == 5) {
//     continue;
//   } else if(i ===7){
//     break
//   }
//   console.log(i);
// }

const numberOfFilms = +prompt("how many fils did you see?", "");

const movieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

// for (i = 0; i < 2; i++) {
//   const a = prompt("which film are you saw", ""),
//     b = prompt("is good?", "");

//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//     movieDB.movies[a] = b;
//     console.log(true);
//   } else {
//     console.log("false");
//     i--;
//   }
// }

// if (movieDB.count < 10 && movieDB.count > 1) {
//   console.log("duq qich filmer eq ditel");
// } else if (movieDB.count >= 10 && movieDB.count < 30) {
//   console.log("duq lav ditox eq");
// } else if (movieDB.count > 30) {
//   console.log("duq kinoman eq ");
// } else {
//   console.log("error");
// }

let i = 0;

// while(i <2 ){
//   i++;
//   const a = prompt("which film are you saw", ""),
//     b = prompt("is good?", "");

//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//     movieDB.movies[a] = b;
//     console.log(true);
//   } else {
//     console.log("false");
//     i--;
//   }
// }
// do {
//   i++;
//   const a = prompt("which film are you saw", ""),
//     b = prompt("is good?", "");

//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//     movieDB.movies[a] = b;
//     console.log(true);
//   } else {
//     console.log("false");
//     i--;
//   }
// } while (i < 2);

console.log(movieDB);

// const str = "tExt";
// console.log(str.toLowerCase());
// // console.log(str.toUpperCase());
// console.log(str);

// const fr = "many fruits";

// console.log(fr.indexOf("m"));

// const logg = " hello world";
// console.log(logg.slice(-1));
// console.log(logg.substring(6, 3));
// console.log(logg.substr(5, 10));

// const num = 12.2;
// console.log(Math.round(num));

// const test = '12.2 px '
// //  console.log(parseInt(test))
//  console.log(parseFloat(test))

// const calc = (a, b) => {
//   return (a * b) / 100;
// };

// console.log(calc(100, 10)); // 100 * 10 / 100
// console.log(calc(110, 10)); // 110 * 10 / 100
// console.log(calc(120, 10));
// console.log(calc(130, 10));
// console.log(calc(140, 10));
