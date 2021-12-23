const mongoose = require('mongoose');
const { type } = require('os');
const postSchema  = new mongoose.Schema({
    user : {type :Array ,require: true},
    sujet : {type : String, required : true },
    datePost : {type : String ,required : true},
    nbComent : {type : Number, required : true},
    comments : {type : Array , required : true},
    nbJaime : {type : Number , required : true}
});

module.exports  = mongoose.model('Poste',postSchema,'postes');

