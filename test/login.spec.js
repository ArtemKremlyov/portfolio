const webdriverio = require('webdriverio')
const option = require('../wdio.conf')
const client = webdriverio.multiremote(option)

jest.setTimeout(40000)

beforeAll(()=>{
    return client.init().url('http:/localhost:8080/admin#/login');
});

test('Есть кнопка войти',() => {
    return client
        .isExisting(".form__btn").then(browsers => {
            for(const browserName in browsers) {
                expect(browsers[browserName]).toBe(true)
            }
        })
})
afterAll(()=> {
    return client.end()
})