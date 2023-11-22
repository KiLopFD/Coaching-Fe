let number = 1

// XSS
number = "<script></script>"

const infoUser = {
    name: "Nguyen Van A",
    age: 20
}

// let newInfoUser = { ...infoUser }
// console.log(newInfoUser);

a = 1
console.log(a);

// infoUser = ""
console.log(infoUser.name, infoUser.age);


// es2016

// let { name, age } = infoUser // { ... } = infoUser


// console.log(name, age);

let checkEven = (n) => {
    if (n % 2 == 0)
        return true
    return false
}


let listInfoUser = []
listInfoUser.push(infoUser)


for (let item of listInfoUser) {
    console.log(item);
}

const func1 = () => 1
let c = 0;

// void
const func2 = () => {
    let a = 1;
    let b = 1
    c = a + b;
}

// object
let func3 = () => (
    {
        name: "Nguyen Van A",
        age: 20
    }
)

// a * (b + c)


console.log(func3());