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

    it(`index should return 200 response`, async () => {
        const response = await got(`http://127.0.0.1:1337`);

        expect(response.body).contain('Hello World!');
        expect(response.statusCode).equal(200);
    });
});