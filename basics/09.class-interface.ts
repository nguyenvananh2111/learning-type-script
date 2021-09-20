/**
 * interface có thể extends nhiều interface
 * khác với class là chỉ extends 1 class mà thôi
 */
interface Named {
    readonly name: string;
}

interface AddFunction {
    add(number1: number, number2: number): number;
}

interface Greetable extends Named, AddFunction {
    greet(phrase: string): void;
}

class Person implements Greetable {
    constructor(public name: string) {}

    greet(phrase: string) {
        console.log("here");
    }

    add(number1: number, number2: number) {
        return number1 + number2;
    }
}
