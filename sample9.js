//課題1
let apple = {
    name: `りんご`,
    color: '赤',
    size: `普通`,
    weight: `100`,
};

let orange = {
    name: 'オレンジ',
    color: '黄色',
    size: `小さい`,
    weight: `50`,
};

let grape = {
    name: `ぶどう`,
    color: '紫色',
    size: `とても小さい`,
    weight: `70`,
};
//課題2
let fruit = [apple, orange, grape];
//課題3
let totalWeight = 0;

fruit.forEach(e => {
    totalWeight += parseInt(e.weight);
});

console.log(`果物の重さの合計は ${totalWeight} です。`);