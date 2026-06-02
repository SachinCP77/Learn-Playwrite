function addnum(a, b, c) {
    return a + b + c;

}

let num = [2, 3, 4];
let z = addnum(...num);
console.log(z);

let respcode = [200, 300, 400];

function haserror(...rtcode) {
    return rtcode.some(c => c >= 200);
}

haserror(...respcode);