const axios = require('axios');
const got = require('got');
const App = require('./app')
const { expect } = require('chai');

describe('Static', async () => {
    const app = new App();

    before(() => {
        app.run();
    });

    after(() => {
        app.close();
    });

    it('index should return 200 response with axios', async () => {
        const response = await axios.get('http://127.0.0.1:1337');

        expect(response.data).equal('Hello World!');
    });
});
