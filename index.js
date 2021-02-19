const express = require('express');
const app = express();
require('dotenv').config();


const bodyParser = require('body-parser');

const router = require('./routes');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', router);

app.use((req,res) => {
    res.status(404).send({"message": "error Recurso no encotrado","status":404})
})

app.listen(9090, () => {
    console.log(`App Running in http://localhost:9090`);
})