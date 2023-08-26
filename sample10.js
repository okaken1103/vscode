// 課題1
let p1Element = document.getElementById('p1');
let inputElement = document.createElement('input');
inputElement.type = 'number';
inputElement.placeholder = '数値を入力してください。';
p1Element.parentNode.replaceChild(inputElement, p1Element);
// 課題2
let p2Element = document.getElementById('p2');
p2Element.textContent = 'テキスト文字列';
// 課題3
let p3Element = document.getElementById('p3');
p3Element.id = 'p5';
console.log(p3Element.id);