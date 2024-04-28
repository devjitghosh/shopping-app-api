import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
    _id: Number,
    name: {
        type: String,
        required: [true, 'Item must have a name']
    },
    price: {
        type:Number,
        required: [true, 'Item must have a price']
    }
});

const itemModel = mongoose.model('Item', itemSchema);

export default itemModel;