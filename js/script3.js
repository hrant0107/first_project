// // // let user = +prompt("how oldare you");

// // // if (user > 18 || user < 10) {
// // //   console.log("yeh");
// // // }

// // // let i = 0;
// // // while (i < 3) {
// // //   console.log("ok");
// // //   i++;
// // // }

// // // while (true) {
// // //   let user = prompt("hello");
// // //   if (user === "hi") {
// // //     console.log("good");
// // //     continue;
// // //   }
// // //   console.log("not good");
// // // }

// // // let i = 0

// // // while(i < 100){
// // //   console.log(i)
// // //   i = i+ 10;
// // //   if(i > 50){
// // //     break
// // //   }
// // // }

// // // let names  = ['pogos', 'petros','hamo']
// // // let i = 0
// // // while(i < names.length ){
// // //   console.log(names[i])
// // //   i++

// // // }
// // // let board = [
// // //     ["_", "_", "_"],
// // //     ["_", "_", "_"],
// // //     ["_", "_", "_"],
// // //   ];
// // // let player = "x";

// // // while (true) {

// // //   let boardStr =
// // //     board[0].join("  ") +
// // //     "\n" +
// // //     board[1].join("  ") +
// // //     "\n" +
// // //     board[2].join("  ") +
// // //     "\n";

// // //   let row = +prompt("nsheq te vor toxi vra eq dnelu \n " + boardStr);
// // //   let column = +prompt("nsheq te vor syan vra eq dnelu \n " + boardStr);

// // //   if (board[row][column] !== "_") {
// // //     alert("duq sxal tex eq nshel ev partveciq");
// // //     break;
// // //   }
// // //   board[row][column] = player;
// // //   if (player === "x") {
// // //     player = "o";
// // //   } else {
// // //     player = "x";
// // //   }
// // // }

// // // let a = [24,22,[7,[84,99]], [3,1,6], [0,8,[4,5]]]

// // // 3 + 12 +2

// // // let x = [10, 20, 30];

// // // let y = [];

// // // let i = 0;
// // // while (i < x.length) {
// // //   y[i] = x[i] * 2;
// // //   i++;
// // // }
// // // console.log(y);
// // // console.log(x);

// // // let x = [];

// // // x[0] = 1;
// // // x[1] = 20;
// // // x[10] = 3;

// // // console.log(x.length);

// // // console.log(x[5]);

// // // let arr = [1, 4, 5, 6, 44, 22, 87, 11, 35, 41, 0, 24, 551, 491];
// // // let newArr = [];

// // // let i = 0;
// // // let i2 = 0;

// // // while (i < arr.length) {
// // //   if (arr[i] % 2 === 0) {
// // //     newArr[i2] = arr[i];
// // //     i2++;
// // //   }
// // //   i++;
// // // }

// // // console.log(newArr);

// // // let n = 22;
// // // for (let i = 2; i <= n; i += 2) {
// // //   console.log(i);
// // // }

// // // let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
// // // let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
// // // // Example output:
// // // // 276 + 351 = 627

// // // let num = 0

// // // for(let i = 0; i< arr_1.length; i++){
// // //   num = num + arr_1[i]
// // // }
// // // for(let i = 0; i< arr_2.length; i++){
// // //   num = num + arr_2[i]
// // // }

// // // console.log(num)

// // // let n1 = 22;
// // // // Example output:
// // // // 2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line

// // // for (let i = 0; i <= n1; i++) {
// // //   if (i % 2 === 0 && i !== 0) {
// // //     console.log(i);
// // //   }
// // // // }

// // // // Using a for loop output the elements in reverse order

// // let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];

// // // let newArrr = arr.reverse()
// // let neww = [];

// // for (let i = arr.length -1 ; i > 0; i--) {
// //   neww[arr.length - i] = arr[i]
// // }
// // console.log(neww);

// // // let str1 = "javascript";
// // // console.log(str.length);
// // // let str2 = [];

// // // for (let i = 0; i < str1.length; i++) {
// // //   if(i% 2 === 0){
// // //     str2.push()
// // //   }
// // // }

// // // let n = 4;

// // // let factorial = 1;

// // // for (i = 1; i <= 4 ; i++) {
// // //   factorial = i * factorial;
// // // }
// // // console.log(factorial);

// // let pin = 704;

// // for (i = 0; i < 4; i++) {
// //   let answer = +prompt("gushakeq qaranish tivy 4 pordzic", "");
// //   if (answer !== pin) {
// //     console.log("duq patveciq");
// //   } else {
// //     console.log("winnn ");
// //     break;
// //   }
// // }

// // let num = 8;
// // let add = 0;

// // for (let i = 1; i <= num; i++) {
// //   add = i + add;
// // }
// // console.log(add);

// // let y = 66;
// // let x = 5;
// // let z = 9;
// // let a = 71;
// // let o = [112];
// // o[x] = 4;

// // console.log(
// //   (!!!(z === 1 + 3 * 2) && !(o[0] === 662)) || (x * y < 100 && o.length >= 6)
// // );

// // let num;
// // const funs = (arr) => {
// //   num = 0;

// //   for (i = 0; i < arr.length; i++) {
// //     num = num + arr[i];
// //   }
// //   return num;
// // };
// // funs([2, 4, 2, 0, 8, 10]);
// // console.log(num);

// // Գրեք ծրագիր, որը user-ից կշարունակի խնդրել թիվ մուտքագրել։
// //  Երբ user-ը մուտքագրի “exit”, ցույց տվեք պատուհան (alert),
// //  որը կտպի մինչև այդ գրված բոլոր թվերի գումարը և կավարտի ծրագիրը։

// // let num = 0;

// // while (true) {
// //   let user = prompt("xndrum em mutqagrel tiv");
// //   if (user === "exit") {
// //     alert(num);
// //     break;
// //   }
// //   let res = +user;
// //   num = res + num;
// // }

// // //Գրեք computeTriangleArea անունով ֆունկցիա, որը կվերցնի եռանկյան հիմքը և բարձրությունը և կվերադարձնի եռանկյան մակերեսը։ Օրինակ computeTriangleArea(2, 9)․ պետք է վերադարձի 9 որպես արդյունք։

// // const  computeTriangleArea =(koxq, verev)=>{
// // return (koxq *verev) / 2
// // }

// // console.log(computeTriangleArea(2,9))

// let newArr = [];

// const rev = (arr) => {
//   for (let i = arr.lenght - 1; i--; i >= 0) {
//     newArr[arr.lenght - i] = arr[i];
//   }
// };
// rev([1, 2, 3, 4]);
// console.log(newArr);

let average = (arr) => {
  let gumar = 0;
  let i = 0;
  while (i < arr.length) {
    gumar = gumar + arr[i];
    i++;
  }
  return gumar / arr.length;
};

console.log(average([4, 3, 6, 10, 2]));

// let sum = 1
// const factorial = (x)=>{
//   for(let i = x; i > 0; i--  ){
//      sum = sum * i
//   }

//   return sum
// }

// console.log(factorial(5))
