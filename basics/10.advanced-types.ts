// Intersection Types
type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;
type Numeric = number | boolean;

const e1: ElevatedEmployee = {
    name: "anh",
    privileges: ["ADMIN"],
    startDate: new Date(),
};

// Guards type
// Dùng if để kiểm tra trong function

type UnknownEmployee = Employee | Admin;
function printEmployeeInformation(emp: UnknownEmployee) {
    console.log(emp.name);
    // Guards type check if
    // Or
    //  if (vehicle instanceof Truck) {}
    if ("privileges" in emp) {
        console.log(emp.privileges);
    }
}

// Discriminated Unions
// Dùng khi mà cùng loại trả về mà khác tên
// ví dụ khi flyingSpeed , runningSpeed đều là number thì thêm type vào để
// phân biệt
interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number
}

type Animal = Bird | Horse;
function moveAnimal (animal: Animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
        default:
            speed = 0;
            break;
    }
    console.log('speed: ' + speed);
}

// Type Casting
// const userInputText = document.getElementById('user-input');
// TypeScript sẽ nhận ra userInputText là htmlelement hoac null
// khi them ! => document.getElementById('user-input')!
// thì sẽ báo cho TS rằng đéo có null ở đây, chỉ có htmlelement thôi

// Giup cho Type script biet loai gi
// giúp cho TS biết chính xác loại gì
// bởi gì ở đây TS sẽ tự suy luận và cho rằng là loại HTMLElement thôi
const userInputText = document.getElementById('user-input') as HTMLInputElement;
userInputText.value = 'hello';


// INDEX properties
// Không cần khai báo chính xác tên cua properties, sau ni khai cũng được
// Giúp linh động hơn
interface ErrorContainer {
    [prop: string]: string;
}

const errBag: ErrorContainer = {
    email: 'Email error',
    username : 'Must start with capital character'
}

// FUNCTION OVERLOADS
type Combinable = string | number;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add (a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a+b;
}
const result = add('Max', 'Anh');
// Cho nay result se la String hoac Number
// Nen TS ko the xac dinh string hay ko de split vi number ko co split
// do do: khai bao them la neu a : number , b : number thi return la number
// a: string, b: string thi return la string de thang TS biet
console.log(result.split(' '));