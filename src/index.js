const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');




const { PORT } = require('./config/serverConfig');

const setupAndStartServer = async () => {
    
    const app = express();
    app.get('/', (req, res) => {
        res.send('Hello World!');
    });
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(PORT, () => {
        console.log(`Example app listening at http://localhost:${PORT}`);
    });
}

setupAndStartServer();
 