const mongoose = require('mongoose');
const { type } = require('os');
const promostionSchema  = new mongoose.Schema({
    name : {type :String ,require: true},
    socite : {type : String, required : true },
    description : {type : String ,required : true},
    image : {type : Number, required : true},
    promoprice : {type : Number , required : true},
    enable : {type : Number , required : true}
});

module.exports  = mongoose.model('Poste',postSchema,'postes');

