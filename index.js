const express = require('express');
const app = express();
const port = 3000;

const path = require('path');

const basePath = path.join(__dirname, 'templates');

const product = require('./product')
app.use(
    express.urlencoded({
        extended:true,
    })
);
app.use(product);

app.use(express.json());

app.use(express.static('public'));

app.get('/', product);

app.use(function(req, res, next) {
    res.status(404).sendFile(`${basePath}/404.html`)
});

app.listen(port, () => console.log(`app rodando na porta: ${port}!`));