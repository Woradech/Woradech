let mongoose = require('mongoose');

//Schema Validation

let userSchema5 = mongoose.Schema({
    fx : {type: String ,required : true },
    a : {type: Number ,required : true},
    b : {type: Number ,required : true},
    n : {type: Number ,require : true}
});

let comtrapezoidalmodel = mongoose.model('comtrapezoidalmodel',userSchema5);
module.exports = comtrapezoidalmodel;