class Item {
    constructor(id, name, stock) {
        this.id = id;
        this.name = name;
        this.stock = stock;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getStock() {
        return this.stock;
    }
    addStock(num) {
        this.stock += num;
    }
    sale(num) {
        if (this.stock < num) {
            throw new Error('在庫が足りません')
        } else {
            this.stock -= num;
        }
    }
}

class Bed extends Item {
    constructor(id, name, stock, size) {
        super(id, name, stock);
        this.size = size;
    }

    getSize() {
        return this.size;
    }
}

//課題
class Chair extends Item {
    constructor(id, name, stock, used) {
        super(id, name, stock);
        this.used = used;
    }
}
let bed1 = new Bed('0001', 'ソファベッド', 100, 'M');
let bed2 = new Bed('0002', 'シングルベッド', 100, 'S');
let bed3 = new Bed('0003', '子ども用ベッド', 10, 'S');
let item4 = new Item('0004', '鍋', 100);
let chair1 = new Bed('0005', '事務用椅子', 10, '新品');
let chair2 = new Bed('0006', '家庭用椅子', 5, '中古');
let chair3 = new Bed('0005', '事務用椅子', 12, '中古');

let itemList = [bed1, bed2, bed3, item4, chair1, chair2, chair3]

itemList.forEach((e) => {
    console.log(e);
})

let totalStock = 0;
for (let i = 0; i < itemList.length; i++) {
    totalStock += itemList[i].getStock();
}
console.log('全体の在庫数:' + totalStock);