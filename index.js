// let a = 1; // Khai báo sô (number, string, boolean, null, undefined,) => tham trị
// let b = 2;
// let c = a;
// a = 10;
// console.log(c)


// let c = { // object, array => tham chiếu
//     name: "Linh",
//     age: 27
// } 

// let d = c;
// c.name = "Ước";
// console.log("c", c);
// console.log("d", d);
// c.name => Ước
// d.name => Ước

// function changeValue(a) {
//     let a;
//     a = 10;
// }

// let b = 0;
// changeValue(b);
// console.log("b", b); // 0

function changeValue(obj) {
    // let obj = o;
    obj.name = "Ước";
}

let o = {
    name : "Linh",
    age: 27
}
changeValue(o)

console.log("o", o)


// function go() {
//     console.log("Go")
// }

// let go = () => {
//     console.log("Go");
// }

// function go(name) {
//     console.log("Go " + name);
// }

// let go = (name, age) => {
//     console.log("Go " + name);
// }


// function go(name) {
//     return "Go " + name;
// }

// let go = (name) => ("Go " + name)


// let go = (name) => {
//     return "Go " + name
// };

// console.log(go("Linh"));


// let const var

// let arr = [1, 4, 5, 7];
// let newArr = []
// for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i] * arr[i])
// }
// console.log(newArr)


// let newArr = arr.map((item) => {
//     return item * item;
// })
// console.log(newArr)
// map sẽ trả lại 1 mảng mới sau khi lặp


// let arr = [1, 4, 5, 7];
// // filter sẽ trả lại 1 mảng mới sau khi lọc dựa vào điều kiện nào đó
// let newArr = arr.filter((item) => {
//     return item % 2 === 1;
// })
// console.log("newArr", newArr);


// let arr = [
//     { // object literal
//         id: 1,
//         name: "Bánh mì"
//     }, 
//     {
//         id: 2,
//         name: "Kẹo"
//     },
//     {
//         id: 3,
//         name: "Bánh"
//     }
// ]

// let newArr = arr.filter((item) => {
//     return item.name.includes("B");
// })
// console.log(newArr);

// let arr = [1, 4, 5, 6];
// let total = arr.reduce((a, item) => {
//     return a + item; // 4 + 1
// }, 0)
// console.log("total", total)

// a = 0 => a = 1 =>


// let, const

// console.log(a); // cơ chế hosting
// let a = 10;

// let a = 10;// var: cho phép khởi tạo lại biến
// let a = 20;

// var: function scope
// let: block scope

// if(true) { // block scope {}
//     let a = 10;
// }
// console.log(a);
// const PI = 3.14;
// PI = 2;

// function go() {
//     var a = 10;
// }

// console.log(a);



// let a = "Linh";
// let b = "Pixi";
// let c = a + " lam tai " + b; // "<h1>" + a + "</h1>"
// let d = `${a} lam tai ${b}`; 
// console.log(d);

// let a = {
//     name: "Linh",
//     age: 22,
//     gender: "Nam"
// }

// let name = a.name;
// let age = a.age;
// let gender = a.gender;

// Destructuring
// let { name, age, gender, g } = a;
// console.log(name);
// console.log(g);

// let arr = [1, 4, 5, 6, 6];
// let [item1, item2] = arr;
// console.log(item1, item2)


// let obj = {
//     name: "Linh",
//     age: 22
// }

// let obj2 = {
//     gender: "Nam",
//     name: "Linh2"
// }

// let o = { // Spread Operator
//     ...obj,
//     ...obj2
// };
// obj.name = "Uoc";

// console.log("o", o);
// console.log("obj", obj);

// let arr = [1, 4 , 5];
// let arr2 = [11, 4 , 5];
// let newArr = [...arr, ...arr2]
// console.log(newArr) 