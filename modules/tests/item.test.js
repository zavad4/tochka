const Item = require('../item');

const laptop = new Item('zxcvbn789', 'laptop', 25000, 1.4, 40);
const fakeBook = {
    id: 'abcdef123',
    name: 'book',
    price: 150,
    weight: 0.4,
    quantity: 50,
    checkAvail() {
        if(this.quantity > 0) return true;
        return false;
    }
};
const fakePencil = {
    id: 'bnmhjk123',
    name: 'pencil',
    price: 100,
    weight: 0.1,
    checkAvail() {
        if(this.quantity > 0) return true;
        return false;
    }
};

test('Checks availability of laptop (1)', () => {
    expect(laptop.checkAvail()).toBe(true);
});

test('Checks availability of laptop (2)', () => {
    laptop.makePurchase(40);
    expect(laptop.checkAvail()).toBe(false);
});

test('Calculates delivery of laptop', () => {
    expect(laptop.calcDelivery()).toBe(514);
});

test('Change name of laptop', () => {
    expect(laptop.changeName('super_laptop')).toBe('super_laptop');
});

test('Makes discount 15 percent', () => {
    expect(laptop.makeDiscount(15)).toBe(21250);
});

test('Calculates delivery of laptop after discount', () => {
    laptop.changeName('puper_laptop');
    laptop.makeDiscount(20);
    expect(laptop.calcDelivery()).toBe(354);
});

test('Checks availability of fake book (test doubles used)', () => {
    expect(fakeBook.checkAvail(fakeBook)).toBe(true);
});

test('Checks availability of fake pencil (test doubles used)', () => {
    expect(fakePencil.checkAvail(fakePencil)).toBe(false);
});
