function add(number1: number, number2: number): number {
    return number1 + number2;
    // return 'string' // ERROR
}

// No return: void
function print(number: number): void {
    console.log("result: " + number);
}

print(add(1, 5));

// Type function
let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = print; // Fail

// CALL BACK
function funcWithCallback(num1: number, num2: number, cb: (rs: any) => void) {
    const rs = num1 + num2;
    cb(rs);
}

// Arrow function
const addArrow: (a: number, b: number) => number = (a: number, b: number) => {
    return a + b;
};


const addArrow2 = (a: number, b: number = 1) => {
    return a + b;
};
addArrow2(100);