// function valditaenum(a){
//     if (typeof(a)== "number"){
//             return true}
//         else{
//             return console.error("  not a number");
// }
// }

// function validatePositive(a){
//     if (a>0){
//             return true}
//            else return console.error("num is neg");
// }
// function squrt(a){
//     if (valditaenum(a) && validatePositive(a)){
//         return (a**0.5)
//     }
// }
// console.log(squrt(4))
// console.log(squrt("4"))
// squrt(-2)


// function sayHello(name="User"){
//     console.log(`Hello ${name}`)
// }

// sayHello("Alice")
// sayHello()

function avg(...numbers){
    avg=numbers.reduce((a,b)=>a+b)/numbers.length
    return avg
}

function avarige(...numbers){
    let sum=0
  numbers.map((a)=>sum+=a)
 return sum/numbers.length 
}
console.log(avarige(1,2,3,4,5))

function createMultiplier(factor){

        return (x) => {
            
            return x*factor
        }
    }

console.log(createMultiplier(3)(3))