const Employee = require('../lib/Employee');
const Manager = require('../lib/Employee');

test('creates manager object', () => {
    const manager = new Manager('Laura');
});

test('set office number with constructor', () => {
    const testValue = 100;
    const e = new Manager('Foo', 1, 'manager@email.com', testValue);
    expect(e.officeNumber).toBe(testValue);
});

test('get office number with getOfficeNumber() method', () => {
    const testValue = 100;
    const e = new Manager('Foo', 1, 'manager@email.com', testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});

// if getRole is manager
test('getRole() return Manager', () => {
    const testValue = 'Manager';
    const e = new Manager('Foo', 1, 'manager@email.com', 100);
    expect(e.getRole()).toBe(testValue);
});