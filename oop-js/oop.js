/**
 * Class: khai báo ra dữ liệu mà người dùng muốn định nghĩa.
 * Constructor: khởi tạo ra đối tượng:
 *  - Overload (nạp chồng): nghĩa
 */
class Person {
    static listUser = [];
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
        Person.listUser.push(this);
    }

    printInfoUser() {
        [...Person.listUser].forEach((value, index) => {
            console.log(value.name);
        })
    }
}

class Student extends Person {
    
    static nameSchool = 'TPHCM'
    
    constructor(name, phone) {
        super(name, phone)
    }

    printInfoUser() {
        super.printInfoUser()
    }

    getNameSchool() {
        console.log(User.nameSchool);
    }
}

// let student = new Student("Nguyen Van A", 432423432)
// student.printInfoUser()


interface 





