"use strict";

// let num = 20


// function showMessage() {
//     let num = 15
//     console.log(num)
// };

// showMessage();

// console.log(num);




// // let result = calc(4, 6);

// console.log(calc(4, 2));
// console.log(calc(45, 2));
// console.log(calc(4, 6));
// console.log(calc(4, 45));


//function declaration

// function calcNum(a, b){

//     return a + b;
// }

//function expression
// let ret = function() {
//     let num = 20 
//     return num;
// }

// console.log(ret())

// arrow func 


// let res = (a, b) => a + b;


// console.log(res(12, 5))

// function firstTask() {
// //arr.length
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     for(let i = 0; i < arr.length; i++){
//         result[i] = arr[i]
//     }

//     console.log(result)
//     return result;
// }


// function secondTask() {
//     // Значення масиву не міняємо 
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     for(let i = 0; i <data.length; i++) {
//         if (typeof(data[i]) === 'number') {
//             data[i] = data[i] * 3;
//         } else if (typeof(data[i]) === 'string') {
//             data[i] = data[i] + ' - done'
//         }
//     }
//     console.log(data)

//     return data;
// }

// secondTask();

// let usdCurr = 38;
// let eurCurr = 42;
// let sekCurr = 3.7;
// let dkkCurr = 4.7;
// let discount = 0.95;

// // function test() {
// //     for (let i = 0; i < 5; i++) {
// //         console.log(i);
// //         if(i === 3) return
// //     }
// // }

// test()
// function doNothing(){
//     console.log('sladjf;s')
// };
// console.log(doNothing() === undefined);
// // function convert(amount, curr) {
// //     return amount * curr;
// // };

// function promo(result){
//     return result * discount;
// }

// let res = convert(499, usdCurr);

// promo(res);

// function convertEur(amount) {
//     console.log(amount * eurCurr)
//     return amount * eurCurr;
// };


// function convertSek(amount) {
//     console.log(amount * sekCurr)
//     return amount * sekCurr;
// };

let txtFromServer = "Введіть т";



// function returnQuantityOfText(txt) {
//     return txt.length
// }

// let result = returnQuantityOfText(txtFromServer);

// if (result <= 10) {
//     console.log('Okay');
// } else {
//     console.log('Перевищений ліміт')
// }

// let result = function(txt) {
//     return txt.length
// }

// console.log(result('hello'))



// let obj = {
//     name: 'Igor', 
//     age: 23
// }

// console.log(obj)


//string methods 

// let txt = 'sdsd'

// console.log(txt.indexOf('d'))

let book = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates fuga debitis veniam voluptatum recusandae harum itaque et unde similique, perspiciatis tempora error fugiat sunt, necessitatibus tempore. Reprehenderit porro odit Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates fuga debitis veniam voluptatum recusandae harum itaque et unde similique, perspiciatis tempora error fugiat sunt, necessitatibus tempore. Reprehenderit porro odit Lorem "

let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");


