// /**
//  * Declaration Function: Khai báo rõ ràng
//  * Arrow Function: hàm tắt
//  * Arrow Function Multi line
//  * Anmonyous Function: hàm ẩn danh(bảo mật)
//  */

// // Declaration Function: Khai báo rõ ràng
// /**
//  * Hoisting: pham vị toàn cục
//  * 
//  * Cú pháp: function tên_hàm(tham_số1, tham_số2,...){
//  * 
//  *          }
//  */

// // console.log(tong(1,2));

// // function tong(args){
// //     return [...arguments]
// // }

// // // 100 tham số


// // console.log(tong(5,3,2,1.1,3,4,5,6,7));

// // Arrow Function: hàm tắt (hơn 90% dùng trong React JS/TS)
// /**
//  * - Không có tính hosting => phải khai báo rồi mới được dùng
//  * - có kiểu dữ liệu
//  * - cho viết viết tắt trên 1 hàng
//  * Cú pháp:
//  *  - let/const tên_biến = tên_hàm(tham_số1,tham_số2) => code
//  */

// const tong = function (a,b){
//     return a + b
// }
// const tongNhieuThamSo = function (args){
//     let res = tong(1,2)
//     return [...arguments].concat(res)
// }

// let soNguyenTo = [1,2,3,4,5,6,7,8]

// const Ngto = function(x){
//     for (let i = 2; i <= Math.sqrt(x); i++) {
//         if (x % i == 0)
//             return false;
//     }
//     return x > 1;
// }
// // args = [1,2,3,4,5,6,7,8]
// const kiemTraSoNto = function (args){
//     let array = [...arguments]
//     for (const iterator of array) {
//         if (Ngto(iterator))
//             console.log(iterator);
//     }
// }

// kiemTraSoNto(...soNguyenTo)

// // [1,2,3,4,5,6,7,8] != 1,2,3,4,5,6,7,8 (tham số)

// // ...[1,2,3,4,5,6,7,8] = 1,2,3,4,5,6,7,8