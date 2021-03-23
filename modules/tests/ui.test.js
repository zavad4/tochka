const UI = require('../userInterface')

//Fake items

const Book = {
    id: 'abcdef123',
    name: 'book',
    price: 150,
    weight: 0.4,
    quantity: 50,
};
const Pen = {
    id: 'bnmhjk123',
    name: 'pen',
    price: 100,
    weight: 0.01,
    quantity: 20,
};
const Pencil = {
    id: 'bnmhjk123',
    name: 'pencil',
    price: 30,
    weight: 0.7,
    quantity: 25,
};
const Fork = {
    id: 'bnmhjk123',
    name: 'fork',
    price: 1,
    weight: 0.15,
    quantity: 60,
};
const Spoon = {
    id: 'bnmhjk123',
    name: 'spoon',
    price: 45,
    weight: 0.12,
    quantity: 120,
};

const testUI = new UI([Book, Pen, Pencil, Fork, Spoon]);
const testEmptyUI = new UI([]);
const fakeUI = {items: [Book, Pen, Pencil]};

//test sortByPrice

test('Sort UI by ascending price', () => {
    expect(testUI.sortByPrice(1)).toEqual([Fork, Pencil, Spoon, Pen, Book]);
});

test('Sort UI by descending price', () => {
    expect(testUI.sortByPrice()).toEqual([Book, Pen, Spoon, Pencil, Fork]);
});

test ('Sort empty UI by ascending', () => {
    expect(testEmptyUI.sortByPrice(1)).toEqual([]);
});

test ('Sort empty UI by ascending', () => {
    expect(testEmptyUI.sortByPrice()).toEqual([]);
});

test ('Sort fake UI by ascending', () => {
    expect(FakeUI.sortByPrice(1)).toEqual([Pencil, Pen, Book]);
});

test ('Sort fake UI by descending', () => {
    expect(FakeUI.sortByPrice()).toEqual([Book, Pen, Pencil]);
});

// test search

test('search existing item in UI', () => {
    expect(testUI.search('book').toEqual(Book));
});

test('search not existing item in UI', () => {
    expect(testUI.search('booklet').toBe(false));
});

test('search existing item in fake UI', () => {
    expect(testUI.search('book').toEqual(Book));
});

test('search not existing item in fake UI', () => {
    expect(testUI.search('booklet').toBe(false));
});

// test filterbyPrice

test ('wrong price range', () => {
    expect(testUI.filterbyPrice(10,0).toBe(false));
});

test ('zero items correspond to filter', () => {
    expect(testUI.filterbyPrice(1000,5000).toEqual([]));
});

test ('multiple items correspond to filter', () => {
    expect(testUI.filterbyPrice(10,50).toEqual([Spoon, Pencil]));
});

test ('items on the edge of filter', () => {
    expect(testUI.filterbyPrice(30,45).toEqual([Spoon, Pencil]));
});
