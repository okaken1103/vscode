// (課題1)
let fruits = {apple:'りんご', strawberry:'いちご', grape:'ぶどう', lemon:'れもん'};
//(課題2)
console.log(fruits['grape']);
//(課題3)
for (okamoto in fruits) {
    console.log(okamoto);
}
let okamoto1 = Object.keys(fruits);
console.log(okamoto1);
//(課題4)
for (kenta in fruits) {
    console.log(fruits[kenta]);
}
let kenta1 = Object.values(fruits);
console.log(kenta1);