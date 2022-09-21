const Employee = require('../lib/Employee');
const Engineer = require('../lib/Employee');

test('creates engineer object', () => {
    const engineer = new Engineer('Mark');

});

test('set github account with constructor', () => {
    const testValue = 'GitHubAccount';
    const e = new Engineer('Foo', 1, 'engineer@email.com', testValue);
    expect(e.github).toBe(testValue);
})

test('get github account with getGithub() method', () => {
    const testValue = 'GitHubAccount';
    const e = new Engineer('Foo', 1, 'engineer@email.com', testValue);
    expect(e.getGitHub()).toBe(testValue);
});

// if getRole() is engineer
test('getRole() return Engineer', () => {
    const testValue = 'Engineer';
    const e = new Engineer('Foo', 1, 'engineer@email.com', 'GitHubAccount');
    expect(e.getRole()).toBe(testValue);
});