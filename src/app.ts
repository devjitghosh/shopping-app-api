const express = require('express');
const app = express();
const router = require('./routes/routes');
const bodyparser = require('body-parser');
const cors = require('cors');

app.use(express.static('public'))
app.use(bodyparser.json());
app.use(cors());
app.get('/', (req, res, next)=> {
    res.status(200).json({
        status: 'success',
        body: "base path"
    })
});

app.use(router);

module.exports = app;