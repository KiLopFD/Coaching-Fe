/**
 * 1. Khai báo rõ ràng
 * 
 */

// 1. Declaration function:


// toàn cục
// function tong(a, b){
//     return a + b;
// }


// function tong(args){
//     return [...arguments]
// }

// console.log(tong(1,2,3,4))




// ES6: Variable Function và Arrow function



// const tong = function(a ,...args) {
//     return [ a, ...args]
// }

// console.log(tong(1,2,3,4))

// 1,2,3,4 <=> ...args

// ...[1,2,3] => 1,2,3

// ...args => 

// Object:

// info_user = {
//     name: 'Nguyễn văn a',
//     age: 20,
//     height: 170,
// }

// truyền thống
// console.log(info_user.name)
// info_user.weight = 200
// console.log(info_user);



// Es6:
// const { name, age, height } = info_user

// console.log({ ...info_user, weight: 200 });

/**
 * ...{name: 'Nguyễn văn a',
    age: 20,
    height: 170,}
    => name: 'Nguyễn văn a',
    age: 20,
    height: 170,
    => { name: 'Nguyễn văn a',
    age: 20,
    height: 170, weight: 200  }
 */

// Arrow Function:
/**
 * Khi code nhiều dòng sử dụng arrow function
 *  + {}: bắc buộc khi trả về đáp án return
 */

// const tong = (a, b) => {
//     return a + b
// }

// console.log(tong(1,3));


// const info_user = (name, age) => 


// console.log(info_user('Nam', 23));

// const button = ({...args}) => {
//     console.log(args);
// }

// button({a:1, b:2, c:'Nguyễn Văn A'})

/**
 * {name:}
 * {age}
 * {a, b, c}
 * ...args = a:1, b:2, c:'Nguyễn Văn A'
 */


// const tong = (...args) => {
//     console.log(args)
// }

// tong(1,2,3)


/**
 * map(): luôn trả về đáp án được lưu trong array mới
 * filter()
 * reduce()
 * foreach()
 * 
 */

// let array = [
//     {
//         name: 'iphone 15',
//         price: 3000,
//     },
//     {
//         name: 'iphone 12',
//         price: 4000,
//     },
//     {
//         name: 'iphone 10',
//         price: 6000,
//     },
//     {
//         name: 'iphone 11',
//         price: 8000,
//     },
// ]

// const find_even  = (value, index) => {
//     return value % 2 == 0
// }



// let new_array = array.map((value, index) => {
//     return value % 2 == 0
// })

// console.log(new_array, array);


// let new_array = array.filter((value, index) => {
//     return value.price > 5000
// })

// console.log(new_array, array);


// reduce: tính toán biểu thức

let array = [1,2,3,4,5,6]

// let ket_qua = array.reduce((preValue, currValue, index ) => preValue + currValue)

// // 1 + 2 => return : 3
// // 3 + 3 => return : 6


// console.log(ket_qua);

// let new_array = array.forEach((value, index) => {
//     if (value % 2 == 0)
//         console.log(value*2)
// })

