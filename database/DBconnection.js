const mongoose = require('mongoose');

const conectionString = `mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0.uua7q.azure.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(conectionString,{useNewUrlParser: true,useUnifiedTopology:true, useFindAndModify:false});

mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error al conectar a mongoDB'));

const { Quote } = require('../models/index');

exports.quote_create = (req,res) => {
    let quote = new Quote({
        message: req.body.message,
        author: req.body.author
    });

    quote.save(function(err){
        if(err) return console.log(err);

        res.status(200).send({"message":"Registro añadido a la colección"})
    });
}

exports.quote_get = (req,res)=>{
    Quote.find({}, (err,response) => {
        if(err) return console.log(err);
        res.status(200).send({response});
    });
}