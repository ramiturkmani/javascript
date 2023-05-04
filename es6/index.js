// if (true) {
//     var oldImplementation = "old way";
//     let newLet = "new way let";
// }

// console.log(oldImplementation);
// console.log(newLet);

// let let1 = "new let";
// let1 = "new let value";
// console.log(let1);

// const const1 = "new const";
// const1 = "update const";

// let let2;
// function someFunc() {
//     let2 = "assign value";
// }

// //Update var with let/const

// const statuses = [
//     { code: 'OK', response: 'Request successful' },
//     { code: 'FAILED', response: 'There was an error with your request' },
//     { code: 'PENDING', response: 'Your reqeust is still pending' }
// ];

// let message = '';
// const currentCode = 'OK';

// for (let i = 0; i < statuses.length; i++) {
//     if (statuses[i].code === currentCode) {
//         message = statuses[i].response;
//         console.log(message);
//     }
// }

//Template Literals
// const student = "John";
// const teacher = "Mrs.Elany";
// const studentMessage = `${student} is ${teacher}'s favorite student.`; //old way
// const studentMessOld = student + ' is ' + teacher + '\'s favorite student.'; //new way

// console.log(studentMessage);
// console.log(studentMessOld);


//Activity: Refactor the code to use template strings
// const device_id = 25;
// const guid = 654321;
// const data = '{ device_id : ' + device_id + ' , ' + 'guid: ' + guid + ' }'; //old way
// const dataNew = `{ device_id : ${device_id} , guid: ${guid} }`; //new way
// expected result: { device_id : 25 , guid: 654321 }

// console.log(data);
// console.log(dataNew);

// const userName = "John";
// function reverseName(name) {
//     return name.split("").reverse().join("");
// }
// console.log(`My name is ${userName} and my name contains ${userName.length} letters`)


//Activity: Convert below code into es6 format

// function getExamples() {
//     return fetch('https://example.com/')
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (response) {
//             return response.data;
//         }).then(function (data) {
//             console.log(data);
//         })
// }

let data;

//es6 format
const getExamples = () => {
    return fetch('https://example.com/')
        .then((response) => response.json())
        .then((response) => response.data)
        .then((data) => console.log(data));
};

//Destruction
//Before...
const obj = {userName: 'Mark', lastName: 'Twain', age: 40 };
console.log( `Welcome ${obj.userName} ${obj.lastName} ${obj.age}` );
 
const userName = "John";

//After...
const { userName: newUserName, lastName, age } = obj;
console.log( `Welcome ${newUserName} ${lastName} ${age}` );
console.log( `Welcome ${userName} ${lastName} ${age}` );

//Default prop value
function multiply(num1, num2 = 2) {
    return num1 * num2;
}
console.log(multiply(5)); //10
console.log(multiply(5,10)); //50


