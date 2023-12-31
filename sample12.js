let cate1 = [
    '---',                  
    '家具',
    'ベッド・マットレス',
    '収納家具・収納グッズ',
    '子ども家具',
    '調理器具'
];


//課題1
let cate2 = [
    ['---'],
    ['ベッド', 'ソファ', '棚・ラック', 'テーブル・椅子'],
    ['ベッド', '寝具', 'マットレス'],
    ['家具・ラック', '収納システム'],
    ['子ども部屋家具', 'ベビー家具・ベビーグッズ'],
    ['キッチン器具','おもちゃ調理器具']
];

//課題2 課題3
var itemList = [
    { id: '0001', name: 'ソファベッド', price: '10,000', tags: ['ベッド', 'ソファ', '寝具'] },
    { id: '0002', name: 'シングルベッド', price: '15,000', tags: ['ベッド', 'ソファ', '寝具'] },
    { id: '0003', name: '子ども用ベッド', price: '8,000', tags: ['ベッド', 'ソファ', '寝具', '子ども部屋家具'] },
    { id: '0004', name: 'ソファ', price: '9,000', tags: ['ソファ'] },
    { id: '0005', name: 'キューブボックス', price: '5,000', tags: ['家具・ラック', '収納システム'] },
    { id: '0006', name: 'オープンラック', price: '3,000', tags: ['家具・ラック', '収納システム'] },
    { id: '0007', name: 'コンピュータデスク', price: '3,500', tags: ['テーブル・椅子'] },
    { id: '0008', name: 'サイドテーブル', price: '2,000', tags: ['テーブル・椅子'] },
    { id: '0009', name: 'ダイニングテーブル', price: '13,000', tags: ['テーブル・椅子'] },
    { id: '0010', name: '子ども部屋用収納', price: '5,500', tags: ['収納システム', '子ども部屋家具'] },
    { id: '0011', name: '包丁', price: '1,000', tags: ['キッチン器具']},
    { id: '0012', name: 'まな板', price: '800', tags: ['キッチン器具', '子ども部屋家具', 'おもちゃ調理器具']},
    { id: '0013', name: 'フォーク', price: '200', tags: ['子ども部屋家具', 'おもちゃ調理器具']},
    { id: '0014', name: 'スプーン', price: '150', tags: ['子ども部屋家具', 'おもちゃ調理器具']},
];




let cate1Element = document.getElementById('mainMenu');
let cate2Element = document.getElementById('subMenu');
var itemListElement = document.getElementById('itemList');

function setMainMenu() {
    cate1Element.innerHTML = '';

    // 課題4
        for (const value of cate1) {
            const option = document.createElement('option');
            option.value = value;
            option.text = value;
            cate1Element.appendChild(option);
        }
    }
function setSubMenu(idx) {
    cate2Element.innerHTML = '';
        //課題4
        for (const value of cate2[idx]) {
            const option = document.createElement('option');
            option.value = value;
            option.text = value;
            cate2Element.appendChild(option);
        }
    }


function viewItemList(tag) {
    itemListElement.innerHTML = '';
    //課題4
    for (const item of itemList) {
        if (item.tags.some(t => t === tag)) {
            let li = document.createElement('li');
            let text = document.createTextNode(item.id + ':' + item.name + '/' + item.price + '円');
            li.appendChild(text);
            itemListElement.appendChild(li);
        }
    }
}


cate1Element.addEventListener('change', function () {
    let idx = cate1Element.selectedIndex;
    setSubMenu(idx);
    viewItemList(cate2[idx][0]);
});
cate2Element.addEventListener('change', function () {
    let val = cate2Element.value;
    viewItemList(val);

});

setMainMenu();
setSubMenu(0);