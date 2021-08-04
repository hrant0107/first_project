"use strict";
// const aswer = [];

// aswer[0] = prompt("anunt", "");
// aswer[1] = prompt("azganunt", "");
// aswer[2] = prompt("tariqt", "");

// document.write(aswer);

const personaMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: () => {
    personaMovieDB.count = +prompt("qani film eq duq arden ditel", "");
    while (
      personaMovieDB.count === null ||
      personaMovieDB.count === "" ||
      isNaN(personaMovieDB.count)
    ) {
      personaMovieDB.count = prompt("qani film eq duq arden ditel", "");
    }
  },
  rememberMyFilms: () => {
    for (let i = 0; i < 2; i++) {
      let a = prompt("verjin dzer tesac filmy", "");
      let b = prompt("inchqan kgnahateq ayn ", "");

      if (a != null && b != null && b != "" && a != "" && a.length < 50) {
        personaMovieDB.movies[a] = b;
      } else {
        i--;
      }
    }
  },
  detectPersonaLevel: () => {
    if (personaMovieDB.count < 10) {
      console.log("qich filmer eq ditel");
    } else if (personaMovieDB.count > 10 && personaMovieDB.count <= 30) {
      console.log("duq lav kino nayox eq");
    } else {
      console.log("duq kinoman eq");
    }
  },
  showMyDB: (hidden) => {
    if (!hidden) {
      console.log(movieDB);
    }
  },
  toglleVisibleMyDB: () => {
    if (personaMovieDB.privat) {
      // personaMovieDB.privat !== null,0,'',undefined,false
      personaMovieDB.privat = false;
    } else {
      personaMovieDB.privat = true;
    }
  },
  writeYourGenres: () => {
    for (let i = 1; i <= 3; i++) {
      let genres = prompt(`nsheq ${i} dzer sireli janry`);
      if (genres === "" || genres === null) {
        i--;
      } else {
        personaMovieDB.genres[i - 1] = genres;
      }
    }
    personaMovieDB.genres.forEach((item, i) => {
      console.log(`sireli janry ${i + 1} da ${item}`);
    });
  },
};

// let i = 0;

// while (i < 2) {
//   let a = prompt("verjin dzer tesac filmy", "");
//   let b = prompt("inchqan kgnahateq ayn ", "");

//   if (a != null && b != null && b != "" && a != "" && a.length < 50) {
//     personaMovieDB.movies[a] = b;
//   } else {
//     i--;
//   }

//   i++;
// }

// do {
//   i++;
// } while (i < 4);
// {
//   let a = prompt("verjin dzer tesac filmy", "");
//   let b = prompt("inchqan kgnahateq ayn ", "");

//   if (a != null && b != null && b != "" && a != "" && a.length < 50) {
//     personaMovieDB.movies[a] = b;
//   } else {
//     i--;
//   }
// }

// (num === 50) ? console.log('ok') : console.log('noo');

// let num = 50;

// switch(num){
//   case 40:
//     console.log('noo')
//     break
//     case 50:
//       console.log('yes')
//       break
// }

// const f = () => {
//   setTimeout(() => {
//     console.log(1);
//   }, 500);
// };

// const d = () => {
//   console.log(15);
// };

// f();
// d();

// const learn = (learnJS, callbak) => {
//   console.log(`es sovorum em ${learnJS}`);
//   callbak();
// };

// const done = () => {
//   console.log(`20`);
// };
// learn("js", done);

// const options = {
//   name: "test",
//   widht: 1024,
//   height: 1024,
//   colors: {
//     border: "black",
//     bg: "red",
//   },
//   setname: (x)=>{
// options.name = x  }
// };

// // const x = 'name';

// // options.setname('jontan')
// const {border, bg} = options.colors

// console.log(border)

// console.log(Object.keys(options).length)

// let counter = 0;

// for (let key in options) {
//   if (typeof options[key] === "object") {
//     for (let i in options[key]) {
//       console.log(`banali ${i} veragrvaca ${options[key][i]}`);
//       counter++;
//     }
//   } else {
//     console.log(`banali ${key} veragrvaca ${options[key]} argumenty`);
//     counter++;
//   }
// }
// console.log(counter);

// const arr = [1,2,3,4,6,8]
// // arr.pop()
// // console.log(arr)

// arr.forEach((item,i,arr)=>{
//   console.log(`${i}   ${item}   ${arr}`)
// })
// for(let value of arr){
//   console.log(value)
// }

// const pr = prompt("", "");
// const products = pr.split(", ");
// console.log(products.join(","));

// const obj = {
//   a: 1,
//   b: 2,
// };

// const add = Object.assign( newObj,{
//   f:{
//     y:30,
//     x:50
//   }
// });

// console.log(add);
// console.log(newObj)

// const oldArray = ["a", "b", "c"];

// const newArray = oldArray.slice();

// console.log(oldArray);
// console.log(newArray);

// const video = ["a0", "b1", "c2"],
//   audio = ["q7", "w8", "e9"],
//   internet = [...audio, ...video];

// console.log(internet);

// const log = (a,b,c) =>{
//   console.log(a)
//   console.log(b)
//   console.log(c)

// }

// const num = [1,2,3]

// console.log(log(...num))

// const newObj = {
//   c: 3,
//   d: 4,
//   f: {
//     y: 5,
//     x: 8,
//   },
// };

// const add = {
//   o: 5,
//   p: 74,
// };

// // console.log(Object.assign(newObj,add))

// const objjj = Object.assign({}, newObj);
// objjj.d = 20;

// console.log(objjj);
// console.log(newObj);

// const oldArr = [1, [11, 22], 3];

// const newArr = oldArr.slice();
// newArr[1][1] = 80;

// console.log(oldArr);
// console.log(newArr);

// const logg = (a, b, c) => {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// };

// const num = [7, 54, 4];
// const newArrray = [...num]
// console.log(newArrray)

// console.log(num);

// const a = {
//   asd:70,
//   bvd:90
// }

// const q = {...a}
// console.log(q.asd)

// let str = 'some'
// let strObj = new String(str)

// console.log(typeof(str))
// console.log(typeof(strObj))

// console.dir([1, 2, 3]);

// const soldier = {
//   healt: 400,
//   armor:100
// }

// const john = Object.create(soldier)
// // john.__proto__ = soldier
// // Object.setPrototypeOf(john, soldier)

// console.log(john.armor)
