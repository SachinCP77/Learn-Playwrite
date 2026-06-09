let scores = [
    [45, 55, 65],
    [75, 85, 95],
    [35, 25, 15]
];

let rowsum = scores.map(row => row.reduce((a, b) => a + b, 0));

console.log(rowsum);


let scro1 = [33, 44, 55, 66];

let rowsubtract = scro1.reduce((a, b) => a - b, 0);

console.log(rowsubtract);
