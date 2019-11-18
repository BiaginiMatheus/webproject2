let {Schema, model} = require('mongoose');

let dbSchema = new Schema({
    user:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    admin:{
        type: Boolean,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    adress:{
        type: String,
        required: true,
    },
    picture: [],
},{
    timestamps: true,
});

module.exports = model('dataBase', dbSchema);