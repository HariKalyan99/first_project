// // // // // // // console.log("Hello world this is my name, first project");
// // // // // // // console.log('hello world');
// // // // // // // console.log(`hello world`);
// // // // // // // console.log('1653783632');
// // // // // // // console.log(100);
// // // // // // // console.log("@$@%@%^@%");

// // // // // // // console.log(100 + 100);

// // // // // // // console.log(100 + 100 - 50 + 8 / 4 + 20 * 50);

// // // // // // // var store = 100 + 100; // 200
// // // // // // // var a = 100 + 300; // 400

// // // // // // // var b = store; // 200

// // // // // // // store = b + a; // 200 + 400
// // // // // // // store = store; // 600

// // // // // // // store = a - 400;
// // // // // // // a = store;
// // // // // // // b =  store + a;
// // // // // // // console.log(store, a, b);

// // // // // // // variable declarations and initializations

// // // // // // // var a;  // var declaration

// // // // // // // a = 90; // var initialization

// // // // // // // var b = 100; // var initialaization

// // // // // // // var c = true // boolean

// // // // // // // a = 100;

// // // // // // // c = 100;

// // // // // // // c = false; d = 100;

// // // // // // // console.log(a , b, c);

// // // // // // // types of storage or variables

// // // // // // // console.log(a);

// // // // // // // var a; // declaration

// // // // // // // a = 10; //assignment

// // // // // // // var b = 20; // initialization

// // // // // // // console.log(a);

// // // // // // // let b = 10;

// // // // // // // const c = 10;

// // // // // // // let a;

// // // // // // // a = 10;

// // // // // // // let b = 20;
// // // // // // // console.log(b);

// // // // // // // a = 20;
// // // // // // // b = 20; // reinitialize
// // // // // // // // c = 20; // never reitializes

// // // // // // // a = 30; // reinitialize

// // // // // // // var f;
// // // // // // // let u;
// // // // // // // const g;

// // // // // // // g = 10

// // // // // // // u = 10

// // // // // // // a = 10; // default

// // // // // // // let a = 20;

// // // // // // // console.log(a);

// // // // // // // // var
// // // // // // // let a;
// // // // // // // let a

// // // // // // // console.log(a)

// // // // // // // data types

// // // // // // //  number, boolean, string, undefined, null

// // // // // // // primitive datatypes

// // // // // // // const a = undefined;
// // // // // // // const b = false;
// // // // // // // const c = 'string';
// // // // // // // const d = 100;
// // // // // // // const e = null

// // // // // // // // non - primitive -> functions, object, arrays

// // // // // // // function(){

// // // // // // // }

// // // // // // // const d = [];

// // // // // // // const r = {};

// // // // // // // comparators, logical orperators and strict operators

// // // // // // const a = 30;
// // // // // // // c = 30;

// // // // // // // const b = c;

// // // // // // // console.log(a == b); // doesn't check data type
// // // // // // // console.log(a === b); // checks data type

// // // // // // // console.log(a && b);
// // // // // // // console.log(a || b);
// // // // // // // console.log(a != b);

// // // // // // // console.log(false || true)

// // // // // // // console.log(!false)

// // // // // // // console.log(a && true);
// // // // // // // console.log(true && a);

// // // // // // // console.log(100 && 20)

// // // // // // console.log(undefined && true);
// // // // // // console.log(null && true);
// // // // // // console.log(0 && true);
// // // // // // console.log('' && true);

// // // // // // type coersion

// // // // // // const a = "hello";

// // // // // // console.log(a + '[]')

// // // // // // if else condition

// // // // // // console.log(100 + 20 != 120);

// // // // // // const val = "razor";

// // // // // // if (!(false === null)) {
// // // // // //   console.log("yes it is true");
// // // // // // } else {
// // // // // //   console.log("no it is false");
// // // // // // }

// // // // // // console.log(typeof (val + 100) === "string")

// // // // // //  == , ===

// // // // // // var a = 100;
// // // // // // var b = 0;

// // // // // // if (50 + 80 === a + 20) {
// // // // // //   console.log("it's true @1");

// // // // // //   if (typeof a !== "number") {
// // // // // //     console.log("yes it is a number");
// // // // // //   } else {
// // // // // //     console.log("no it is not a number");
// // // // // //   }
// // // // // // } else if (30 + 90 === a) {
// // // // // //   console.log("it's true @2");
// // // // // // } else if (30 + 70 !== a + b) {
// // // // // //   console.log("it's true @3");

// // // // // //   if (typeof a !== "number") {
// // // // // //     console.log("yes it is a number");
// // // // // //   } else {
// // // // // //     console.log("no it is not a number");
// // // // // //   }
// // // // // // } else {
// // // // // //   console.log("it's false");
// // // // // // }

// // // // // // console.log(typeof 1)

// // // // // // console.log("number" === 'number')

// // // // // // Loops -> loops are those which occur for multiple execution of the described code.
// // // // // // for(initialization, condition, updater) {

// // // // // // }

// // // // // // for loop

// // // // // // let arr = [
// // // // // //   "hello this is my new text" , //0
// // // // // //    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatibus voluptate in nesciunt!" , //1
// // // // // //   "Illum, doloribus deleniti dolorem, et amet ipsum adipisci quos, quae magni saepe nostrum modi! Quaerat, delectus qui!", //2
// // // // // // ]

// // // // // // for(i = -10; i<=-5; i--){ // (i = 0) (0 < 10) (i + 1)/(i++) => i = 1
// // // // // //   console.log(i)
// // // // // // }

// // // // // // var i = 1;

// // // // // // for(i; i<=11; i+=5){ // (i = 0) (0 < 10) (i + 1)/(i++) => i = 1
// // // // // //   console.log(i)
// // // // // // }
// // // // // // console.log(i+=10)

// // // // // // i = 10 + 15 => i+=15

// // // // // // indexing

// // // // // // 0 -> 1 --> 2 ---> 3
// // // // // // first iteration // (i = 0) (0 < 10) (i + 1)/(i++) => i = 1
// // // // // // second iteration // (i = 1) (1 < 10) (1 + 1)/(i++) => i = 2
// // // // // // third iteration // (i = 2) (2 < 10) (1 + 1)/(i++) => i = 2
// // // // // // .
// // // // // // .
// // // // // // .
// // // // // // .

// // // // // // var b = 10;
// // // // // // b+=1;

// // // // // // console.log(b + 1);

// // // // // // loop starts from 5 -> (excluding)500 and reverse it
// // // // // // now start from 498 while reversing it?
// // // // // // skip 5 on each iteration?

// // // // // // loop starts from 2 -> (excluding)10 and reverse it
// // // // // // now start from 8 while reversing it?
// // // // // // skip 3 on each iteration?
// // // // // // print "the number I am iterating is: " + val on every iteration

// // // // // // non primitive data types

// // // // // // function gokul(){ //declaration
// // // // // //   // code exec start
// // // // // //   console.log("Good evening");
// // // // // //   // code exec end
// // // // // // }

// // // // // // gokul(); // fn call

// // // // // // function greetings(parameters) { // declaration

// // // // // // }

// // // // // // greetings(arguements); // call

// // // // // // function greetings

// // // // // // case ->

// // // // // // greetingsFunction -> camelcase letters
// // // // // // Greetingsfunction -> pascal/title case letters
// // // // // // greetings-function -> kebab case letters
// // // // // // greetings_function -> snake case letters

// // // // // function asdkasdka(valalalala1, val2, val3, val4, val5, val6){
// // // // //   console.log(typeof valalalala1, "value: ", valalalala1);
// // // // //   console.log(typeof val2, "value: ", val2);
// // // // //   console.log(typeof val3, "value: ", val3);
// // // // //   console.log(typeof val4, "value: ", val4);
// // // // //   console.log(typeof val5, "value: ", val5);
// // // // //   console.log(typeof val6, "value: ", val6);

// // // // //   //

// // // // //   console.log(valalalala1, val2, val3, val4, val5, val6);

// // // // // }

// // // // // asdkasdka("10", true, 10, undefined, null, "good morning");

// // // // // function greetings(val){
// // // // //   console.log("its " + val + " o clock in the morning")
// // // // // }

// // // // // greetings(10)

// // // // // // greet according to time (24h format)
// // // // // // pass arguments, based on those greet accordingly
// // // // // // ex 6 -> "good morning!"
// // // // // // ex 15 -> "good afternoon!"
// // // // // // ex 18 -> "good evening!"
// // // // // // ex 21 -> "good night!"

// // // // // // 1-12 as "good morning!"
// // // // // // 13-16 as "good afternoon!"
// // // // // // 16-19 as "good evening!"
// // // // // // 19-23 as "good night!"

// // // // // // countdown timer
// // // // // // create a function to count down from 100 - 0;

// // // // // // non - primitive data types

// // // // // // es 5 ecma script 5 2015
// // // // // function hello1(){
// // // // //   console.log("Hello1");
// // // // // }

// // // // // // es 6+ es 22 2016
// // // // // const hello2 = () => {
// // // // //   console.log("Hello2");
// // // // // }

// // // // // hello1();
// // // // // hello2();
// // // // // value = null
// // // // // console.log(typeof null && value === null)

// // // // // console.log(typeof {} === typeof null)

// // // // // function counter() {
// // // // //   for (let i = 1; i <= 10; i++) {
// // // // //     console.log(i);
// // // // //   }
// // // // // }

// // // // // // Call the function
// // // // // counter();

// // // // // function fullName(lastName, brotherName){
// // // // //   // console.log(brotherName)
// // // // //   console.log("My name is Gokul " + lastName);
// // // // //   console.log(`My name is Gokul ${lastName}`);
// // // // //   return
// // // // // }

// // // // // fullName("Gurumurthy", "ashwin")

// // // // function fullName(lastName){
// // // //   const firstName = "Gokul"; // gokul
// // // //   const fullName = firstName.concat(lastName); // gokul....
// // // //   console.log('My name is ' + fullName); // true
// // // //   console.log("My name is Gokul " + lastName); // true
// // // //   console.log(`My name is Gokul ${lastName}`); // string literals // true
// // // //   return `My name is ${fullName}` // true
// // // // }

// // // // // const myName = fullName("Gurumurthy");

// // // // console.log(fullName("Gurumurthy"))

// // // // let outPut;
// // // function name() {
// // //   // declare 'output' as a variable;
// // //   // use for loop for countdown from 10 - 1;
// // //   //
// // // }

// // // function countUp(){
// // //   let time = 0;
// // //   for(let i = 0; i<=10; i++){ // 0, 1, 2 +1 , 3, 4+ 1, 5, 6+1, ....10 + 1
// // //  console.log(i);

// // //     time = i + 1;
// // //   }
// // //   console.log(time); // 11
// // //   return time;
// // // }

// // // // console.log(countUp());

// // // // // `my name is hari ${}`

// // // // function print100(value){
// // // //   return value;
// // // // }

// // // function printEven(){
// // //   for(let i = 1; i<=10; i++){ // 0, 1, 2 +1 , 3, 4+ 1, 5, 6+1, ....10 + 1
// // //     if(i%2 === 0){
// // //       console.log(`${i} is even number`)
// // //     }
// // //   }
// // // }

// // // printEven()

// // // scoped variables

// // // global scoped

// // // var a = 10;
// // // let b = 11;
// // // const c = 12;

// // // {
// // //     var d = 13;
// // //     let e = 14;
// // //     const f = 15;
// // //     console.log(a, b, c, d, e, f, "Block");
// // // }

// // // function h() {
// // //     var g = 16;
// // //     let h = 17;
// // //     const i = 18;
// // //     console.log(a, b, c, d, g, h, i, "Function");
// // // }

// // // h();

// // // console.log(a, b, c, d, "Global");
// // // {
// // //   // block scoped
// // //   var d = 13;
// // //   let e = 14;
// // //   const f = 15;

// // //   console.log(a, b, c, d, e, f, g, h, i);
// // // }

// // // function hydra() {
// // //   // function scoped
// // //   var g = 10;
// // //   let h = 11;
// // //   const i = 12;
// // //   // local scoped to the function
// // //   console.log(a, b, c, d, e, f, g, h, i);
// // // }

// // // hydra();

// // // console.log(a, b, c, d, e, f, g, h, i);

// // // var declare time = 0
// // // for 1 => 10
// // // even + 1;
// // // {
// // // var time ++
// // // }
// // // return time;

// // // pass by ref and pass by val

// // // pass by value

// // // var num1 = 1; // #address1
// // // var num2 = num1; // #address2
// // // var num3 = num2 // address3
// // // num3 = 2
// // // console.log(num1, num2, num3);

// // // const str = "hello";
// // // str[0] = "f"
// // // console.log(str[0])

// // // var arr1 = [1,2,3]; // address 1
// // // var arr2 = arr1; // address 1

// // // var arr3 = arr2; // --> address 2 // ref

// // // arr3[0] = 10

// // // console.log(arr1, arr2, arr3);

// // // var obj1 = {
// // //     name: "Hari",
// // //     age: 25,
// // //     male: false,
// // //     nestedDetails: {
// // //         address: "kengeri",
// // //         country: {
// // //             india: true
// // //         }
// // //     },
// // //     1: 560060,
// // //     arr: [10,200,2220,10],
// // // }

// // // obj2 = obj1;
// // // obj1 = obj2;
// // // obj3 = obj1;
// // // obj3["male"] = !false;

// // // obj1["name"] = 'kalyan';

// // // obj1["nestedDetails"].address =  {
// // //     kengeri: "satellite town"
// // // }

// // // console.log(obj1, obj2, obj3);

// // //

// // // function hail(val){
// // //     val+=1;
// // //     return val;
// // // }

// // // var a = 1;

// // // const out = hail(a)

// // // console.log(out); //
// // // console.log(a); //

// // // pass by ref

// // // function hail(val){
// // //     val[1] = 10;
// // //     // console.log(val) => [1,10]
// // //     return val;
// // // }

// // // var a = [1, 2];

// // // const out = hail(a)

// // // console.log(out);
// // // console.log(a);

// // // // arr and obj

// // // const arr = [1,2,3,4];

// // // arr[100] = 100;

// // // console.log(arr[5])

// // // const fresh = {
// // //     name: "hari"
// // // }
// // // console.log(fresh)

// // // fresh.name = {
// // //     hari: "harikalyan"
// // // }

// // // console.log(fresh);

// // // for(let i = 0; i<10; i++){
// // //     console.log(i)
// // // }

// // // let j = 0;
// // // while(j < 10) {
// // //     console.log(j);
// // //     j++;
// // // }

// // function pass(array) {
// //     array[2] = 10000;
// //     array[1] = 200;
// //     return array;
// // }

// // let arr = [1,2,3,4]

// // let arrFn = pass(arr);

// // console.log(arrFn);

// // console.log(arr);

// // while

// // let j = 0;
// // while(j < 10) {
// //     console.log(j);
// //     j++;
// // }

// // function sum(a,b){
// //     const out = a+b
// //     return out
// // }

// // const a = 3
// // const b = 4

// // console.log(sum(a,b));

// function even(value) {
//   if (value % 2 === 0) {
//     return "Even";
//   }
//   return "Odd";
// }

// // console.log(even(10))

// // function prime(value) {
// //   if (value === null || value === undefined) return "enter a valid numeric char";
// //   if (value >= 0 && value <= 2) return "Not a valid number";
// //   if (value >= "a" && value <= "z") return "NAN";
// //   if (typeof value === "string") return "pass a number";

// //   let count = 0;
// //   for (let i = 1; i <= value; i++) {
// //     //   console.log(value%i, value , i)
// //     if (value % i === 0) {
// //       count++; // 1, 2
// //     }
// //   }
// //   if (count > 2) {
// //     return "Not a Prime number";
// //   }
// //   return "Prime";
// // }

// // console.log(prime(undefined));

// // function pal(str) {
// //   let emptyStr = ""; // nitin
// //   for (let i = str.length - 1; i >= 0; i--) {
// //     emptyStr += str[i]; //"" + n, n + i = ni, ni + t
// //   }
// //   // return
// //   if (emptyStr === str) {
// //     return "Palindrome";
// //   }
// //   return "Not a Palindrome";
// // }

// // console.log(pal("nitin"));

// //  value = 10, 5 * 2 = 10

// function evenWithoutMod(value) {
//     let arr = [ 2,4,6,8,10]
//     for(let i = 0; i <= arr.length; i++){
//        if(arr[i] === value){
//         return "Even"
//        }
//     }
//     return "Odd"
// }

// console.log(evenWithoutMod(5))

// // find the sum of natural numbers

// // function naturalNum(value){
// //   let num = 0;
// //   for(let i = 0; i<=value; i++){
// //     num+=i;
// //   }

// //   return num;
// // }

// // console.log(naturalNum(10))

// // function naturalNumber(val){
// //   let op = null;

// //   for(let i =0; i<=val; i++){
// //     op+=i
// //       // console.log(op+=i, "out: ", op, "i: ", i);
// //   }

// //   return op

// // }

// // console.log(naturalNumber(10))

// function fn(str){
// }
// fn("dollar");

// // reverse a string
// // output // dollar => rallod ans

// function maxEvenNumber(val){
// }

// maxEvenNumber(11);

// // find maximum even number between 1 - N, where N is an arguement that is 11.
// // output // 11 => 10 ans

// function sumOfOdd(val){
// }
// sumOfOdd(10);

// // find the sum of all the odd numbers
// // output // 10 => 1+3+5+7+9 = 25

// function findVowels(str){
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let count = 0

//   for(let i = 0; i<str.length; i++){
//     if(vowels.includes(str[i])){
//         count++;
//       }
//   }

//   return count
// }

// console.log(findVowels("gokul"))

// function findVowels(str) {
//   let count = 0;
//   const len = str.length;

//   for (let i = 0; i < len; i++) {
//     if (
//       str[i] === "a" ||
//       str[i] === "e" ||
//       str[i] === "o" ||
//       str[i] === "i" ||
//       str[i] === "u"
//     ) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(findVowels("harikalyan"));

// const arr = [1, 2, 3, 4];

// for (let i = 0; i < arr.length; i++) {
//   console.log("Traditional for loop", i);
// }

// for (let val of arr) {
//   console.log("for of loop", val);
// }

// for (let val in arr) {
//   console.log("for in loop", arr[val]);
// }

// function vowelArithmaticOperation(valArr, operator){
//   let result = 0;
//   for(let i = 0; i<valArr.length; i++){
//     if(operator === "+"){
//       result+=findVowels(valArr[i])
//     }
//   }

//   return result
// }

// const ans = vowelArithmaticOperation(["harikalyan", "gokul", "gurumurthy", "lakshmipriya"], "+");

// console.log(ans) // 13

// function findValueIndexInVowel(str) {
//   const len = str.length;
//   for (let i = 0; i < len; i++) {
//     if (
//       str[i] === "a" ||
//       str[i] === "e" ||
//       str[i] === "o" ||
//       str[i] === "i" ||
//       str[i] === "u"
//     ) {
//       return i;
//     }
//   }
// }

// console.log(findValueIndexInVowel("lakshmipriya"));



// function removeDuplicates(str){
//   return [...new Set(str.split(""))].join("");
// } 

// console.log(removeDuplicates("banana"));



// Reverse Words in a String
// Reverse only the words’ order, not the letters.
// Example: "I love JS" → "JS love I"


// function reverseWord(word){
//   return word.split(" ").reverse().join(" ");
// }

// console.log(reverseWord("I Love Js"))



// Count Occurrences of Element
// Count how many times a given value appears in an array.
// Example: [1, 2, 2, 3], value = 2 → 2