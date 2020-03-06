const express = require('express');

class App {
    constructor() {
        this.app = express();

        this.app.get('/', function (req, res) {
            res.send('Hello World!');
        });
    }
    
    run () {
        this.server = this.app.listen(1337, function () {
            console.log('Example app listening on port 3000!');
        });
    }

    close() {
        this.server.close();
    }
}

module.exports = App;