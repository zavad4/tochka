class Cart {
    constructor() {
        this.items = [];
    }
    addItem (item) {
        if (item.name && item.price) { 
            let flag = false;
            for (let i = 0; i < this.items.length; i++) {
                if (this.items[i].id === item.id) {
                    this.items[i].num++;
                    flag = true;
                }
            } 
            if (!flag) { 
                item.num = 1;
                this.items.push(item);
            }
            return this.items;
        }
        return false;
    }
}

module.exports = Cart; 
