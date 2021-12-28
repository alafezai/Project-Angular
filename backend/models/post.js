const mongoose = require('mongoose');
const { type } = require('os');
const postSchema  = new mongoose.Schema({
    user : {type :Array },
    sujet : {type : String},
    datePost : {type : String},
    nbComent : {type : Number},
    comments : {type : Array},
    nbJaime : {type : Number}
});

module.exports  = mongoose.model('Poste',postSchema,'postes');

