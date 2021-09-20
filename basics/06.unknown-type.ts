let userInput: unknown;
let userName: string;

userInput = 'Max';

/**
 * Unknow giống như any: tức là ko xác định kiểu gì, ko biết kiểu gì
 * Tuy nhiên với unknown khi gán 1 value thì phải check để thằng TS
 * biết là mình muốn chuyển thành type gì
 * còn any thì gán vô tư, ràng buộc hơn any 1 tí
 */
if (typeof userInput === 'string') {
    userName = userInput;
}