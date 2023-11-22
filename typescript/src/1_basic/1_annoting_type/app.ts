/**
 * Dữ liệu:
 *  - Khai báo trực: gán bằng 1 giá trị
 *  - intelligence
 */

// let number = 1
{
    let number: number;


    type Person = {
        name: string,
        age: number,
        hobbies?: string[]
    }

    let infoUser: Person = {
        name: "Nguyen Van A",
        age: 20,
        hobbies: ["ăn", "ngủ"]
    }



    let checkEven = (n: number): Person => {
        
        return infoUser
    }


    let listInfoUser: Person[] = [];
    listInfoUser.push(infoUser)

    for (let item of listInfoUser) {
        console.log(item);
    }

    Object.create({

    })
    let okObj: {
        toString: () => boolean | string
        func1: () => number
        func2?: () => void
        func3: () => {
            name: string,
            age: number
        }
        // toString: boolean

    } = {
        func1: () => 1,
        func3: () => (
            {
                name: "Nguyen Van A",
                age: 20
            }
        ),
        toString: () => {
            return "";
        }
    }; // OK
    let obj: Object = {

        toString() {
            return "";
        }
    }

}

// C++, C, Java, Python





