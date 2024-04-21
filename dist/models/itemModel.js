"use strict";
const mongoose = require('mongoose');
const itemSchema = mongoose.Schema({
    _id: Number,
    name: {
        type: String,
        required: [true, 'Item must have a name']
    },
    price: {
        type: Number,
        required: [true, 'Item must have a price']
    }
});
const itemModel = mongoose.model('Item', itemSchema);
module.exports = itemModel;
