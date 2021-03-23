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
    makeDiscount(percent) {
        this.price -= (this.price * (percent / 100));
        return this.price;
    }
    calcDelivery() {
        let value = (this.price * 0.02 + this.weight * 10);
        return value;
    }
    changeName(name) {
        this.name = name;
        return this.name;
    }
}

module.exports = Item;
