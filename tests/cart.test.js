const Cart = require('./cart');
const Item = require('./item');

const testCart = new Cart();
const fakeBook = {
    id: 'abcdef123',
    name: 'book',
    price: 150,
    weight: 0.4,
    quantity: 50,
};
const fakeItem = {
    id: 'bnmhjk123',
    price: 100,
    weight: 0.1,
    quantity: 20,
};

const pen = new Item('qwerty456', 'pen', 5, 0.05, 1000);
const penWithNum2 = new Item('qwerty456', 'pen', 5, 0.05, 1000);
penWithNum2.num = 2;
const laptop = new Item('zxcvbn789', 'laptop', 25000, 1.4, 40);

test('Adds pen to cart', () => {
    expect(testCart.addItem(pen)).toEqual([pen]);
});

test('Adds laptop to cart', () => {
    expect(testCart.addItem(laptop)).toEqual([pen, laptop]);
});

test('Deletes pen from cart', () => {
    expect(testCart.deleteItem('qwerty456')).toEqual([laptop]);
});

test('Adds pens to cart again', () => {
    testCart.addItem(pen);
    expect(testCart.addItem(pen)).toEqual([laptop, penWithNum2]);
});

test('Deletes both pens from cart', () => {
    expect(testCart.deleteItem('qwerty456')).toEqual([laptop]);
});

test('Finds full cost of the cart', () => {
    testCart.addItem(pen);
    testCart.addItem(pen);
    testCart.addItem(laptop);
    expect(testCart.getFullСost()).toBe(50010);
});

test('Clears cart', () => {
    expect(testCart.clear()).toEqual([]);
});

test('Adds fake object with name and price to cart (test doubles used)', () => {
    expect(testCart.addItem(fakeBook)).toEqual([fakeBook]);
});

test('Adds fake object without name to cart (test doubles used)', () => {
    expect(testCart.addItem(fakeItem)).toBe(false);
});