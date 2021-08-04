// "use strict";

// const movieDB = {
//   count: 0,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
//   start: () => {
//     movieDB.count = prompt("how many fils did you see?", "");

//     while (
//       movieDB.count === "" ||
//       movieDB.count === null ||
//       isNaN(+movieDB.count)
//     ) {
//       movieDB.count = prompt("how many fils did you see?", "");
//     }
//   },
//   rememberMyFilms: () => {
//     for (let i = 0; i < 2; i++) {
//       const a = prompt("which film are you saw", ""),
//         b = prompt("is good?", "");

//       if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//         movieDB.movies[a] = b;
//         console.log(true);
//       } else {
//         console.log("false");
//         i--;
//       }
//     }
//   },
//   detectPersonaLevel: () => {
//     if (movieDB.count < 10 && movieDB.count > 1) {
//       console.log("duq qich filmer eq ditel");
//     } else if (movieDB.count >= 10 && movieDB.count < 30) {
//       console.log("duq lav ditox eq");
//     } else if (movieDB.count > 30) {
//       console.log("duq kinoman eq ");
//     } else {
//       console.log("error");
//     }
//   },
//   showMyDB: (hidden) => {
//     if (!hidden) {
//       console.log(movieDB);
//     }
//   },
//   togglevisiblyMyDB: () => {
//     if (movieDB.privat) {
//       movieDB.privat = false;
//     } else {
//       movieDB.privat = true;
//     }
//   },
//   writeYourGenres: () => {
//     for (let i = 1; i < 2; i++) {
// let genre = prompt(`which your lovely genres ${i}`);
// if (genre === "" || genre === null) {
//   i--;
// }
// movieDB.genres[i - 1] = genre;

//       let genres = prompt(`greq dzer sireli janrery storaketov`);
//       if (genres === "" || genres === null) {
//         i--;
//       } else {
//         movieDB.genres = genres.split(", ");
//         movieDB.genres.sort();
//       }
//     }
//     movieDB.genres.forEach((item, i) => {
//       console.log(`lovely genre ${i + 1} this ${item}`);
//     });
//   },
// };
