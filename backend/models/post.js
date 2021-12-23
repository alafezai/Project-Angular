const mongoose = require('mongoose');
const { type } = require('os');
const postSchema  = new mongoose.Schema({
    user : {type :array ,require: true},
    sujet : {type : string, required : true },
    datePost : {type : string ,required : true},
    nbComent : {type : number, required : true},
    comments : {type : array , required : ture},
    nbJaime : {type : number , required : true}
});

module.exports  = mongoose.model('Poste',postSchema,'postes');

