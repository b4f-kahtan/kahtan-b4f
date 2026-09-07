

// // // let name = "kahtan"

// // // function sayHello() {
// // //     let name = "User"
// // //     if (name === "User") {
// // //         let age=25;
// // //         console.log(`Hello ${name}, you are ${age} years old.`)
// // //     } else {
// // //         console.log(`Hello ${name}`)
// // //     }
// // // }
// // // sayHello();
// // // console.log(age) // This will throw an error because 'age' is not defined in this scope
// // // console.log(name) // This will print "kahtan" because 'name' is defined in the global scope

// // // Function declarations are hoisted

// // // console.log(sayHi())

// // // function sayHi() {
// // //   console.log("Hi!");
// // //   return "hi"
// // // }


// // let person = {
// //     name: "John",
// //     age: 30,
// //     arrowgreet: () => {
// //         console.log(`Hello ${person.name}, you are ${person.age} years old.`);
// //     }
// // };

// // person.arrowgreet(); 
// // const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
// // let newFruits = fruits.map((fruit, index) => {
// //     return fruit + "s";
// // });
// // console.log(JSON.stringify(fruits)); // Output: ["apples", "bananas", "apples", "oranges", "bananas", "apples"]
// // console.log(JSON.stringify(newFruits)); // Output: [undefined, undefined, undefined, undefined, undefined, undefined]



// let persons = [
//     {name:"Alice", age:17},
//     {name:"Bob", age:18},
//     {name:"Charlie", age:19},
//     {name:"David", age:16}
// ]
// persons.filter((person)=>person.age>=18).map((person)=>console.log(person.name))

// let fruits = ["apple", "banana", "cherry", "date", "elderberry","elderberry"]
// let fruitRepeats = fruits.reduce((acc, fruit) =>{
//     acc[fruit] = (acc[fruit] || 0) + 1
//     return acc
// }, {})
// console.log(fruitRepeats);
// let numbers = [1, 2, 3, 4, 5]
// let sum = numbers.reduce((acc, num) => acc + num, 0)
// console.log(sum)

// const students = [
//     { name: "Alice", age: 20, grade: "A" },
//     { name: "Bob", age: 22, grade: "B" },
//     { name: "Charlie", age: 19, grade: "C" },
//     { name: "David", age: 21, grade: "A" }
// ];

// const bestStudents=students.filter((student)=>student.grade==="A").map((student)=>student.name)
// console.log(bestStudents) 

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let sumOfSquaresOfOdds = numbers.filter((num)=>num%2!==0).reduce((acc,num)=>acc+num*num,0)
// console.log(sumOfSquaresOfOdds) 

