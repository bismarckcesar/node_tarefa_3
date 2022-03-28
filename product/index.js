const express = require('express')
const router = express.Router()

const path = require('path')

const basePath = path.join(__dirname, '../templates')

router.get('/', (req, res) => res.sendFile(`${basePath}/index.html`));

router.get('/addproduct', (req, res) => {
    return res.sendFile(`${basePath}/form.html`)
})

router.post('/saveproduct', (req, res) =>{
    console.log(req.body)
    const nome = req.body.nome
    const valor = req.body.valor
    const quantidade = req.body.quantidade

    console.log(nome, valor, quantidade);
    return res.end()
})

module.exports = router