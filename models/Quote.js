const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
    message: {type: String, required: true, max: 150},
    author: {type: String, required: true}
});

module.exports = mongoose.model('Quote', QuoteSchema);