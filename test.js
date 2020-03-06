const request = require('request');
const App = require('./app');
const assert = require('assert');

function doit() {
    const app = new App();

    app.run();

    request('http://127.0.0.1:1337', (err, res, body) => {
        if (err) { return console.log(err); }

        assert.equal(res.body, 'Hello World!');
        assert.equal(res.statusCode, 200);
        
        app.close();
    });
}

doit();
