import ProductProvider from './context';
import {storeProducts , detailProduct} from './data';
const provider = new ProductProvider();
provider.componentDidMount();
const book = {
    id: 'abcdef123',
    name: 'book',
    price: 150,
    weight: 0.4,
    count: 0,
};

const item = {
    id: 'bnmhjk123',
    price: 100,
    weight: 0.1,
    quantity: 20,
};

provider.state.products = [item, book];

test('Adding book to cart', () => {
    expect(provider.addToCart('abcdef123')).toEqual([book]);
});

test('Incrementing quantity of item', () => {
    expect(provider.increment('abcdef123')).toEqual(2);
});

test('Incrementing quantity of item once more', () => {
    expect(provider.increment('abcdef123')).toEqual(3);
});

test('Decrementing quantity of item', () => {
    expect(provider.decrement('abcdef123')).toEqual(2);
});

test('Calculating total price', () => {
    expect(provider.addTotal()).toEqual(330);
});

test('Decrementing quantity that equal 0', () => {
    provider.decrement('abcdef123');
    provider.decrement('abcdef123');
    expect(provider.decrement('abcdef123')).toEqual(false);
});

test('Getting item', () => {
    expect(provider.getItem('abcdef123')).toEqual(book);
});

test('Closing modal window', () => {
    expect(provider.closeModal()).toEqual(false);
});

test('Setting products', () => {
    expect(provider.setProducts('abcdef123')).toEqual([item, book]);
});

test('Removing item', () => {
    expect(provider.removeItem('bnmhjk123')).toEqual(0);
});

test('Clearing from the cart', () => {
    expect(provider.clearCart()).toEqual([]);
});

test('Clearing from the empty cart', () => {
    expect(provider.clearCart()).toEqual([]);
});

test('Calculating total price of empty cart', () => {
    expect(provider.addTotal()).toEqual(0);
});

test('Getting wrong item', () => {
    expect(provider.getItem('abcdef')).toEqual(undefined);
});

test('Incrementing quantity of wrong item', () => {
    expect(provider.increment('abcdef')).toEqual(false);
});

test('Removing wrong item', () => {
    expect(provider.removeItem('abcdef')).toEqual([item, book]);
});

//process.on('uncaughtException');