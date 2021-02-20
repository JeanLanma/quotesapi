const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 9090;


const bodyParser = require('body-parser');

const router = require('./routes');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', router);

app.use((req,res) => {
    res.status(404).send({"message": "error Recurso no encotrado","status":404})
})

app.listen(port, () => {
    console.log(`App Running in http://localhost:9090`);
})