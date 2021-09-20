// Dùng 1 string hoặc number cụ thể trong loại này

let say : 'hello' | 'xin chao' | 1;

say = 'hello'; // OK
say = 'xin chao'; // OK
say = 1; // OK
// say = 'aaa' Fail boi vi say phai la hello hoac xin chao thoi

function printText(text: string, alignment: 'left' | 'right' |'center') {
    console.log(`${text} alignment ${alignment}`);
}


console.log(printText('Hello moi nguoi', 'center'));