const got = require('got');
const App = require('./app');
const assert = require('assert');

async function doit() {
    const app = new App();

    app.run();

    const response = await got(`http://127.0.0.1:1337`);

    assert.equal(response.body, 'Hello World!');
    assert.equal(response.statusCode, 200);

    app.close();
}

doit();
