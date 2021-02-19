const express = require('express');
const router = express.Router();

const useDB = require('../database/DBconnection');

router.get('/', (req,res) => {
    res.status(200).send({"message": "Bienvenido"});
});

router.post('/quote', (req,res) => {
    useDB.quote_create(req,res);
});

router.get('/quote', (req,res) => {
    useDB.quote_get(req,res);
});

module.exports = router;