'use strict';
// let text = ";alskjdfkasjdfjaklsjd;fja;sljdf;ajsdjfl;asdjflaskjdfl;kasjblvj nclxjzg.jdf,f";
// const numbers = 123424343;
// alert("text");
// let text = "sldjfa;ldj;lafs" //"" - type of data = text
// window.alert("our first js lesson")


// let firstNum = 4.4;
// // console.log(number + 5);

// typeof();
// console.log(typeof(firstNum));
// console.log(typeof("Hello"));  //string


// let text = "" //string

// let man = true;
// let man2 = false;
// let joke = 'true';
// console.log(typeof(joke));


// const woman = {  //object
//     name: 'Maria',
//     age: 25,
//     isMarried: true
// };

// woman.age = 27;
// woman.isStudent = true;

// console.log(woman.isStudent)

// // console.log(woman.age);

// let arr = ['Theo', 1.5, false,[], {name: "Slavik"}]; //array


// // console.log(arr[0]);

// // console.log(typeof(arr));

// const woman1 = {  //array
//     0: 'Maria',
//     1: 25,
//     2: true
// };

// let storeName = 'atb';

// const storeDescriprion  = {
//     budget: 10000,
//     employees: ['Maria', 'Theo', 'Alex'],
//     productsPrise: {
//         pen: 30, 
//         note: 15
//     },
//     isOpen: true
// };

// console.log(storeDescriprion.employees[1])


// const user = {};
// user.name = "Natalia";
// user.age = 33;
// user.isMarried = true;
// user.favColors = ["red", "blue", "white"];
// user.data = {
//     city: "Kyiv",
//     likeAnimals: true
// };

// console.log(user);

// const project = {
//     name: "Real Estate",
//     price: 3000,
//     open: true,
//     employees: ["Santa", "Maria", "Lucia"],
//     apartments: {
//         oneRoomSquare: 60,
//         twoRoomSquare: 100
//     }
// };


// const stockholm = {
//     budget: 1500000,
//     mainStreet: 'Vasagatan',
//     isBiggestCity: true,
//     bestHotels: {
//         scandic: 100,
//         blueLaguna: 150,
//         elite: 250,
//     }
// };

// const object = {
//     text: 'hello',
//     number: 5,
//     question: true, 
//     ojectThree: {
//         name: 'Maria',
//         age: 18,
//         isChildren: false
//     },
//     arr: ['blue', 'white', 'yellow', 121, false, {text: 'HelloWorld'}, [1, 3, 4, 5]]
// };

// let arr = ['blue', 'white', 'yellow', 121, false, {text: 'HelloWorld'}, [1, 3, 4, 5]]; //array

// let name1;
// let data = [1, "black", true, null, name1]; //array


// const result = confirm("Are you here?");

// console.log(result)

// const answer = prompt("Скільки вам років?", "")
// console.log(typeof(answer + 5));

// const answers = [];
// answers[0] = prompt("Your Name?", "");
// answers[1] = prompt("Your Age?", "");
// answers[2] = prompt("Your weight?", "");

// // console.log(answers);
// document.write(answers);


// const category = 'toys';

// console.log('http://someurl.com/' + category + '/' + '4' );

// console.log(`http://someurl.com/${category}/6/hello`);// інтерполяція


// const user = "Nataliia";

// alert(`Hello ${user}`);

// + - : /



// console.log(2 + "px");  //"2px" 

// let number = 6;
// // increment  ++
// // decrement --
// console.log(number++); // 6
// console.log(number); //  7
// console.log(number--); // 
// console.log(++number); // 


// console.log(2 + 2 === "4")

// console.log(false == "jgjjgjj") //falsy  - 0 , false, "", null, undefined, Nan - 6шт

// n = n + 1 // n = n++

//task1

// let numberOfFilms = prompt("Скільки фільмів ви вже подивилися?", "");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// let a = prompt('Один з останніх переглянутих фільмів:', '');
// let b = prompt('На скільки оціните його? ', '');
// let c = prompt('Один з останніх переглянутих фільмів:');
// let d = prompt('На скільки оціните його? ', '');

// personalMovieDB.movies[a] = b; 
// personalMovieDB.movies[c] = d;

// // personalMovieDB.movies.hello = d;



// console.log(personalMovieDB);

// if (1) {
//     console.log('Ok!');
// } else {
//     console.log('GoodBye!');
// }

// //true
// if (num <=  50) {
//     console.log("Error!")
// } else if (num > 100) {
//     console.log('Багато!')
// } else {
//     console.log('Ok!')
// }

// //тернарний оператор

// //  умова ? дія, якщо true : дія, якщо false
// //true or false      if true               if false
// (num === 50) ? console.log('Okay') : console.log('Error!');




// const num = 101;

// switch (num) {
//     case 49:
//         console.log('Error!');
//         break;
//     case 100:
//         console.log('Not enought!');
//         break;
//     case 101: 
//         console.log('Great!');
//         break;
//     default: 
//         console.log('Not at this time!')
//         break;
// }


// const burger = true;
// const cola = false;


// // && - оператор "і"

// if (burger && cola) {
//     console.log("lets have a break!");
// }
// console.log((burger && cola));

// // "||" - оператор "або"

// const price = 10; 
// const sale = 5;

// console.log(price < 5 || sale < 10);
// console.log(price > 10 || sale < 0 );

// console.log("a" > "b");

// const a1 = [3, 4, 5, 6, 6];

// const str = "alskdjfal;sjd";
// str.length

// a1[0];
// // console.log(str[0]); 
// "2" > "12" //true

// console.log(str.length);

