// 課題　定義ver
function Okamoto(p1, p2) {
    let p = p1 * p2 / 2; 
    return p; 
}
console.log(Okamoto(10, 20));

//課題　定義無しver１
let Kenta = function(p1, p2) {
    let p = p1 * p2 * 1/2;      
    return p; 
}
console.log(Kenta(100, 200));

//課題　定義無しver２
let triangle = [];

triangle[0] = function(p1, p2) {
    let p = p1 * p2 * 1/2;
    return p;
}
console.log(triangle[0](5, 10));