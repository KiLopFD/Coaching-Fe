/**
 * Biến và kiểu dữ liệu
 * Đặt tên biến theo quy tắc Camel Case:
 *  - Viết chữ cái đầu của từ thứ hai trở về sau
 *  - Ví dụ: soNguyen
 *  - đặt ngắn gọn và có ý nghĩa
 * let: là một khối ({}) => nó giống ngôn ngữ C++ là phải khai báo trước
 * const: là giá trị không đổi
 *  Dấu bằng thứ 3: kiểm tra giá trị và dữ liệu
 *  
 * Object JS: { key: value }
 * 
 */

// let i
// i = 0
// i = i + 1

// console.log(i)
// console.log("hello")


// const là không đổi
/**
 * object: không có thuộc kiểu dữ liệu nguyên thủy Primitive type
 */
// const sinhVien = {

// }

// sinhVien.name = "Nguyen Van B"

// sinhVien = {}

// console.log(sinhVien);

// console.log(1 === 1);

/**
 * 
 */


// let array = []
// // thêm vào cuối
// array.push(1) // [1]
// array.push(1) // [1]
// array.push(1) // [1]
// array.push(1) // [1]
// array.push(1) // [1]
// xóa tất cả
// array.pop()

// array.shift()
// array.unshift(2)

// let arr2 = [1,2,3,4,'43',[3,4]]

// let newArray = array.concat(arr2)
// /**
//  * array.slice(start, stop):
//  *  - start: < stop
//  *  - stop: stop - 1
//  * => không làm thay đổi dữ liệu, giá trị trả ra là một giá trị copy
//  */
// newArray.slice(0, 3)
// newArray.indexOf(1)
// // newArray.reverse()
// newArray.join('-')
// // newArray.sort()
// // delete array[0]


// console.log(newArray,);
// console.log(...newArray);
// console.log(newArray.flat());

// let array = [1,2,3, ...[4,5]]
// let copy_array = [...array]
// // ...array = 1,2,3, ...[4,5]
// // [...array] = [1,2,3, ...[4,5]]

// let sinhVien = {
//     name: "Nguyen Van A",
//     age: 34
// }

// console.log(array);
// console.log(array.flat());

// console.log(sinhVien);

// for (let i = 0; i < array.length; ++i){
//     array[i] = 1
// }


// // For each:
// for (let iterator of array) {
//     iterator = 1
// }

// console.log(array);