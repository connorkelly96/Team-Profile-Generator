const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('creates intern object', () => {
    const intern = new Intern('Matt');

});

test('set school with constructor', () => {
    const testValue = 'Harvard';
    const e = new Intern('Foo', 1, 'intern@email.com', testValue);
    expect(e.school).toBe(testValue);
});

test('get school with getSchool() method', () => {
    const testValue = 'Harvard';
    const e = new Intern('Foo', 1, 'intern@email.com', testValue);
    expect(e.getSchool()).toBe(testValue);
});

// if getRole() is intern
test('getRole() return Intern', () => {
    const testValue = 'Intern';
    const e = new Intern('Foo', 1, 'intern@email.com', 'Harvard');
    expect(e.getRole()).toBe(testValue);
});