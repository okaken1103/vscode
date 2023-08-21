//1～100までの整数を値とした配列名aの配列
let a = Array.from({ length: 100 }, (_, index) => index + 1);
console.log(a); // 配列の内容を表示

//課題　3の倍数のみ抽出
let b3 = a.filter(e => e % 3 == 0);
console.log(b3);

//課題　5の倍数のみ抽出
let b5 = a.filter(function(e){
    return e % 5 == 0;
});
console .log(b5);