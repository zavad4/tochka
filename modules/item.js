class Item {
    constructor(id, name, price, weight, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.weight = weight;
        this.quantity = quantity;
    }
    checkAvail() {
        if(this.quantity > 0) return true;
        return false;
    }
    makePurchase(num) {
        if (this.quantity > 0) {
            this.quantity -= num;
            return this.quantity;
        }
        return false;
    }
}

module.exports = Item;