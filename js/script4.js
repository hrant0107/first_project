"use strict";
// let revArr = [];
// let revers = (arr) => {
//   for (i = arr.lengt - 1; i >= 0; i--) {
//     revArr[arr.lengt - i] = arr[i];
//   }
//   return revArr;
// };

// console.log(reverse([1, 2, 3, 4]));

let reverse = (arr) => {
  let newArray = [];
  let i = 0;
  let i2 = arr.length - 1;
  while (i2 >= 0) {
    newArray[i] = arr[i2];
    i = i + 1;
    i2 = i2 - 1;
  }
  return newArray;
};

console.log(reverse([1, 2, 3, 4]));

let str1 = "javascript";

let str2 = [];

for (let i = 0; i < str1.length; i++) {
  if (i % 2 === 1 && i !== 0) {
    str2.push(str1[i].toUpperCase());
  } else {
    str2.push(str1[i]);
  }
}

console.log(str2.join(""));

// let person = {
//   name: "jon",
//   age: 18,
//   adress: {
//     city: "erevan",
//     street: "mashtoc",
//     home: 15,
//   },
//   friends: {},
// };

// let a = [3, 7, 2, 4];

// let f = function (a) {
//   return a + 2;
// };

// let z = 0;
// a.forEach(function (val) {
//   z = z + f(val) + 2;
// });

// let f2 = function (d) {
//   return f(d) + f(d);
// };

// let f3 = function (d) {
//   return f2(d) + 1;
// };

// console.log(f(f3(f2(z))));

// let a = [3, 7, 2, 4];
// let b = a.map((val, i) => {
//   console.log(val * 2);
// });

// let arr = [
//   {
//     name: "jon",
//     age: 18,
//   },
//   {
//     name: "hakob",
//     age: 20,
//   },
// ];

// let newArr = arr.map((val, i) => {
//   return i;
// });
// console.log(newArr);

let arr = [1, 41, 22, 10, 2, 4, 5, 1, 30, 40];
arr.filter((val, i) => {});

let filteredArr = [];

const filter = (x) => {
  let i = 0;
  x.forEach((val) => {
    if (val % 2 === 0) {
      filteredArr[i] = val;
      i++;
    }
  });
};

filter(arr);
console.log(filteredArr);
