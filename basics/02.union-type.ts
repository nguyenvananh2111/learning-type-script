/**
 * Union nghia la co the co nhieu kieu trong 1 params
 * Vi du : input la number hoac la string
 */
function combine(input1: number | string, input2: number | string) {
    let result;
    /**
     * Tai sao phai check typeof
     * Boi vi: khong the lay number + string duoc
     * thang ts du thong minh de nhan biet
     */
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

console.log(combine(1,2));
console.log(combine('a', 2));
console.log(combine('a', 'b'));
