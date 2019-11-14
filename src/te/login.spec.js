const fs = require("fs");
const webdriverio = require('webdriverio')
const option = require('../wdio.conf');
const client = webdriverio.multiremote(option)

jest.setTimeout(20000)

beforeAll(()=>{
    return client.init.url("http://localhost:8080/admin#/login")
})

test("Есть кнопка авторизоваться",()=>{
    return c;oemt
})