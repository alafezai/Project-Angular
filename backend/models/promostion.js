const mongoose = require('mongoose');
const { type } = require('os');
const promostionSchema  = new mongoose.Schema({
    name : {type :String },
    socite : {type : String},
    description : {type : String },
    image : {type : String},
    promoprice : {type : Number },
    enable : {type : Number}
});

module.exports  = mongoose.model('Promostion',promostionSchema,'promostions');

