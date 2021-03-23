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
    deleteItem(item_id) { 
        this.items = this.items.filter(item => item.id != item_id);
        return this.items;
    }
    getFullСost() {
        const prices = this.items.map( x => x.price * x.num);
        const res = prices.reduce((a, b) => a + b);
        if(res) return res;
        return false;
    }
    clear () {
        this.items = [];
        return this.items;
    }
}

module.exports = Cart; 
