// // // // // // // // function calculateSum(firstNum, lastNum, operator) {
// // // // // // // //     if operator

// // // // // // // // }


// // // // // // // // let firstNum = prompt("What is the first number? ")
// // // // // // // // let operator = prompt("What operator will you use? ")
// // // // // // // // let lastNum = prompt("What is the second number? ")

// // // // // // // // console.log($`The sum of (firstNum) `)


// // // // // // // function calculator(num1, operator, num2) {
// // // // // // //     switch(operator) {
// // // // // // //         case "+":
// // // // // // //             return num1 + num2;        
// // // // // // //         case "-":
// // // // // // //             return num1 - num2;
// // // // // // //         case "%":
// // // // // // //             if (num2 === 0) return "Can not divide by Zero"
// // // // // // //             return num1 / num2
// // // // // // //         case "x":
// // // // // // //             return num1 * num2;

// // // // // // //     }
// // // // // // //     return null
// // // // // // // }

// // // // // // // ES6

// // // // // // const calculatorES6 = (num1, operator, num2) => {
// // // // // //     return {
// // // // // //         "+": num1 + num2,
// // // // // //         "-": num1 - num2,
// // // // // //         "*": num1 * num2,
// // // // // //         "%": num1 % num2,
// // // // // //         "/": (num1 || num2) ? num1/num2: "Cannot divide by 0!"
// // // // // //     } [operator]
// // // // // // }

// // // // // // // ES6 

// // // // // // const operationES6 = (num1, num2, operator) => eval(num1 + operator + num2)
// // // // // // console.log(operationES6(2, 2, "/"))


// // // // const sortNumES6 = (arr, str) => str === "Asc"? arr.sort((x, y) => x - y): str === "Des"? arr.sort((x, y) => x - y): "Cannot Sort! "

// // // // const sortNumES6Two = (arr, str) => str === "Asc"? arr.sort((x, y) => x - y): arr.sort((x, y) => x - y)



// // // function rockPaperScissors(Player1, Player2) {
// // //     if (Player1 === Player2) {
// // //         console.log("It's a Draw!");
// // //     } else if (
// // //         (Player1 === "rock" && Player2 === "scissors") ||
// // //         (Player1 === "scissors" && Player2 === "paper") ||
// // //         (Player1 === "paper" && Player2 === "rock")
// // //     ) {
// // //         console.log("Player1 Wins!");
// // //     } else {
// // //         console.log("Player2 Wins!");
// // //     }
// // // }

// // // function gamePlay(p1, p2) {
// // //     if (p1 === p2) {
// // //         return console.log(`Player One is ${p1} and Player Two is ${p2}. This is a draw.`);
// // //     }
// // //     if (p1 === "rock" && p2 === "scissors" || p2 == "rock" && p1 === "scissors") {
// // //         return console.log(`Player One is ${p1} and Player Two is ${p2}. Winner is Rock.`);
// // //     }
// // //     if (p1 === "rock" && p2 === "scissors" || p2 == "rock" && p1 === "scissors") {
// // //         return console.log(`Player One is ${p1} and Player Two is ${p2}. Winner is Rock.`);
// // //     }
// // //     if (p1 === "rock" && p2 === "scissors" || p2 == "rock" && p1 === "scissors") {
// // //         return console.log(`Player One is ${p1} and Player Two is ${p2}. Winner is Rock.`);
// // //     }
// // //     else {
// // //         return console.log("Error")
// // //     }
// // // }

// // // AI Version

// // function rockPaperScissors(p1, p2) {
// //     if (p1 === p2) return "It's a Draw!";

// //     const wins = {
// //         rock: "scissors",
// //         scissors: "paper",
// //         paper: "rock"
// //     };

// //     return wins[p1] === p2 ? "Player1 Wins!" : "Player2 Wins!";
// // }


// function createSubArray(x, y, z) {
//     // create an empty array
//     let origArray = [] 
//     // data(z),(y) times
//     for (let i = 0; i < x; i++) { 
//         // create an empty subarray
//         let subArray = []; 
//         // populate subarray with data
//         for (let j = 0; j < y; j++) { 
//             subArray.push(z);
//         } 
//         // populate main array with sub array (x) times
//         origArray.push(subArray) 
//     }
//     return origArray
// }
// // should print ([[3,3],[3,3],[3,3]])
// console.log(createSubArray(3, 2, 3)) 