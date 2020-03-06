const axios = require('axios');
const App = require('./app')
const assert = require('assert');

describe('Static', async () => {
    const app = new App();

    before(() => {
        app.run();
    });

    after(() => {
        app.close();
    });

    it(`index should return 200 response`, async () => {
        const response = await axios.get(`http://127.0.0.1:1337`);

        assert.equal(response.data, 'Hello World!');
    });
});
